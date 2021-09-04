import { createContext, useEffect, useState } from 'react'
import { api } from './services/api'
import {
	ITransactionProps,
	ITransactionProviderProps
} from './shared/interfaces/transaction'

export const TransactionsContext = createContext<ITransactionProps[]>([])

export function TransactionsProvider({ children }: ITransactionProviderProps) {
	const [transactions, setTransactions] = useState<ITransactionProps[]>([])

	useEffect(() => {
		api
			.get('/transactions')
			.then((response) => setTransactions(response.data.transactions))
	}, [])

	return (
		<TransactionsContext.Provider value={transactions}>
			{children}
		</TransactionsContext.Provider>
	)
}
