import './Sobre.css'

export default function Sobre() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre a FOURINOX</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Quem Somos?</h3>
            <p>
              A FOURINOX é uma empresa especializada em produtos de inox de alta qualidade. 
              Com mais de 15 anos de experiência no mercado, nos tornamos referência em excelência 
              e confiabilidade, servindo residências, restaurantes e indústrias em todo o país.
            </p>
            
            <h3>Nossa Missão</h3>
            <p>
              Oferecer produtos de inox premium com durabilidade garantida, mantendo preços 
              acessíveis e um excelente atendimento ao cliente. Acreditamos que qualidade e 
              praticidade devem caminhar juntas.
            </p>
            
            <h3>Nossa Visão</h3>
            <p>
              Ser a marca mais confiável em produtos de inox no Brasil, reconhecida pela qualidade 
              superior e pela inovação contínua em nossos produtos e serviços.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">✓</div>
              <h4>Qualidade Garantida</h4>
              <p>Todos os produtos passam por rigoroso controle de qualidade</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✓</div>
              <h4>Atendimento Premium</h4>
              <p>Equipe preparada para tirar todas as suas dúvidas</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✓</div>
              <h4>Frete Rápido</h4>
              <p>Entrega segura e rápida para todo o Brasil</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">✓</div>
              <h4>Garantia Estendida</h4>
              <p>Produtos com garantia de até 3 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
