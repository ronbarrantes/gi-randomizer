import React, { useReducer, useEffect } from 'react'
import { selectedCharacterReducer } from '../reducers/selectedCharacterReducer'
import { charactersAvailable, CharacterInfo } from '../reducers/characterReducer'
import { randomizeCharacters } from '../utils'
import { useCharacters } from '../context/CharacterContext'
import CharacterCard from './CharacterCard'

export const RandomizedTeam: React.FC = () => {
	const [state, dispatch] = useReducer(selectedCharacterReducer, [])
	let chars: CharacterInfo[] = useCharacters()

	const handleRandomize = () => {
		const randomizedTeam = randomizeCharacters(charactersAvailable(chars))
		dispatch({ type: 'RANDOMIZE_CHARACTERS', characters: randomizedTeam })
	}

	const randomCharacterList: React.CSSProperties = {
		display: 'flex',
		margin: '0',
	}

	useEffect(() => {
		handleRandomize()
	}, [])

	return (
		<div>
			<button onClick={handleRandomize}>Randomize</button>
			<ul style={randomCharacterList}>
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