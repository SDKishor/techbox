import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductsPage'

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Products' element={<ProductPage/>}/>
    </Routes>
    </>
  )
}
