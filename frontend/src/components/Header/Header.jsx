import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const searchRef = useRef(null)
  const navigate = useNavigate() 

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-top'}`}>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src="./logo.png" alt="Logo Fourinox" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/#sobre" onClick={closeMenu}>Sobre Nós</Link></li>
            <li><Link to="/#catalogo" onClick={closeMenu}>Catálogo</Link></li>
            <li><Link to="/#servicos" onClick={closeMenu}>Serviços</Link></li>
            <li><Link to="/#contato" onClick={closeMenu}>Contato</Link></li>
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
                    navigate(`/produto/${product.id}`) 
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