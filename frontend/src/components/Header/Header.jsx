import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Novo estado para o menu mobile
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ajuste na URL para produção (Vercel) se necessário
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/produtos`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err))
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
          <h1 className="logo-text">FOURINOX</h1>
        </div>

        

        {/* Menu de Navegação - Adicionada classe dinâmica */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a></li>
            <li><a href="#catalogo" onClick={() => setIsMenuOpen(false)}>Catálogo</a></li>
            <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
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
                <div key={product.id} className="search-item" onClick={() => setSearchTerm(product.nome)}>
                  <span>{product.nome}</span>
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Botão Hambúrguer */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div className={`social-links ${!isScrolled || isMenuOpen ? 'visible' : 'hidden'}`}>
          <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
          <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </header>
  )
}