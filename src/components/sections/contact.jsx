import {
	Container, Heading, Text, Icon, Button, Image
} from '@chakra-ui/react'
import {
	WhatsappLogo, EnvelopeSimple, MapPin
} from 'phosphor-react'
import Fade from 'react-reveal/Fade'

export function ContactSection() {
	return (
		<Container
			as="section"	
			id="contact"
			pt="5.5rem"
			pb="1.5rem"
			bg="#fff"
		>
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
				size="md"
				bg="brand.green.def"
				borderRadius="100px" 
				color="brand.green.light2"
				mt="1.8rem"
			>
				<Icon as={WhatsappLogo} h={5} w={5} />
				&nbsp;
				<Text size="md">SCHEDULE AN APPOINTMENT</Text>
			</Button>
			</Fade>
			<Fade bottom>
			<Image
				src="/guy.png"
				pt="3.5rem"
				alt="An affro guy"
			/>
			</Fade>
		</Container>
	)
}
