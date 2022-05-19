import {
	Flex,
	Text,
	Icon,
	Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { ActiveLink } from './active-link'
import { SocialLink } from './social-link'

import {
	YoutubeLogo, LinkedinLogo, InstagramLogo
} from 'phosphor-react'

export function Menu({ isOpen, onClose, openModal }) {
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
				<DrawerBody>
				<Flex direction="column" gap="2.5rem">
					<ActiveLink
						color="#f0f2f5"
						onClick={onClose}
						href="#home"
						title="Home"
					/>
					<ActiveLink
						color="#f0f2f5"
						onClick={onClose}
						href="#about"
						title="About" 
					/>
					<ActiveLink
						color="#f0f2f5"
						onClick={onClose}
						href="#services"
						title="Services"
					/>
					<ActiveLink
						color="#f0f2f5"
						onClick={onClose}
						href="#testimonials"
						title="Testimonials"
					/>
					<ActiveLink
						color="#f0f2f5"
						onClick={onClose}
						href="#contact"
						title="Contact"
					/>
					<Button
						size="md"
						w="fit-content"
						mx="auto"
						bg="#fff"
						color="brand.green.def"
						p="1rem"
						borderRadius="100px"
						onClick={() => {
							onClose()
							setTimeout(openModal, 500)
						}}
					>
						SCHEDULE APPOINTMENT
					</Button>
				</Flex>
				</DrawerBody>
				<DrawerFooter
					w="100%"
					pt={12}
					color="brand.green.light1"
				>
					<Flex
						gap={10}
						w="100%"
						alignItems="center"
						justifyContent="center"
					>	
						<SocialLink type="instagram">
							<Icon
								as={InstagramLogo}
								h={10}
								w={10}
							/>
						</SocialLink>
						<SocialLink type="linkedin">
							<Icon
								as={LinkedinLogo}
								h={10}
								w={10}
							/>
						</SocialLink>
						<SocialLink type="youtube">
							<Icon
								as={YoutubeLogo}
								h={10}
								w={10}
							/>
						</SocialLink>
					</Flex>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
