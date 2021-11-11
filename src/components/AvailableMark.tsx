import React from 'react'
// import LockToggle from './LockToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface AvailableProps{
	isAvailable: boolean
}

const AvailableMark = ({ isAvailable }: AvailableProps) => {
	const currColor = isAvailable ? '#0F0': '#AAA'
	return <FontAwesomeIcon color={currColor} icon={faCheck}/>
}

export default AvailableMark