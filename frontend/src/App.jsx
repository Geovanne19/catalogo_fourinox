import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
import About from './components/Sobre/Sobre'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Servicos from './components/Servicos/Servicos'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <ProductCatalog />
      <Servicos />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
