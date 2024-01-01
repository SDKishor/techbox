import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <header className='w-screen flex flex-col items-center'>
    <Navbar/>
    </header>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Products' element={<ProductPage/>}/>
    </Routes>
    <Footer/>
    </>

  )
}
