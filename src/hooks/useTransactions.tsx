import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import api from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTrasactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    
    })
    const { transaction } = response.data;

    setTrasactions ([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
 
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}