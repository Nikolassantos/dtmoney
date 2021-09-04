import { useContext } from 'react'
import IncomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

function Summary() {
	const data = useContext(TransactionsContext)

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={IncomeImg} alt='' />
				</header>
				<strong>R$1000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt='' />
				</header>
				<strong>- R$5000,00</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='' />
				</header>
				<strong>R$500,00</strong>
			</div>
		</Container>
	)
}

export default Summary
