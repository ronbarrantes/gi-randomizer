
export const randomizeCharacters = (state: unknown[]) => {
	let chars: unknown[] = []
	while(chars.length < 4){
		const randNumber = Math.floor(Math.random() * state.length)
		const char = state.splice(randNumber, 1)
		chars = [...chars, char]
	}

	return chars
}