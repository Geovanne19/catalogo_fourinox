import './App.css'
import Header from './components/Header/Header'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
import About from './components/Sobre/Sobre'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <section id="home" className="home-section"></section>
      <section className="img-home"></section>
      <About />
      <ProductCatalog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
