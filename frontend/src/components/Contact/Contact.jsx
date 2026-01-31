import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <h2 className="section-title">Contato</h2>
        
        <div className="contact-layout">
          {/* LADO ESQUERDO: Balões de Contato */}
          <div className="contact-cards-wrapper">
            
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
              <div className="icon-circle">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-text">
                <h3>WhatsApp</h3>
                <p>Clique aqui para abrir WhatsApp</p>
              </div>
              <div className="external-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>

            <a href="https://instagram.com/fourinox" target="_blank" rel="noopener noreferrer" className="contact-item instagram">
              <div className="icon-circle">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="contact-text">
                <h3>Instagram</h3>
                <p>@fourinox</p>
              </div>
              <div className="external-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>

            <a href="mailto:contato@fourinox.com.br" className="contact-item email">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>E-mail</h3>
                <p>contato@fourinox.com.br</p>
              </div>
              <div className="external-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>

          </div>

          {/* LADO DIREITO: Mapa */}
          <div className="contact-map-wrapper">
            <iframe 
              title="Localização Fourinox"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197582236317!2d-46.65866762375836!3d-23.56134916124508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;