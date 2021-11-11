// import React from 'react'

export interface CharacterInfo {
    id: number;
    name: string;
    isSelectable: boolean,
    isAvailable: boolean;
}

export type State = CharacterInfo[]

type Actions =
    | { type: 'TOGGLE_SELECT', id: number }
    | { type: 'TOGGLE_AVAILABLE', id: number }

export const characterReducer = (state: State, action: Actions) => {
	switch(action.type){
	case 'TOGGLE_AVAILABLE': {
		const newState = state.map((char) => char.id === action.id ? { ...char, isAvailable: !char.isAvailable } : char)
		return newState as State
	}

	case 'TOGGLE_SELECT': {
		const newState = state.map((char) => char.id === action.id ? { ...char, isSelectable: !char.isSelectable } : char)
		return newState as State
	}

	default:
		return state
	}
}

type CharacterSelector = (state: State) => State
type CharacterNamesSelector = (state: State) => string[]

// export const characterSelector = (state: State) => Object.keys(state).map(id => state[id])

export const charactersAvailable: CharacterSelector = state => state.filter(char => char.isAvailable)
export const characterNamesAvailable: CharacterNamesSelector = state => charactersAvailable(state).map(char => char.name)