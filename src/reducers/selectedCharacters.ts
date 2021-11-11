// import React from 'react'

interface CharacterInfo {
    id: number;
    name: string;
    isSelectable: boolean;
    isAvailable: boolean;
}

// type State = CharacterInfo[]

type State = Record<string | number, CharacterInfo>

type Actions =
    | { type: 'SELECT_CHARACTER', id: number }
    | { type: 'DESELECT_CHARACTER', id: number }

export const characterReducer = (state: State, action: Actions) => {
	switch(action.type){
	case 'SELECT_CHARACTER': {
		//    state.map((item) => item.id === action.id ? !item.isAvailable : item)
		// const newState = state.map((item) => item.id === action.id ? { ...item, isAvailable: !item.isAvailable } : item)

		// const newState = {
		// 	...state, [action.id]: { ...state.id,  isAvailable: !state.id.isAvailable} }
		// }

		// return newState as State
	}
	default:
		return state
	}
}