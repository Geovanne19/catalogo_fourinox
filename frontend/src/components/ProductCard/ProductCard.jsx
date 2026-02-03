import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const imageUrl = `/imagens-produtos/${product.imagem}`;

  return (
    <Link to={`/produto/${product.id}`} className="product-card">
      <div className="product-image-container">
        <span className="product-category-tag">{product.categoria}</span>

        {product.imagem ? (
          <img 
            src={imageUrl} 
            alt={product.nome} 
            className="product-image"         
          />
        ) : (
          <div className="product-image-placeholder">
            <span>Sem Imagem</span>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className='box-info'>
          <h3 className="product-name">{product.nome}</h3>
          <span>
            <i className='fas fa-external-link-alt external-link-icon-product-card'></i>
          </span>
        </div>
        <p className="product-description">{product.descricao}</p>
      </div>
    </Link>
  )
}