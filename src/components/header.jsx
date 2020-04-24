import React from 'react'
import Ramadan from './ramadan'
import './header.css'

const Header = props => {
	return (
		<header className="header">
			<h1>Ramazon</h1>
			<Ramadan />
			<h1>Muborak!</h1>
		</header>
	)
}

export default Header