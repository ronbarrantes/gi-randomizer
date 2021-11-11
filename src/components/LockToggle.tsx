import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'

interface LockToggleProps {
	isLocked: boolean;
}

const LockToggle = ({ isLocked }: LockToggleProps) => {
	return <FontAwesomeIcon icon={isLocked ? faLock: faUnlock} />
}

export default LockToggle