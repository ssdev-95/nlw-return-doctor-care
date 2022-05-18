import {
	Box, Container, Flex, Heading, Icon, Text
} from '@chakra-ui/react'

import { Quotes } from 'phosphor-react'

export function Quote({author, children}) {
	return (
		<Box
			w="375px"
			p="1rem"
			bg="brand.green.light2"
			display="inline-block"
			borderRadius={6}
			my="1.45rem"
		>
			<Flex
				as="header"
				w="100%"
				gap={8}
				alignItems="flex-end"
			>
				<Icon
					as={Quotes}
					h={12}
					w={12}
					color="brand.green.def"
				/>
				<Heading as="h3" color="brand.grey.headline" size="md">{author}</Heading>
			</Flex>
			<Container color="brand.grey.paragraph">{children}</Container>
		</Box>
	)
}
