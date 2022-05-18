import {
	Flex,
	Link,
	Text,
	Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export function Menu({ isOpen, onClose }) {
	return (
		<Drawer
			isOpen={isOpen}
      placement='top'
      onClose={onClose}
		>
			<DrawerOverlay
				bg="brand.green.def"
				boxShadow="none"
				h="100%"
			/>
			<DrawerContent
				bg="brand.green.def"
				boxShadow="none"
			>
				<DrawerCloseButton color="#f0f2f5" />
				<DrawerHeader>
					<Text
						color="#f0f2f5"
						display="flex"
						fontWeight="400"
					>
						Doctor
		        <Text fontWeight="700">Care</Text>
					</Text>
				</DrawerHeader>
				<DrawerBody color="#f0f2f5">
				<Flex direction="column" gap="2.5rem">
					<Link onClick={onClose} href="#home">Home</Link>
					<Link onClick={onClose} href="#about">About</Link>
					<Link onClick={onClose} href="#services">Services</Link>
					<Link onClick={onClose} href="#testimonials">Testimonials</Link>
					<Link onClick={onClose} href="#contact">Contact</Link>
					<Button
						size="md"
						w="fit-content"
						mx="auto"
						bg="#fff"
						color="brand.green.def"
						p="1rem"
						borderRadius="100px"
					>
						SCHEDULE AN APPOINTMENT
					</Button>
				</Flex>
				</DrawerBody>
				<DrawerFooter>
					<Button>lol</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
