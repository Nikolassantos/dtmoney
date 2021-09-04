import { ReactNode } from 'react'

export interface ITransactionProps {
	id: number
	title: string
	amount: number
	category: string
	createdAt: string
	type: string
}

export interface ITransactionProviderProps {
	children: ReactNode
}

export interface ITransactionContextData {
	transactions: ITransactionProps[]
	createTransaction: (transaction: TransactionInput) => Promise<void>
}

export type TransactionInput = Omit<ITransactionProps, 'id' | 'createdAt'>
