import {
	Container, Box, Flex, Text, Heading, Icon
} from '@chakra-ui/react'

import { Check } from 'phosphor-react'

export function ServicesSection() {
	const services = [
		"Digestive problems",
		"Hormonal health",
		"Mental well-being",
		"Pediatric care",
		"Autoimmune and inflammation",
		"Heart health"
	]
	return (
		<Container
			as="section"
			bg="brand.green.light2"
			w="100%"
		>
		  <Box bg="brand.beige" transform="translateY(-15.3rem)" w="fit-content" m="0 auto" p="2.5rem" borderRadius={4}>
				<Flex flexDirection="column" gap={50}>
					<Heading as="h1" fontSize="3.5rem" textAlign="center">
						+3.500
						<Text as="p" color="brand.green.def" fontSize="1rem">Pacients attended</Text>
					</Heading>

					<Heading as="h1" fontSize="3.5rem" textAlign="center">
						+15
						<Text as="p" color="brand.green.def" fontSize="1rem">Disponible specialists</Text>
					</Heading>
					
					<Heading as="h1" fontSize="3.5rem" textAlign=    "center">
						+10
						<Text as="p" color="brand.green.def" fontSize="1rem">Years of market</Text>
					</Heading>
				</Flex>
		  </Box>
			<Container id="services" pt="5.5rem" textAlign="center" mt="-11rem">
				<Heading as="h3" color="brand.green.def" size="sm" fontWeight="500">SERVICES</Heading>
				<Heading w="15.75rem" m="0 auto" size="2xl">How can we help to make you feel better?</Heading>
				{services.map((service, index) => (
				<Box
					p={6}
					my={6}
					bg="#fff"
					textAlign="left"
					key={`${service.split(' ').join('-')}-${index}`}
				>
					<Flex
						direction="column"
						items="flex-start"
						gap={4}
					>
						<Icon
							as={Check}
							bg="brand.green.light1"
							color="brand.green.def"
							borderRadius="100%"
							h={8}
							w={8}
							p={2}
						/>
						<Heading as="h3">{service}</Heading>
						<Text>Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Cevadis im ampola pa arma uma pindureta.</Text>
					</Flex>
				</Box>
				))}
			</Container>
		</Container>
	)
}
