import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contato">
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

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leonardo.fourinox@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item email">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>E-mail</h3>
                <p>leonardo.fourinox@gmail.com</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5135245814524!2d-49.31909862386266!3d-16.602383984153034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef686f6689ab7%3A0x735e6e81b4a8bf7e!2sFour%20Inox!5e0!3m2!1spt-BR!2sbr!4v1706893000000!5m2!1spt-BR!2sbr" 
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