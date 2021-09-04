import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import {
	ITransactionContextData,
	ITransactionProps,
	ITransactionProviderProps,
	TransactionInput
} from '../interfaces/transaction'

const TransactionsContext = createContext<ITransactionContextData>(
	{} as ITransactionContextData
)

export function TransactionsProvider({ children }: ITransactionProviderProps) {
	const [transactions, setTransactions] = useState<ITransactionProps[]>([])

	useEffect(() => {
		api
			.get('/transactions')
			.then((response) => setTransactions(response.data.transactions))
	}, [])

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('/transactions', {
			...transactionInput,
			createdAt: new Date()
		})
		const { transaction } = response.data

		setTransactions([...transactions, transaction])
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext)

	return context
}
