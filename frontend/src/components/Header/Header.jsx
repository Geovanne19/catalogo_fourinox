import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
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

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Pesquisando por:', searchTerm)
    setSearchTerm('')
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-top'}`}>
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">FOURINOX</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredProducts.length > 0 && (
            <div className="search-dropdown">
              {filteredProducts.map(product => (
                <div key={product.id} className="search-item" onClick={() => {
                  setSearchTerm(product.nome)
                  setFilteredProducts([])
                }}>
                  <span>{product.nome}</span>
                </div>
              ))}
            </div>
          )}
        </form>
        <div className={`social-links ${!isScrolled ? 'visible' : 'hidden'}`}>
          <a href="#" className="social-link" aria-label="Facebook">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

