import './Sobre.css'

export default function Sobre() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">       
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre a FOURINOX</h2>
            <h3>Excelência em Inox</h3>
            <p>
              A FOURINOX é especializada em soluções de alta performance em aço inoxidável. 
              Com mais de 15 anos de experiência, unimos a tradição da metalurgia com 
              tecnologias de ponta para atender os setores mais exigentes do mercado.
            </p>
            
            <h3>Nossa Engenharia</h3>
            <p>
              Nossa missão é transformar o aço em soluções duráveis e estéticas. 
              Utilizamos processos de corte a laser e dobras CNC para garantir que cada 
              projeto, do residencial ao industrial, possua precisão milimétrica.
            </p>
            
            <h3>Visão de Futuro</h3>
            <p>
              Consolidar-nos como o principal centro tecnológico em inox no Brasil, 
              sendo referência em inovação e acabamentos de alto padrão.
            </p>
          </div>

          <div className="about-highlights">
            {/* Card 1: Tecnologia */}
            <div className="highlight-card">
              <div className="highlight-icon icon-tech">
                <i className="fas fa-microchip"></i>
              </div>
              <h4>Precisão Industrial</h4>
              <p>Corte a laser e dobras CNC para projetos complexos e sem rebarbas.</p>
            </div>

            {/* Card 2: Customização */}
            <div className="highlight-card">
              <div className="highlight-icon icon-design">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h4>Projetos Sob Medida</h4>
              <p>Desenvolvimento técnico focado na necessidade específica do seu espaço.</p>
            </div>

            {/* Card 3: Material */}
            <div className="highlight-card">
              <div className="highlight-icon icon-quality">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h4>Alta Durabilidade</h4>
              <p>Trabalhamos apenas com ligas de inox premium (AISI 304 e 316).</p>
            </div>

            {/* Card 4: Logística */}
            <div className="highlight-card">
              <div className="highlight-icon icon-speed">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h4>Logística Ágil</h4>
              <p>Sistema de entrega técnica garantindo a integridade total do inox.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}