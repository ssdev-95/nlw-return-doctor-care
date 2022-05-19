import {
	Heading, Flex, Text, Icon, Button,
	Image, useBreakpointValue
} from '@chakra-ui/react'
import {
	WhatsappLogo, EnvelopeSimple, MapPin
} from 'phosphor-react'
import Fade from 'react-reveal/Fade'

export function ContactSection() {
	const flexDirection = useBreakpointValue({
		base: 'column', md: 'reverse-row'
	})

	const paddingLateral = useBreakpointValue({
		base: '1rem', md: '16vw'
	})

	const gap = useBreakpointValue({
     base: 0, md:'2.5rem'
	})

	const aligned = useBreakpointValue({
		base: 'center', md: 'flex-start'
	})

	const paddingTop = useBreakpointValue({
		base: '3.5rem', md: 0
	})

	return (
		<Flex
			as="section"	
			id="contact"
			pt="5.4rem"
			pb="1.5rem"
			px={paddingLateral}
			flexDirection={flexDirection}
			gap={gap}
			alignItems={aligned}
			bg="#fff"
		>
			<Flex flexDirection="column">
			<Fade right>
			<Heading mb="1.8rem">Contact us</Heading>
			<Text
				my="0.89rem"
				color="bga.grey.parapgrah"
				display="flex"
				alignItems="center"
			>
				<Icon
					as={MapPin}
					color="brand.green.def"
					h={5}
					w={5}
				/>
				&nbsp;
				R. do Limoeiro, 666
			</Text>
			<Text
				my="0.89rem"
				color="bga.grey.parapgrah"
				display="flex"
				alignItems="center"
			>
				<Icon
					as={EnvelopeSimple}
					color="brand.green.def"
					h={5}
					w={5}
				/>
				&nbsp;
				sales@doctorcare.gg
			</Text>
			<Button
				as="a"
				size="md"
				bg="brand.green.def"
				borderRadius="100px" 
				color="brand.green.light2"
				mt="1.8rem"
				href="https://wa.me/+5592981616080"
			>
				<Icon as={WhatsappLogo} h={5} w={5} />
				&nbsp;
				<Text size="md">SCHEDULE AN APPOINTMENT</Text>
			</Button>
			</Fade>
			</Flex>
			<Fade bottom>
			<Image
				src="/guy.png"
				pt={paddingTop}
				alt="An affro guy"
			/>
			</Fade>
		</Flex>
	)
}
