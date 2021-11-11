import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'

interface LockToggleProps {
	isSelectable: boolean;
}

const SelectableMark = ({ isSelectable }: LockToggleProps) => {
	return <FontAwesomeIcon icon={isSelectable ? faUnlock : faLock } />
}

export default SelectableMark