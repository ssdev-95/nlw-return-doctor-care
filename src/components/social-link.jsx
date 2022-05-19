import { Link } from '@chakra-ui/react'

export function SocialLink({ type, children }) {
	const hrefs = {
		instagram: 'https://www.instagram.com/rocketseat_oficial/',
		linkedin: 'https://www.linkedin.com/school/rocketseat/',
		youtube: 'https://youtube.com/c/RocketSeat'
	}
	return (
		<Link
			as="a"
			href={hrefs[type]}
			target="__blank"
			rel="external"
		>
			{children}
		</Link>
	)
}
