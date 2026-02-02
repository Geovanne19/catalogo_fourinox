import { useState, useEffect } from 'react'
import './ProductCatalog.css'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/produtos.json');
        
        if (!res.ok) throw new Error('Erro ao carregar o arquivo de produtos')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Failed to load products', err)
        setError('Não foi possível carregar o catálogo de produtos')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Extrai categorias únicas do JSON
  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    ...Array.from(new Set(products.map(p => p.categoria).filter(Boolean))).map(c => ({ 
      id: c, 
      name: c 
    }))
  ]

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.categoria === selectedCategory)

  if (loading) return (
    <main className="catalog" id="catalogo">
      <div className="catalog-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Carregando catálogo...</p>
        </div>
      </div>
    </main>
  )

  if (error) return (
    <main className="catalog" id="catalogo">
      <div className="catalog-container">
        <div className="error-container">
          <p className="error-text">{error}</p>
        </div>
      </div>
    </main>
  )

  return (
    <main className="catalog" id="catalogo">
      <div className="catalog-container">
        <h2 className="section-title">Nosso Catálogo</h2>
        
        <section className="filters">
          <h3>Filtrar por Categoria</h3>
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        <section className="products-section">
          <h3 className="products-title">
            {selectedCategory === 'todos'
              ? 'Todos os Produtos:'
              : `Categoria: ${selectedCategory}`}
          </h3>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="no-products">Nenhum produto encontrado nesta categoria</p>
          )}
        </section>
      </div>
    </main>
  )
}