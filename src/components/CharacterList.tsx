import React from 'react'
import CharacterCard from './CharacterCard'
import { useCharacters, useCharUpdate } from './CharacterContext'

interface Props {
}

type HandleCharacterProp = (id: number) => void

const CharacterList: React.FC<Props> = () => {
	const chars = useCharacters()
	const handleAvailableChars = useCharUpdate()
	return (
		<div>
			<ul>
				{chars.map(char => <li key={char.id}>
					<CharacterCard
						id={char.id}
						handleAvailable={handleAvailableChars as HandleCharacterProp}
						name={char.name}
						isAvailable={char.isAvailable}
						isSelectable={char.isSelectable}
					/>
				</li>)}
			</ul>
		</div>
	)
}

export default CharacterList