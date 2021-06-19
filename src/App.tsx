import { useState } from "react";
import { TransactionContext } from "./TransactionsContext";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard/indes";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handelCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }
  return (
    <TransactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionContext.Provider>
  );
}
