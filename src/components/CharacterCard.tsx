import React from 'react'
import AvailableMark from './AvailableMark'
interface CharacterCardProps{
	id: number
    name: string;
    isAvailable: boolean;
    isSelectable: boolean;
	handleAvailable?: ((id: number) => void);
}

const characterChardStyle: React.CSSProperties = {
	position: 'relative',
	background: 'green',
}

const buttonStyle: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	right: 0,
}

const pStyle: React.CSSProperties = {
	textAlign: 'center',
}

const CharacterCard = ({ id, name, isAvailable, handleAvailable }: CharacterCardProps) => {
	const size = `100x120`
	const img = `https://via.placeholder.com/${size}?text=${name}`

	return (
		<div style={characterChardStyle}>
			{
				handleAvailable && (
					<button style={buttonStyle} onClick={() => handleAvailable(id)}>
						<AvailableMark isAvailable={isAvailable}/>
					</button>
				)
			}
			<img src={img} alt={ name }/>
			<p style={pStyle}>{name}</p>
		</div>
	)
}

export default CharacterCard