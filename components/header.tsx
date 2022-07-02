import styled from 'styled-components'
import Nav from './nav'

const Header = styled.header`
	display: flex;
	align-items: center;
	border-bottom: var(--border-size) var(--border-type) var(--border-color);
	padding: 1rem 4rem;
	gap: 2rem;

	h1 {
		font-weight: normal;
	}

	nav {
		margin-left: auto;
		float: right;
	}
`

export default () => {
	return (
		<Header>
			<h1>wych.dev</h1>
			<Nav />
		</Header>
	)
}
