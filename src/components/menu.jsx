import {
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
			<DrawerContent bg="green.def">
				<DrawerCloseButton />
				<DrawerHeader>
					<Image src="./assets/logo.svg" alt="Doctor Care logo" />
				</DrawerHeader>
				<DrawerBody>lol</DrawerBody>
				<DrawerFooter>
					<Button>lol</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
