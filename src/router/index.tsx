import Auth from 'components/Auth'
import LoginWithEmail from 'components/Auth/LoginWithEmail'
import LoginWithProvider from 'components/Auth/LoginWithProvider'
import TriviaBoard from 'components/Platform/TriviaBoard'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TriviaBoard />} />
      <Route path="auth" element={<Auth />}>
        {/*Nested routes */}
        <Route path="login" element={<LoginWithProvider />} />
        <Route path="email" element={<LoginWithEmail />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
