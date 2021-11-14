import React from 'react'
import CharacterCard from './CharacterCard'
import { useCharacters, useCharUpdate } from '../context/CharacterContext'

interface Props {
}

const CharacterListStyle: React.CSSProperties = {
	fontSize: '1.5rem',
	padding: 0,
	// margin: 0,
}

type HandleCharacterProp = (id: number) => void

const CharacterList: React.FC<Props> = () => {
	const chars = useCharacters()
	const handleAvailableChars = useCharUpdate()

	return (
		<ul style={CharacterListStyle}>
			{chars.map(char =>
				<li key={char.id}>
					<CharacterCard
						id={char.id}
						handleAvailable={handleAvailableChars as HandleCharacterProp}
						name={char.name}
						isAvailable={char.isAvailable}
						isSelectable={char.isSelectable}
					/>
				</li>,
			)}
		</ul>

	)
}

export default CharacterList