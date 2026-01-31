import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre a FOURINOX</h4>
          <p>Empresa especializada em produtos de inox de alta qualidade para residências e negócios.</p>
        </div>

        <div className="footer-section">
          <h4>Informações</h4>
          <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#politica">Política de Privacidade</a></li>
            <li><a href="#termos">Termos de Uso</a></li>
            <li><a href="#devolucao">Devolução</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>Email: contato@fourinox.com.br</p>
          <p>Telefone: (11) 3000-0000</p>
          <p>Endereço: São Paulo, SP</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 FOURINOX. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
