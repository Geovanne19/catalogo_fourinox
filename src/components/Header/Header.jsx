import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Pesquisando por:', searchTerm)
    setSearchTerm('')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">FOURINOX</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
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
        </form>
      </div>
    </header>
  )
}
