import './Contact.css'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961 6.968 6.968 0 006.961 6.968c3.849 0 6.968-3.12 6.968-6.968a6.966 6.966 0 00-6.964-6.961m0-1.417c4.547 0 8.24 3.693 8.24 8.24s-3.693 8.24-8.24 8.24S2.046 19.46 2.046 14.912s3.694-8.24 8.24-8.24" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.002 2.881 1.44 1.44 0 01-.002-2.881z" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact-content">
          <h3>Informações de Contato</h3>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon whatsapp-icon">
                <WhatsAppIcon />
              </div>
              <div className="info-text">
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Clique aqui para abrir WhatsApp</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon instagram-icon">
                <InstagramIcon />
              </div>
              <div className="info-text">
                <h4>Instagram</h4>
                <p><a href="https://instagram.com/fourinox" target="_blank" rel="noopener noreferrer">@fourinox</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:contato@fourinox.com.br">contato@fourinox.com.br</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Endereço</h4>
                <p>
                  <strong>Endereço:</strong> Rua das Flores, 123 - São Paulo, SP - 01234-567<br />
                  <strong>Horário de Atendimento:</strong> Segunda a Sábado: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
