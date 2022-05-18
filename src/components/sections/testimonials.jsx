import { Container, Heading } from '@chakra-ui/react'
import { Slider } from '../slider'

export function TestimonialsSection() {
	return (
		<Container
			as="section"
			id="testimonials"
			pt="5.5rem"
			pb="1.5rem"
			px={0}
		>
			<Heading
				as="h3"
				size="sm"
				color="brand.green.def"
				my="1rem"
			>
				TESTIMONIALS
			</Heading>
			<Slider />
		</Container>
	)
}
