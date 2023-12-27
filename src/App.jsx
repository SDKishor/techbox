import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductsPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Products' element={<ProductPage/>}/>
    </Routes>
    </>
  )
}
