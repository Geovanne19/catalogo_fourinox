import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BLOCO ESQUERDA (Sobre + Links) */}
        <div className="footer-group">
          <div className="footer-section">
            <h4>FOURINOX</h4>
            <p>Inovação, Qualidade, Durabilidade e Sustentabilidade.</p>
            <p>CNPJ: 50.178.392/0001-51</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#servicos">Services</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* BLOCO DIREITA (Contato + Redes Sociais) */}
        <div className="footer-group">
          <div className="footer-section">
            <h4>Contato</h4>
            <p>
              <a 
                href="https://maps.google.com/?cid=8313203465533308798&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link-map"
              >
                <i className="fas fa-map-marker-alt"></i> Av. Goiás Norte, Qd. 04 - Lt. 50, Res. Recanto do Bosque, Goiânia - GO
                CEP: 74.474.310
              </a>
            </p>
            <p><i className="fab fa-whatsapp"></i>(62) 8246-3639</p>
            <p><i className="far fa-envelope"></i>leonardo.fourinox@gmail.com</p>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links-footer">
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Fourinox - Todos os direitos reservados. (Lei 9610 de 19/02/1998)</p>
      </div>
    </footer>
  )
}