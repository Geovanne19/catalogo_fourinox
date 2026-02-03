import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductPage.css';
import ProductCard from '../ProductCard/ProductCard'; 

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Busca o arquivo JSON com os dados dos produtos
    fetch('/produtos.json')
      .then((res) => res.json())
      .then((data) => {
        // Encontra o produto principal pelo ID vindo da URL
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);

        if (found) {
          // Filtra produtos da mesma categoria, excluindo o atual, limitado a 4 itens
          const related = data
            .filter((p) => p.categoria === found.categoria && p.id !== found.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar os dados do catálogo:", err);
        setLoading(false);
      });
    
    // Garante que o usuário inicie a leitura do topo ao trocar de produto
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="loading">Carregando detalhes do produto...</div>;

  if (!product) {
    return (
      <div className="error-container">
        <h2>Produto não encontrado</h2>
        <p>O item solicitado não faz parte do nosso catálogo atual.</p>
        <Link to="/" className="back-btn">Voltar para o Início</Link>
      </div>
    );
  }

  // Configuração da mensagem personalizada para o WhatsApp do Leonardo
  const whatsappMessage = `Olá! Vi o produto *${product.nome}* no catálogo da Fourinox e gostaria de solicitar um orçamento detalhado.`;
  const whatsappUrl = `https://wa.me/556282463639?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-page-container">
      {/* Navegação Estrutural (Breadcrumb) */}
      <nav className="breadcrumb">
        <Link to="/">Início</Link> <span>/</span> 
        <Link to="/">Catálogo</Link> <span>/</span> 
        <strong>{product.nome}</strong>
      </nav>

      {/* Área de Exibição do Produto */}
      <section className="product-view">
        <div className="product-image-side">
          <div className="image-wrapper">
            <img 
              src={`/imagens-produtos/${product.imagem}`} 
              alt={product.nome} 
              className="main-product-img" 
            />
          </div>
        </div>

        {/* Lado Direito: Informações alinhadas aos extremos (Topo/Base) */}
        <div className="product-info-side">
            <div className="product-details-top">
                <span className="detail-category">{product.categoria}</span>
                <h1 className="detail-title">{product.nome}</h1>
                
                <div className="detail-description">
                  <h3>Descrição:</h3>
                  <p>{product.descricao}</p>
                </div>
            </div>

            <div className="product-details-bottom">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-whatsapp-btn"
                >
                  <i className="fab fa-whatsapp"></i> Solicitar Orçamento Agora
                </a>
            </div>
        </div>
      </section>

      <hr className="section-divider" />

      {relatedProducts.length > 0 && (
        <section className="related-section">
          <h2 className="related-title">Também oferecemos:</h2>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
      
    </div>
  );
}