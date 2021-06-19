import React, {useContext} from 'react'
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionsContext';



export function Summary(){

  const data = useContext(TransactionContext);

  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
    </Container>
  )
}