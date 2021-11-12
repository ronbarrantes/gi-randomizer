import { State } from './reducers/characterReducer'

export const randomizeCharacters = (state: State) => {
	let chars: State = []
	while(chars.length < 4){
		const randNumber = Math.floor(Math.random() * state.length)
		const char = state.splice(randNumber, 1)[0]

		chars = [...chars, char]
	}

	return chars
}