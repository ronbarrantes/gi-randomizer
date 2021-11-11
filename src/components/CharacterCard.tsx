import React from 'react'
// import LockToggle from './LockToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface CharacterCardProps{
    name: string;
    isAvailable: boolean;
    isSelectable: boolean;
}

const CharacterCard = (props: CharacterCardProps) => {
	// needs to have a lock button, and an available button

	const { name } = props
	const size = 100
	const img = `https://via.placeholder.com/${size}?text=${name}`

	return (
		<div>
			<img src={img} alt={ name }/>
			{/* <button><LockToggle isLocked={!props.isSelectable} /></button> */}
			<button><FontAwesomeIcon icon={faCheck}/></button>
		</div>
	)
}

export default CharacterCard