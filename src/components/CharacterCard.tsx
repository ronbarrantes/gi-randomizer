import React from 'react'
import AvailableMark from './AvailableMark'
interface CharacterCardProps{
	id: number
    name: string;
	image: string;
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
	width: '100%',
	backgroundColor: 'rgba(100, 100, 100, .8)',
	// border: '1px solid red',
	margin: '.5em 0',
	padding: 0,
}

const CharacterCard = ({ id, name, isAvailable, image, handleAvailable }: CharacterCardProps) => {
	// const size = `100x120`
	// const img = `https://via.placeholder.com/${size}?text=${name}`

	console.log('image path:', image)

	return (
		<div style={characterChardStyle}>
			{
				handleAvailable && (
					<button style={buttonStyle} onClick={() => handleAvailable(id)}>
						<AvailableMark isAvailable={isAvailable}/>
					</button>
				)
			}
			<img src={image} alt={ name }/>
			<p style={pStyle}>{name}</p>
		</div>
	)
}

export default CharacterCard