import './Sobre.css'

export default function Sobre() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">       
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre a FOURINOX</h2>
            <h3>Nossa Essência</h3>
            <p>
              A Four Inox nasceu do desejo de dois vendedores em oferecer um atendimento diferenciado, 
              com uma política transparente e baseada na construção de relações de confiança. Nosso objetivo 
              vai além de simplesmente fornecer materiais: buscamos atender cada cliente com dedicação, estima e respeito, 
              priorizando suas necessidades e expectativas. Nossa empresa é sustentada por quatro pilares 
              fundamentais: <strong>inovação, qualidade, durabilidade e sustentabilidade.</strong>
            </p>
          </div>

          <div className="about-highlights">
            {/* Card 1: Foco em Confiança */}
            <div className="highlight-card">
              {/* Mantive as classes de cor originais (ex: icon-tech) para não quebrar seu CSS */}
              <div className="highlight-icon icon-tech">
                <i className="fas fa-handshake"></i> {/* Ícone de aperto de mão */}
              </div>
              <h4>Relações de Confiança</h4>
              <p>Política transparente baseada na construção de parcerias duradouras e respeito mútuo.</p>
            </div>

            {/* Card 2: Foco no Cliente */}
            <div className="highlight-card">
              <div className="highlight-icon icon-design">
                <i className="fas fa-user-check"></i> {/* Ícone de atendimento/cliente */}
              </div>
              <h4>Dedicação ao Cliente</h4>
              <p>Atendimento diferenciado que prioriza suas necessidades e expectativas com estima.</p>
            </div>

            {/* Card 3: Pilares Qualidade/Durabilidade */}
            <div className="highlight-card">
              <div className="highlight-icon icon-quality">
                <i className="fas fa-shield-halved"></i> {/* Ícone de escudo mantido */}
              </div>
              <h4>Qualidade e Durabilidade</h4>
              <p>Pilares fundamentais que garantem a excelência e a longa vida útil dos nossos materiais.</p>
            </div>

            {/* Card 4: Pilares Inovação/Sustentabilidade */}
            <div className="highlight-card">
              <div className="highlight-icon icon-speed">
                <i className="fas fa-leaf"></i> {/* Ícone de folha para sustentabilidade */}
              </div>
              <h4>Inovação Sustentável</h4>
              <p>Busca constante por soluções tecnológicas alinhadas com a responsabilidade ambiental.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}