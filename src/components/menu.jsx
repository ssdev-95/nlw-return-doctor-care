import {
	Flex,
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
			<DrawerOverlay />
			<DrawerContent bg="brand.green.def" h="100%">
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
				<DrawerBody>lol</DrawerBody>
				<DrawerFooter>
					<Button>lol</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
