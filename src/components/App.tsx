import React from 'react'

import { CharacterProvider } from './CharacterContext'
import CharacterList from './CharacterList'
import RandomizedTeam from './RandomizedTeam'

// THINGS I NEED
/*
    open the character screen in some kind of modal (modals are cool)
    // PORTAL FOR MODALS
*/

const App = () => {

	// console.log(state)
	return (
		<CharacterProvider>
			<div style={{ display: 'flex' }}>
				<CharacterList />
				<RandomizedTeam />
			</div>
		</CharacterProvider>
	)
}

export default App