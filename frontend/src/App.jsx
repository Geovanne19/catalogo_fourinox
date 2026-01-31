import './App.css'
import { useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
import About from './components/Sobre/Sobre'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Servicos from './components/Servicos/Servicos'

function App() {
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    const triggerAnimation = () => {
      el.classList.remove('animate')
      void el.offsetWidth
      el.classList.add('animate')
    }

    // initial trigger
    triggerAnimation()

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAnimation()
        }
      })
    }, { threshold: 0.3 })

    io.observe(el)

    return () => io.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />
      <section id="home" className="home-section"></section>
      <section ref={imgRef} className="img-home">
        <div className="img-home-content" role="region" aria-label="Solicitar orçamento">
          <h1 className="img-home-text">Peça um orçamento rápido<br/>e sem compromisso</h1>
          <button className="btn-quote">Solicitar Orçamento</button>
        </div>
      </section>
      <About />
      <ProductCatalog />
      <Servicos />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
