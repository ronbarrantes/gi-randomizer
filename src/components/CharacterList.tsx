import React, { useContext } from 'react'
import CharacterCard from './CharacterCard'
import { CharacterContext, CharacterUpdateContext } from './CharacterContext'

interface Props {
}

type HandleCharacterProp = (id: number) => void

const CharacterList: React.FC<Props> = () => {
	const chars = useContext(CharacterContext)
	const handleAvailableChars = useContext(CharacterUpdateContext)
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