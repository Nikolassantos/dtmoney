import IncomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'
import { useTransactions } from '../../shared/hooks/useTransactions'
import { Container } from './styles'

function Summary() {
	const { transactions } = useTransactions()

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount

				acc.total += transaction.amount
			} else {
				acc.withdraw += transaction.amount

				acc.total -= transaction.amount
			}

			return acc
		},
		{
			deposits: 0,
			withdraw: 0,
			total: 0
		}
	)

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={IncomeImg} alt='' />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt='' />
				</header>
				<strong>
					-
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.withdraw)}
				</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='' />
				</header>
				<strong>
					{' '}
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	)
}

export default Summary
