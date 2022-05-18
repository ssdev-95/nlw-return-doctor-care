import { useState } from 'react'
import {
	Container, Text, Flex, Button
} from '@chakra-ui/react'
import { Quote } from './quote'

const authors = [
	'WONDER, Steve',
	'KOJIMA, Hideo',
	'JOBS, Steve',
	'KOTARO, Amon'
]

export function Slider() {
	const [current, setCurrent] = useState(0)

	return (
		<Container w="400px" h="fit-content" overflowX="scroll">
			{authors.map(author => (
				<Quote
					key={`${author.split(', ').join('-')}`}
					author={author}
				>
					<Text>
						Diuretics paradis num copo é motivis de denguis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
					</Text>
				</Quote>
			))}
		</Container>
	)
}
