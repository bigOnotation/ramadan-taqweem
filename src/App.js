import React from 'react'
import './App.css'

import Header from './components/header'
import Duas from './components/duas'
import Grid from './components/grid'

function App() {
	return (
		<div>
			<Header />
			<Duas fajr={true}/>
			<Grid />
			<Duas />
			<footer>
				<p className="ayah">ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ</p>
				<a href="https://t.me/bigOnotation">&copy; Big O Notation 2020</a>
			</footer>
		</div>
	)
}

export default App