import { useState } from 'react'
import Modal from 'react-modal'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import NewTransactionModal from './components/NewTransactionModal'
import { TransactionsProvider } from './shared/hooks/useTransactions'
import GlobalStyle from './styles/global'

Modal.setAppElement('#root')

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false)

	function handleIOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleIOpenNewTransactionModal} />

			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</TransactionsProvider>
	)
}
