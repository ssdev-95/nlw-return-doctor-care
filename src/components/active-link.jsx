import { useMemo } from 'react'
import { Link } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

export function ActiveLink({
	href, color, title, onClick
}) {
	const { hash } = useLocation()

	const isActive = useMemo(() => {
		const active = (hash === href) ||
			(
				(href === "#home") &&
				(hash === "")
			)
		return active;
	}, [hash])

	const handleClick= () => {
		if(onClick) {
			setTimeout(onClick,500)
		}
	}

	return (
		<Link
			href={href}
			w="fit-content"
			color={color}
			onClick={handleClick}
			borderColor={color}
			borderBottomWidth={isActive ? 2 : 0}
		>
			{title}
		</Link>
	)
}
