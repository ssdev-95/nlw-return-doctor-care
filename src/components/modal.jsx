import { useState } from 'react'

import {
	Text,
  Modal as ModalWrapper,
	Input,
	Button,
	useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export function Modal({isOpen, onClose}) {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const toast = useToast()

	function change(e) {
		const { value } = e.target
		
		setError(
			!value.length ? 
			'Must fill this field' :
			(value.split('@').length === 1) ?
			'Invalid email format, missing an @ .' : ''
		)

		setEmail(value)
	}

	function submit() {
		if(!email || error) return;

		setTimeout(()=>{
			onClose()
			toast({
				title: email,
				description: 'We wil reach you out soon!',
				status: 'success',
				duration: 3000,
				isClosable: false
			})

			setEmail('')
		}, 500)
	}

	return (
		<ModalWrapper
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent bg="brand.green.light1">
				<ModalHeader>
					<Text color="brand.grey.paragraph">Scheduler</Text>
					<ModalCloseButton/>
				</ModalHeader>

				<ModalBody>
					<Input
						type="email"
						id="email"
						placeholder="Let us reach you"
						onChange={change}
						outline="none"
						borderColor="brand.grey.paragraph"
						borderWidth={1}
						borderRadius={4}
					/>
					<Text
						color="tomato"
						fontWeight={400}
						size={4}
						opacity={error ? 1 : 0}
					>
						{error}
					</Text>
				</ModalBody>

				<ModalFooter>
					<Button
						bg="brand.green.def"
						color="brand.green.light2"
						border={0}
						bordeRadius={4}
						onClick={submit}
					>SCHEDULE NOW</Button>
				</ModalFooter>
			</ModalContent>
		</ModalWrapper>
	)
}
