import { useState, useEffect, useRef } from 'react'
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const searchRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredProducts([])
        setSearchTerm('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    fetch('/produtos.json')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar produtos')
        return res.json()
      })
      .then(data => setProducts(data))
      .catch(err => console.error('Erro ao carregar catálogo para busca:', err))
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([])
    } else {
      const filtered = products.filter(product =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [searchTerm, products])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-top'}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src="./logo.png" alt="Logo Fourinox" />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a></li>
            <li><a href="#catalogo" onClick={() => setIsMenuOpen(false)}>Catálogo</a></li>
            <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <form className="search-form" ref={searchRef} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {filteredProducts.length > 0 && (
            <div className="search-dropdown">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="search-item" 
                  onClick={() => {
                    setSearchTerm('') 
                    setFilteredProducts([])
                    window.location.href = `#catalogo` 
                  }}
                >
                  <img 
                    src={`/imagens-produtos/${product.imagem}`} 
                    alt={product.nome} 
                    className="search-item-image"
                  />
                  <span className="search-item-name">{product.nome}</span>
                </div>
              ))}
            </div>
          )}
        </form>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div className={`social-links ${!isScrolled || isMenuOpen ? 'visible' : 'hidden'}`}>
          <a href="https://wa.me/message/JX3T3UILQ4YJN1" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/fourinox" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </header>
  )
}