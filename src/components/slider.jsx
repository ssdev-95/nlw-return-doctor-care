import { 
	Carousel as RCarousel
} from 'react-responsive-carousel'
import { Container } from '@chakra-ui/react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function Carousel({children}) {
	return (
		<RCarousel>
			{ children }
		</RCarousel>
	)
}
