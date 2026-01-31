import './Home.css'
import { useEffect, useRef } from 'react'

export default function Home() {
    const imgRef = useRef(null)

    useEffect(() => {
        const el = imgRef.current
        if (!el) return

        const triggerAnimation = () => {
        el.classList.remove('animate')
        void el.offsetWidth
        el.classList.add('animate')
        }
        
        triggerAnimation()

        const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            triggerAnimation()
            }
        })
        }, { threshold: 0.3 })

        io.observe(el)

        return () => io.disconnect()
    }, [])

    return (
      <section ref={imgRef} className="img-home">
        <div className="img-home-content" role="region" aria-label="Solicitar orçamento">
          <h1 className="img-home-text">Peça um orçamento rápido<br/>e sem compromisso</h1>
          <button className="btn-quote">Solicitar Orçamento</button>
        </div>
      </section>
    )
}