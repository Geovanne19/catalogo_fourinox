import { useState } from 'react'
import './ProductCatalog.css'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const products = [
    {
      id: 1,
      name: 'Panela de Inox 2L',
      category: 'cozinha',
      price: 79.90,
      description: 'Panela de inox com alças confortáveis'
    },
    {
      id: 2,
      name: 'Jogo de Talheres 24 peças',
      category: 'cozinha',
      price: 120.00,
      description: 'Jogo completo de garfos, facas e colheres'
    },
    {
      id: 3,
      name: 'Bacia 5L',
      category: 'limpeza',
      price: 35.90,
      description: 'Bacia de inox resistente para limpeza'
    },
    {
      id: 4,
      name: 'Pendurador de Parede',
      category: 'decoracao',
      price: 45.00,
      description: 'Suporte inox para parede'
    },
    {
      id: 5,
      name: 'Pote de Armazenamento 2L',
      category: 'cozinha',
      price: 55.00,
      description: 'Pote com tampa hermética'
    },
    {
      id: 6,
      name: 'Prateleira Flutuante 60cm',
      category: 'decoracao',
      price: 89.90,
      description: 'Prateleira moderna para paredes'
    },
    {
      id: 7,
      name: 'Escorredor de Macarrão',
      category: 'cozinha',
      price: 32.00,
      description: 'Escorredor com furos pequenos'
    },
    {
      id: 8,
      name: 'Balde 10L',
      category: 'limpeza',
      price: 42.50,
      description: 'Balde grande com alça reforçada'
    },
  ]

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'cozinha', name: 'Cozinha' },
    { id: 'limpeza', name: 'Limpeza' },
    { id: 'decoracao', name: 'Decoração' }
  ]

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

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
              ? 'Todos os Produtos' 
              : `Categoria: ${categories.find(c => c.id === selectedCategory)?.name}`}
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
