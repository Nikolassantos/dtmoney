import Modal from 'react-modal'
import { INewTransactionModalProps } from './type'

function NewTransactionModal(props: INewTransactionModalProps) {
	const { isOpen, onRequestClose } = props

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>Cadastrar Transação</h2>
		</Modal>
	)
}

export default NewTransactionModal
