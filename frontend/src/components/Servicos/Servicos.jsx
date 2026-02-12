import './Servicos.css';

const Servicos = () => {
  return (
    <section className="services-section" id="servicos">
        <h2 className="section-title">Nossos Serviços</h2>

        <div className="services-content">
            <div className="service-card-modern">
              <div className="service-image-box">
                <img src="/img-corte-a-laser.webp" alt="Corte a Laser" />
              </div>
              
              <div className="service-content">
                <div className="service-header-row">
                  <i className="fas fa-microchip service-icon"></i>
                  <h3>Corte a Laser</h3>
                </div>
                
                <p>
                  Utilizamos tecnologia de fibra ótica para realizar cortes milimétricos 
                  com acabamento impecável, eliminando rebarbas e garantindo agilidade 
                  total no seu projeto industrial.
                </p>
                
                <div className="service-footer">
                  <a href="https://wa.me/message/JX3T3UILQ4YJN1" target="_blank" className="service-btn">
                    Saiba mais <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="service-card-modern">
              <div className="service-image-box">
                <img src="/img-montagem-corrimao.png" alt="Corrimão e Guarda-Corpo em Inox" />
              </div>
              
              <div className="service-content">
                <div className="service-header-row">
                  <i className="fas fa-shield-halved service-icon"></i>
                  <h3>Corrimão e Guarda-Corpo</h3>
                </div>
                
                <p>
                  Fabricação e montagem personalizada de sistemas de segurança em aço inox. 
                  Unimos engenharia de precisão e acabamento de alto padrão para projetos 
                  residenciais, comerciais e industriais.
                </p>
                
                <div className="service-footer">
                  <a href="https://wa.me/message/JX3T3UILQ4YJN1" target="_blank" className="service-btn">
                    Saiba mais <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>               
        </div>
    </section>
  );
};

export default Servicos;