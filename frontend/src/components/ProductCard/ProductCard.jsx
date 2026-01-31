import './ProductCard.css'

export default function ProductCard({ product }) {
  // Endereço do seu backend no WSL
  const API_BASE = 'http://localhost:3000';

  // Lógica para construir a URL completa
  const getImageUrl = () => {
    const path = product.foto_url || product.imagem;
    if (!path) return null;
    
    // Se já for um link completo (http...), retorna direto. 
    // Se for relativo (/rails...), adiciona o endereço do servidor.
    return path.startsWith('http') ? path : `${API_BASE}${path}`;
  };

  const imageUrl = getImageUrl();
  const hasImage = !!imageUrl;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <span className="product-category-tag">{product.categoria}</span>

        {hasImage ? (
          <img 
            src={imageUrl} 
            alt={product.nome} 
            className="product-image"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        ) : (
          <div className="product-image-placeholder">
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className='box-info'>
          <h3 className="product-name">{product.nome}</h3>
          <span><i className='fas fa-external-link-alt external-link-icon-product-card'></i></span>
        </div>
        <p className="product-description">{product.descricao}</p>
      </div>
    </div>
  )
}