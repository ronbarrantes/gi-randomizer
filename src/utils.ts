import { State } from './reducers/characterReducer'

export const randomizeCharacters = (state: State) => {
	let chars: State = []

	const numOfChars = state.length >= 4 ? 4 : state.length

	while(chars.length < numOfChars){
		const randNumber = Math.floor(Math.random() * state.length)
		const char = state.splice(randNumber, 1)[0]

		chars = [...chars, char]
	}

	return chars
}