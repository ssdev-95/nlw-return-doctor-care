import { Carousel } from '../slider'

import {
	Container, Heading, Text
} from '@chakra-ui/react'

import { Quote } from '../quote'
import Fade from 'react-reveal/Fade'

export function TestimonialsSection() {
	const authors = [
		'WONDER, Steve',
		'KOJIMA, Hideo',
		'JOBS, Steve',
		'KOTARO, Amon'
	]

	const testimony = 'Diuretics paradis num copo é motivis de denguis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.'

	return (
		<Container
			as="section"
			id="testimonials"
			pt="5.5rem"
			pb="1.5rem"
			px={0}
		>
			<Fade left>
			<Heading
				as="h3"
				size="sm"
				color="brand.green.def"
				my="1rem"
			>
				TESTIMONIALS
			</Heading>
			<Container maxW="400px">
			<Carousel showArrows={true}>
				{authors.map(author => (
					<Quote
						key={`${author.split(', ').join('-')}`}
						author={author}
					>
						<Text>{testimony}</Text>
					</Quote>
				))}
			</Carousel>
			</Container>
			</Fade>
		</Container>
	)
}
