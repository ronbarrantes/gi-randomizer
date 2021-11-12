import React, { useReducer } from 'react'
import { selectedCharacterReducer } from '../reducers/selectedCharacterReducer'
import { charactersAvailable, CharacterInfo } from '../reducers/characterReducer'
import { randomizeCharacters } from '../utils'
import { useCharacters } from '../components/CharacterContext'
import CharacterCard from './CharacterCard'

export const RandomizedTeam: React.FC = () => {
	const [state, dispatch] = useReducer(selectedCharacterReducer, [])
	let chars: CharacterInfo[] = useCharacters()

	const handleRandomize = () => {
	 	const randomizedTeam = randomizeCharacters(charactersAvailable(chars))
		dispatch({ type: 'RANDOMIZE_CHARACTERS', characters: randomizedTeam })
	}

	return (
		<div>
			<button onClick={handleRandomize}>Randomize</button>
			<ul>
				{state.map(char => <li key={char.id}>
					<CharacterCard
						id={char.id}
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