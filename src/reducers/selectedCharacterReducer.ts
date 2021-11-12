// import React from 'react'
import { State } from './characterReducer'

// TODO: make the option to choose individual character one at the time
type Actions =
	| { type: 'RANDOMIZE_CHARACTERS', characters: State }
	| { type: 'SELECT_CHARACTER', characters: State } // FOR LATER USE

export const selectedCharacterReducer = (state: State, action: Actions) => {
	switch(action.type){

	case 'RANDOMIZE_CHARACTERS': {
		return action.characters
	}
	default:
		return state
	}
}

