import React, { useReducer } from 'react'
import CharacterCard from './CharacterCard'

import { characterReducer } from '../reducers/characterReducer'
import { characterState } from '../state/initialCharacterState'

// THINGS I NEED
/*

the main randomizer
    all the characters
    things to filter the characters by element (and category)
    thing to deselect unavailable characters

the character selector
    lock a character that one likes
    allow to preselect a character

other stuff
    open the character screen in some kind of modal (modals are cool)
    // PORTAL FOR MODALS
*/

const App = () => {
	const [state, dispatch] = useReducer(characterReducer, characterState)
	console.log(state, dispatch)

	return (
		<>
			<ul>
				{state.map(char => <li key={char.id}>
					<CharacterCard
						name={char.name}
						isAvailable={char.isAvailable}
						isSelectable={char.isSelectable}
					/>
				</li>)}
			</ul>
		</>
	)
}

export default App