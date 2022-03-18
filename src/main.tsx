import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import { PreferencesProvider } from './context/PreferencesContext'
import { AuthProvider } from 'context/AuthContext'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <PreferencesProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PreferencesProvider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
