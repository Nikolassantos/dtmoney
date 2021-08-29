import LogoImg from '../../assets/images/logo.svg'
import { Container, Content } from './styles'
import { IHeaderProps } from './types'

function Header(props: IHeaderProps) {
	const { onOpenNewTransactionModal } = props

	return (
		<Container>
			<Content>
				<img src={LogoImg} alt='dt money' />
				<button onClick={onOpenNewTransactionModal} type='button'>
					Nova transação
				</button>
			</Content>
		</Container>
	)
}

export default Header
