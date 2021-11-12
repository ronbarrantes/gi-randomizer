import React, { useReducer } from 'react'
import { selectedCharacterReducer } from '../reducers/selectedCharacterReducer'
import { charactersAvailable } from '../reducers/characterReducer'
import { randomizeCharacters } from '../utils'
import { useCharacters } from '../components/CharacterContext'
import CharacterCard from './CharacterCard'

// type HandleCharacterProp = (id: number) => void

export const RandomizedTeam: React.FC = () => {
	const [state, dispatch] = useReducer(selectedCharacterReducer, [])
	const chars = useCharacters()

	const handleRandomize = () => {
	 	const randomizedTeam = randomizeCharacters(charactersAvailable(chars))
		dispatch({ type: 'RANDOMIZE_CHARACTERS', characters: randomizedTeam })
	}

	// const handleAvailableChars = useCharUpdate()

	return (
		<div>
			<button onClick={handleRandomize}>Randomize</button>
			<ul>
				{state.map(char => <li key={char.id}>
					<CharacterCard
						id={char.id}
						// handleAvailable={handleAvailableChars as HandleCharacterProp}
						name={char.name}
						isAvailable={char.isAvailable}
						isSelectable={char.isSelectable}
					/>
				</li>)}
			</ul>
		</div>
	)
}

export default RandomizedTeam