import { ToastContainer } from 'react-toastify'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RoutesMain } from './routes'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  )
}

export default App
