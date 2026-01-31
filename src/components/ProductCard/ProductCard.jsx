import './ProductCard.css'

export default function ProductCard({ product }) {

  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <div className="placeholder-icon">📦</div>
      </div>
      
      <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            <span className="currency">R$</span>
            <span className="amount">{product.price.toFixed(2).replace('.', ',')}</span>
          </div>
        
        
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  )
}
