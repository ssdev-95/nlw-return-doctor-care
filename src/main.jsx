import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.scss'

const colors = {
	brand: {
		green: {
			def: '#00856f',
			light1: '#dce9e2',
			light2: '#f7f9f9',
			hover: '#00453a'
		},
		beige: '#fffaf1',
		white: '#3e3e3e',
		grey: {
			headline: '#061800',
			paragraph: '#384633'
		}
	}
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ChakraProvider theme={theme} reset={true}>
			<App />
		</ChakraProvider>
  </React.StrictMode>
)
