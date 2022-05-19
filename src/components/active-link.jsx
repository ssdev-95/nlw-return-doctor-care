import { useState } from 'react'
import { Link } from '@chakra-ui/react'

export function ActiveLink({
	href, color, title, onClick
}) {
	const [isActive, setIsActive] = useState(false)

	const toggle = () => {
		if(onClick) {
			onClick()
		}

	  setIsActive('#'+String(window.location).split('#')[1] === href)
	}

	return (
		<Link
			href={href}
			outline={
				isActive ? "0 0 2px 0" : 0
			}
			outlineColor={isActive ? color : 'transparent'}
			color={color}
			onClick={toggle}
		>
			{title}
		</Link>
	)
}
