import {
	useDisclosure,
	useMediaQuery,
	Container,
	Button,
	Image,
	Link,
	Flex,
	Icon,
	Text
} from '@chakra-ui/react'

import { List } from 'phosphor-react'

import { Menu } from './menu'

export function Header({ hasScrolled }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [ isMobile ] = useMediaQuery('(max-width: 860px)')
	return (
		<Container
			as="header"
			minW="100vw"
			height="3.499rem"
			p="1rem 0 1rem 1rem"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			position="fixed"
			left={0}
			right={0}
			transition="background 0.25s cubic-bezier(0.7,0.7,0.7,0.7)"
			bg={hasScrolled ? 'brand.green.def' : 'brand.green.light1'}
			zIndex={10}
		>
		{ hasScrolled ? (
			<Text
				color="#f0f2f5"
				display="flex"
				fontWeight="400"
				fontSize="1.5rem"
			>
				Doctor
				<Text fontWeight="700">Care</Text>
			</Text>	
		) : (
			<Image
				src="/logo.svg"
				alt="Doctor Care logo"
			/>
		)}
		{ isMobile ?
			<>
				<Button bg="transparent" onClick={onOpen}>
					<Icon
						as={List}
						color={hasScrolled? 'brand.green.light1' : 'brand.green.def'}
						h={10}
						w={10}
					/>
				</Button>
				<Menu isOpen={isOpen} onClose={onClose} />
			</> :
			<>
				<Flex
					as="nav"
					gap={4}
					color={
						hasScrolled ?
						'brand.green.light1' :
						'brand.green.def'
					}
				>
					<Link href="#home">Home</Link>
					<Link href="#services">Services</Link>
					<Link href="#about">About</Link>
					<Link href="#testimonials">Testimonials</Link>
					<Link href="#contact">Contact</Link>
				</Flex>		
				<Button
					bg="tranparent"
					borderWidth="2px"
					borderColor={
						hasScrolled ?
						'brand.green.light1' :
						'brand.green.def'
					}
					borderRadius="full"
					color={
						hasScrolled ?
						'brand.green.light1' :
						'brand.green.def'
					}
					size="md"
					mr="1rem"
			  >
					AGENDAR CONSULTA
				</Button>
			</>
			}
		</Container>
	)
}

