import React from 'react'
import AvailableMark from './AvailableMark'
interface CharacterCardProps{
	id: number
    name: string;
    isAvailable: boolean;
    isSelectable: boolean;
	handleAvailable: ((id: number) => void);
}

const CharacterCard = ({ id, name, isAvailable, handleAvailable }: CharacterCardProps) => {
	const size = 100
	const img = `https://via.placeholder.com/${size}?text=${name}`

	return (
		<div>
			<img src={img} alt={ name }/>
			<button onClick={() => handleAvailable(id)}>
				<AvailableMark isAvailable={isAvailable}/>
			</button>
		</div>
	)
}

export default CharacterCard