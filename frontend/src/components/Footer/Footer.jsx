import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre a FOURINOX</h4>
          <p>Especialistas em aço inox de alta performance para projetos industriais, comerciais e residenciais.</p>
        </div>

        <div className="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#sobre">Nossa História</a></li>
            <li><a href="#catalogo">Catálogo de Produtos</a></li>
            <li><a href="#servicos">Serviços Técnicos</a></li>

          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p><i className="fas fa-envelope"></i> contato@fourinox.com.br</p>
          <p><i className="fas fa-phone"></i> (11) 3000-0000</p>
          <p><i className="fas fa-map-marker-alt"></i> São Paulo, SP</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links-footer">
            <a href="#whatsapp" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 FOURINOX. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}