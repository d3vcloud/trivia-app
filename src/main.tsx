import ReactDOM from 'react-dom'

import { ChakraProvider } from '@chakra-ui/react'
import { PreferencesProvider } from './context/PreferencesContext'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
