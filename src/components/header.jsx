import {
	useDisclosure,
	useMediaQuery,
	Container,
	Button,
	Image,
	Link,
	Flex,
	Icon
} from '@chakra-ui/react'

import { List } from 'phosphor-react'

import { Menu } from './menu'

export function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [ isMobile ] = useMediaQuery('(max-width: 860px)')
	return (
		<Container
			as="header"
			width="100%"
			height="3.499rem"
			padding="1rem"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			position="fixed"
			bg="brand.green.light1"
			zIndex={10}
		>
			<Image
				src="/logo.svg"
				alt="Doctor Care logo"
			/>
		{ isMobile ?
			<>
				<Button bg="transparent" onClick={onOpen}>
					<Icon
						as={List}
						color="brand.green.def"
						h={10}
						w={10}
					/>
				</Button>
				<Menu isOpen={isOpen} onClose={onClose} />
			</> :
			<>
				<Flex as="nav" gap={4} color="brand.green.def">
					<Link href="#home">Home</Link>
					<Link href="#services">Services</Link>
					<Link href="#about">About</Link>
					<Link href="#testimonials">Testimonials</Link>
				</Flex>		
				<Button
					bg="tranparent"
					borderWidth="2px"
					borderColor="brand.green.def"
					borderRadius="full"
					color="brand.green.def"
					size="md"
			  >
					AGENDAR CONSULTA
				</Button>
			</>
			}
		</Container>
	)
}

