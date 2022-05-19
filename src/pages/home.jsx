import { useState, useEffect } from 'react'

import {
	Container, Button, Icon
} from '@chakra-ui/react'

import { ArrowBendRightUp } from 'phosphor-react'
import Fade from 'react-reveal/Fade'

import { Header } from '../components/header'
import { HomeSection } from '../components/sections/home'
import { AboutSection } from '../components/sections/about'
import { ServicesSection } from '../components/sections/services'
import { TestimonialsSection } from '../components/sections/testimonials'
import { ContactSection } from '../components/sections/contact'
import { Footer } from '../components/footer'
import { Modal } from '../components/modal'

function Home() {
	const [hasScrolled, setHasScrolled] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const checkScrollTop = () => {
		const offset = window.pageYOffset

    if (!hasScrolled && offset > 150){
      setHasScrolled(true)
    } else if (hasScrolled && offset <= 150){
      setHasScrolled(false)
    }
  }

	useEffect(() => {
		const listener = window.addEventListener('scroll', checkScrollTop)

		return () => {
			window.removeEventListener('scroll',listener)
		}
	})

  return (
    <Container
			minW="100vw"
			minH="100vh"
			bg="brand.green.light1"
			overflowX="hidden"
			p={0}
		>
      <Header
				hasScrolled={hasScrolled}
				openModal={()=>setIsModalOpen(true)}
			/>
			<HomeSection />
			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<ContactSection />
			<Button
				px={2}
				py={4}
				bg="brand.green.def"
				borderWidth={2}
				borderColor="brand.green.light1"
				position="fixed"
				bottom="2rem"
				right="2rem"
				borderRadius="4rem"
				zIndex={hasScrolled ? 4 : -4}
				onClick={() => window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})}
			>
				<Icon
					as={ArrowBendRightUp}
					color="brand.green.light2"
					h={6}
					w={7}
				/>
			</Button>
			<Footer />
			<Modal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false)
				}}
			/>
		</Container>
  )
}

export default Home
