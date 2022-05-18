import {
	Container, Flex, Image, Text, Heading
} from '@chakra-ui/react'

export function AboutSection() {
	return (
		<Container
			as="section"
			id="about"
			pt="5.5rem"
			pb="1.25rem"
			bg="brand.beige"
		>
			<Flex direction="column" gap={5}>
				<Heading as="h3" size="sm" fontWeight="500" color="brand.green.def">ABOUT US</Heading>
				<Heading as="h2">Understand who we are and why we exists.</Heading>
				<Text>Delegadis gente finis, bibendum egestas augue arcu ut est.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Manduma pindureta quium dia nois paga.Paisis, filhis, espiritis santis</Text>
			</Flex>
			<Image
				src="/doctor.png"
				mt={16}
				alt="A mother, a kid and a doctor"
			/>
		</Container>
	)
}
