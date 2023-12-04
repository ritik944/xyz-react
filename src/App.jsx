
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Features from './components/Features'
import About from './components/about'
import Pricing from './components/pricing'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer.jsx'

function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
