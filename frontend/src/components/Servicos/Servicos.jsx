import './Servicos.css';
import imgCorteLaser from '../../assets/img-corte-a-laser.webp';

const Servicos = () => {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <h2 className="section-title">Nossos Serviços</h2>

        <div className="services-content">
            <div className="service-card-modern">
              <div className="service-image-box">
                <img src={imgCorteLaser} alt="Corte a Laser" />
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
                  <button className="service-btn">
                    Saiba mais <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>              
        </div>
      </div>
    </section>
  );
};

export default Servicos;