import {
	Container, Text, Heading,
	Flex, Icon, useBreakpointValue
} from '@chakra-ui/react'

import { 
	YoutubeLogo, LinkedinLogo, InstagramLogo
} from 'phosphor-react'

import Fade from 'react-reveal/Fade'
import { SocialLink } from './social-link'

export function Footer() {
	const paddingLeft = useBreakpointValue({
		base: '1.5rem', md: '15vw'
	})

	return(
		<Container
			as="footer"
			bg="brand.green.def"
			minW="100vw"
			py="4rem"
			pl={paddingLeft}
			color="#f0f2f5"
			display="flex"
			flexDirection="column"
			items="center"
			content="flex-start"
			gap={6}
		>
			<Fade left>
			<Heading
				color="#f0f2f5"
				display="flex"
				fontWeight="400"
			>
				Doctor
				<Text fontWeight="700">Care</Text>
			</Heading>
			<Text>©2022 - NextLevelWeek Return</Text>
			<Text>All rights reserved.</Text>
			<Flex gap={4}>
				<SocialLink type="instagram">
					<Icon
						as={InstagramLogo}
						h={8}
						w={8}
					/>
				</SocialLink>
				<SocialLink type="linkedin">
					<Icon
						as={LinkedinLogo}
						h={8}
						w={8} 
					/>
				</SocialLink>
				<SocialLink type="youtube">
					<Icon
						as={YoutubeLogo}
						h={8}
						w={8}
					/>
				</SocialLink>
			</Flex>
			</Fade>
		</Container>
	)
}
