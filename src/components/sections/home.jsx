import {
	Button, Flex, 
	Image, Icon, Text, Heading,
	useBreakpointValue
} from '@chakra-ui/react'

import { WhatsappLogo } from 'phosphor-react'
import Fade from 'react-reveal/Fade'

export function HomeSection() {
	const flexDirection = useBreakpointValue({
		base: 'column', md: 'row'
	})

	const paddingLateral = useBreakpointValue({
		base: '1rem', md: '16vw'
	})

	return (
		<Flex
			as="section"
			id="home"
			width="100%"
			px={paddingLateral}
			pt={100}
		  pb={225}
			flexDirection={flexDirection}
		>
			<Flex
				as="div"
				flexDirection="column"
				gap="2.75rem"
				width="100%"
				textAlign="center"
			>
			<Fade left>
				<Heading as="h3" size="sm" color="brand.green.def">
					WELCOME TO DOCTOR CARE 👋
				</Heading>
				<Heading aa="h1">Medical assistancy made easy for everyone!</Heading>
				<Text size={10}>The doctors at Doctor Care goes beyond simptoms to get rid on the root of the disease and propose a long term cure.</Text>
				<Button
					color="#f0f2f5"
					bg="brand.green.def"
					fontSize={16}
					borderRadius={100}
					py={6}
				>
		      <Flex
						as="a"
						gap={3}
						alignItems="center"
						href="https://google.com"
						target="__blank"
					>
					  <Icon
	   					as={WhatsappLogo}
  						h={6}
  						w={6}
  					/>
  					SCHEDULE AN APPOINTMENT
					</Flex>
				</Button>
			</Fade>
			</Flex>
		 	<Fade right>
			<Image src="/lady.png" alt="An affro lady" mt="4rem" mx="auto" />
			</Fade>
		</Flex>
	)
}
