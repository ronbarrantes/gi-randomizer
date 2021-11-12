import React, { useReducer } from 'react'
import { selectedCharacterReducer } from '../reducers/selectedCharacterReducer'
import { useCharacters } from '../components/CharacterContext'

interface Props {
}

export const RandomizedTeam: React.FC<Props> = () => {

	const [state, dispatch] = useReducer(selectedCharacterReducer, [])
	state
	dispatch

	console.log(useCharacters())

	return (<p>myTeam</p>)
}

export default RandomizedTeam