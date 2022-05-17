import { Container, Button } from '@chakra-ui/react'

export function HomeSection() {
	return (
		<Container
			as="section"
			id="home"
			width="100%"
		>
			<Container as="div"width="100%">
				<strong>WELCOME TO DOCTOR CARE 👋</strong>
				<h1>Medical assistancy made easy for everyone!</h1>
				<p>The doctors at Doctor Care goes beyond simptoms to get rid on the root of the disease and propose a long term cure.</p>
				<Button>
					SCHEDULE AN APPOINTMENT
				</Button>
			</Container>
		</Container>
	)
}
