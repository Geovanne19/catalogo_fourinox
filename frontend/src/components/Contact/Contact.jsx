import './Contact.css';

const Contact = () => {
  const emailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=fourinox.ind@gmail.com'
  const coordenadas = '-16.607028,-49.306583'
  const mapaLink = `https://www.google.com/maps?q=${coordenadas}&z=17&output=embed`

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contato</h2>
        
        <div className="contact-layout">
          {/* LADO ESQUERDO: Balões de Contato */}
          <div className="contact-cards-wrapper">
            
            <a href="https://wa.me/message/JX3T3UILQ4YJN1" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
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

            <a href={emailLink} target="_blank" rel="noopener noreferrer" className="contact-item email" aria-label="Abrir cliente de e-mail">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>E-mail</h3>
                <p>Clique para enviar mensagem</p>
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
              src={mapaLink}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <p className="map-caption">Av. Goiás Norte, Quadra 24 - Lote 25, Res. Recanto do Bosque, Goiânia-GO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;