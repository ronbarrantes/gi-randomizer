import React, { useReducer, useContext } from 'react'

import { characterReducer, State } from '../reducers/characterReducer'
import { characterState } from '../state/initialCharacterState'

type HandleCharacterProp = (id: number) => void
const CharacterContext = React.createContext<State>({} as State)
const CharacterUpdateContext = React.createContext<HandleCharacterProp | null>(null)

interface CharacterProviderProp {
	children: React.ReactChild
}

export const useCharacters = () => {
	return useContext(CharacterContext)
}

export const useCharUpdate = () => {
	return useContext(CharacterUpdateContext)
}

export const CharacterProvider = ({ children }: CharacterProviderProp) => {
	const [charState, dispatch] = useReducer(characterReducer, characterState)

	const handleIsAvailable = (id: number) => {
		dispatch({ type: 'TOGGLE_AVAILABLE', id })
	}

	return (
		<CharacterContext.Provider value={ charState }>
			<CharacterUpdateContext.Provider value={ handleIsAvailable }>
				{children}
			</CharacterUpdateContext.Provider>
		</CharacterContext.Provider>
	)
}