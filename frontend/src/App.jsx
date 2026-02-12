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
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200); 

      return () => clearTimeout(timeoutId);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <div id="home"><Home /></div>
                <div id="sobre"><About /></div>
                <div id="catalogo"><ProductCatalog /></div>
                <div id="servicos"><Servicos /></div>
                <div id="contato"><Contact /></div>
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
