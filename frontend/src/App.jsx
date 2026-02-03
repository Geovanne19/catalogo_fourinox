import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
import About from './components/Sobre/Sobre'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Servicos from './components/Servicos/Servicos'
import ProductPage from './components/ProductPage/ProductPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <ProductCatalog />
                <Servicos />
                <Contact />
              </>
            } />
            <Route path="/produto/:id" element={<ProductPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
