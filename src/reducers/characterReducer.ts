// import React from 'react'

interface CharacterInfo {
    id: number;
    name: string;
    isSelectable: boolean,
    isAvailable: boolean;
}

type State = CharacterInfo[]

type Actions =
    | { type: 'TOGGLE_SELECT', id: number }
    | { type: 'TOGGLE_AVAILABLE', id: number }

export const characterReducer = (state: State, action: Actions) => {
	switch(action.type){
	case 'TOGGLE_AVAILABLE': {
		//    state.map((item) => item.id === action.id ? !item.isAvailable : item)
		const newState = state.map((item) => item.id === action.id ? !item.isAvailable : item)
		return newState as State
	}
	default:
		return state
	}
}