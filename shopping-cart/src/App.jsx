import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import { CartContext, MyCartContext } from './management/context'

function App() {
  return (
    <div className='App bg-[#121312] h-screen'>
      <Header/>
      <Cart/>
    </div>
  )
}

export default App
