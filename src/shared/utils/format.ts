export function toMoney(valueToFormat: number) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(valueToFormat)
}
