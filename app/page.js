'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq]       = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const reveals = document.querySelectorAll('.reveal')
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target) } })
    }, { threshold: 0.07 })
    reveals.forEach(r => ro.observe(r))

    const links = document.querySelectorAll('a[href^="#"]')
    const handleClick = e => {
      const t = document.querySelector(e.currentTarget.getAttribute('href'))
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }) }
    }
    links.forEach(a => a.addEventListener('click', handleClick))

    return () => { window.removeEventListener('scroll', onScroll); ro.disconnect(); links.forEach(a => a.removeEventListener('click', handleClick)) }
  }, [])

  const maisVendidos = [
    { name: 'Classic Smash', desc: 'Pão brioche tostado, carne smash 100g, cheddar americano e molho especial da casa.', price: 'R$18', img: '/classic.png' },
    { name: 'Double Smash', desc: 'Duas carnes smash, cheddar duplo derretido e cebola caramelizada no ponto.', price: 'R$25', img: '/double.png', featured: true },
    { name: 'Bacon Supreme', desc: 'Smash duplo, bacon crocante, cheddar e molho barbecue defumado.', price: 'R$30', img: '/bacon.png' },
  ]

  const cardapio = [
    {
      cat: 'Burgers', emoji: '🍔',
      items: [['Classic Smash','R$18'],['Double Smash','R$25'],['Bacon Supreme','R$30'],['Chicken Crunch','R$26']],
    },
    {
      cat: 'Acompanhamentos', emoji: '🍟',
      items: [['Batata frita','R$10'],['Batata rústica','R$14'],['Onion rings','R$12'],['Batata com cheddar','R$18']],
    },
    {
      cat: 'Bebidas', emoji: '🥤',
      items: [['Refrigerante lata','R$6'],['Suco natural','R$8'],['Milkshake','R$15']],
    },
    {
      cat: 'Sobremesas', emoji: '🍰',
      items: [['Brownie com sorvete','R$18'],['Mini churros','R$12']],
    },
  ]

  const faqs = [
    { q: 'Qual o tempo de entrega?', a: 'Nossos pedidos chegam em até 25 minutos. Em horários de pico pode variar um pouco, mas sempre quentinho e no ponto!' },
    { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos Pix, cartão de crédito e débito (todas as bandeiras) e dinheiro. Para pagamento no cartão ou dinheiro, informe ao fazer o pedido.' },
    { q: 'Qual é a área de entrega?', a: 'Entregamos em toda a cidade! Para confirmar se seu bairro está na cobertura, entre em contato pelo nosso WhatsApp.' },
  ]

  return (
    <>
      {/* STICKY */}
      <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="sticky-cta" target="_blank" rel="noopener">
        🍔 Pedir Agora
      </a>

      {/* MOBILE MENU */}
      <div className={`mob-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobileOpen(false)}>✕ fechar</button>
        <a href="#hero"          onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#mais-vendidos" onClick={() => setMobileOpen(false)}>Menu</a>
        <a href="#cardapio"      onClick={() => setMobileOpen(false)}>Cardápio</a>
        <a href="#faq"           onClick={() => setMobileOpen(false)}>Contato</a>
      </div>

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-main"><span>Smash</span> Burgers</span>
          <span className="nav-logo-sub">Premium Smash Burgers</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#mais-vendidos">Menu</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#diferenciais">Sobre</a></li>
          <li><a href="#faq">Contato</a></li>
          <li>
            <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="btn-nav-cta" target="_blank" rel="noopener">
              Pedir Agora
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero">
        <div className="hero-texture" />
        <div className="hero-glow" />
        <div className="hero-circle-1" />
        <div className="hero-dots">
          {Array.from({ length: 28 }).map((_, i) => <span key={i} />)}
        </div>

        <div className="hero-inner">
          {/* LEFT */}
          <div>
            <div className="hero-label reveal">Aberto hoje até meia-noite</div>
            <h1 className="hero-title reveal" style={{ transitionDelay: '.1s' }}>
              O Smash Burger<br />
              <span>Mais Insano</span>
              Da Sua Cidade
            </h1>
            <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
              Carne prensada na chapa, pão brioche macio e queijo derretido que explode em sabor a cada mordida.
            </p>
            <div className="hero-proof reveal" style={{ transitionDelay: '.28s' }}>
              <span className="proof-stars">★★★★★</span>
              <span className="proof-score">4.9</span>
              <span className="proof-label">avaliação</span>
              <div className="proof-sep" />
              <span className="proof-deliveries">🚀 +5.000 pedidos entregues</span>
            </div>
            <div className="hero-btns reveal" style={{ transitionDelay: '.35s' }}>
              <a href="https://wa.me/5511999999999?text=Quero%20fazer%20um%20pedido!" className="btn-orange" target="_blank" rel="noopener">
                🍔 Pedir Agora
              </a>
              <a href="#cardapio" className="btn-ghost-w">Ver Cardápio →</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-visual reveal" style={{ transitionDelay: '.22s' }}>
            <div className="burger-wrap">
              <div className="burger-glow-outer" />
              <div className="burger-glow-inner" />
              <div className="burger-ring-1" />
              <div className="burger-ring-2" />
              <span className="burger-spark" />
              <span className="burger-spark" />
              <span className="burger-spark" />
              <span className="burger-spark" />
              <img src="/hero-burger.png" alt="Smash Burger Premium" className="burger-img" />
              <div className="badge-off">
                <span className="badge-off-label">Hoje</span>
                <span className="badge-off-value">30%</span>
                <span className="badge-off-sub">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAIS VENDIDOS ══ */}
      <section id="mais-vendidos">
        <div className="mv-inner">
          <div className="mv-header">
            <div className="sec-tag reveal">⭐ Favoritos</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Mais <span>Vendidos</span>
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.15s', margin: '0 auto' }}>
              Os burgers que fazem nossos clientes voltarem toda semana
            </p>
          </div>
          <div className="mv-grid">
            {maisVendidos.map((item, i) => (
              <div className={`mv-card reveal${item.featured ? ' featured' : ''}`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mv-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="mv-body">
                  <div className="mv-name">{item.name}</div>
                  <p className="mv-desc">{item.desc}</p>
                  <div className="mv-footer">
                    <div className="mv-price">
                      <small>a partir de</small>
                      {item.price}
                    </div>
                    <a href="https://wa.me/5511999999999" className="btn-pedir" target="_blank" rel="noopener">
                      Pedir →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CARDÁPIO ══ */}
      <section id="cardapio">
        <div className="menu-inner">
          <div className="menu-header reveal">
            <div className="sec-tag">📋 Menu</div>
            <h2 className="sec-title" style={{ marginTop: '8px' }}>
              Cardápio <span>Completo</span>
            </h2>
          </div>
          <div className="menu-cats reveal" style={{ transitionDelay: '.1s' }}>
            {cardapio.map(cat => (
              <div key={cat.cat}>
                <div className="mcat-title">{cat.emoji} {cat.cat}</div>
                {cat.items.map(([name, price]) => (
                  <div className="mitem" key={name}>
                    <span className="mitem-n">{name}</span>
                    <span className="mitem-p">{price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFERENCIAIS ══ */}
      <section id="diferenciais">
        <div className="difs-inner">
          <div className="difs-header">
            <div className="sec-tag reveal">⚡ Por que nós</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              Nossos <span>Diferenciais</span>
            </h2>
          </div>
          <div className="difs-grid">
            {[
              { icon: '🥩', title: 'Carne Fresca Todo Dia', text: 'Nada de congelado. Nossa carne chega fresca diariamente para garantir o máximo de sabor.' },
              { icon: '🔥', title: 'Feito na Hora', text: 'Cada burger é feito exclusivamente para você, prensado na chapa quente na hora do pedido.' },
              { icon: '👑', title: 'Ingredientes Premium', text: 'Pão brioche artesanal, queijos selecionados e molhos exclusivos com receitas próprias.' },
              { icon: '⚡', title: 'Entrega em 25 min', text: 'Prometemos e cumprimos: seu pedido na sua porta em até 25 minutos, quentinho e perfeito.' },
            ].map((d, i) => (
              <div className="dif-item reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="dif-icon">{d.icon}</span>
                <div className="dif-title">{d.title}</div>
                <p className="dif-text">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VISUAL (fries + milkshake) ══ */}
      <section id="visual">
        <div className="visual-grid">
          <div className="visual-item">
            <img src="/batatas.png" alt="Batata frita crocante" />
            <div className="visual-item-overlay">
              <div className="visual-item-name">Batata Frita</div>
              <div className="visual-item-desc">Crocante por fora, macia por dentro</div>
              <div className="visual-item-price">a partir de R$10</div>
            </div>
          </div>
          <div className="visual-item">
            <img src="/milkshake.png" alt="Milkshake premium" />
            <div className="visual-item-overlay">
              <div className="visual-item-name">Milkshake</div>
              <div className="visual-item-desc">Cremoso e irresistível em 4 sabores</div>
              <div className="visual-item-price">a partir de R$15</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INGREDIENTES ══ */}
      <section id="ingredientes">
        <div className="ingr-inner">
          <div className="ingr-img">
            <img src="/ingredients.png" alt="Ingredientes premium" />
          </div>
          <div className="ingr-content">
            <div className="sec-tag reveal">🥬 Qualidade</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Ingredientes<br /><span>Premium</span>
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>
              Cada ingrediente é selecionado com rigor. Usamos apenas o melhor — do pão brioche artesanal às carnes nobres — para garantir a experiência mais intensa e memorável.
            </p>
            <div className="ingr-tags reveal" style={{ transitionDelay: '.25s' }}>
              {['Carne Angus','Pão Brioche','Cheddar Importado','Sem Conservantes','Feito na Hora','Molhos Artesanais'].map(t => (
                <span className="ingr-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFERTA ══ */}
      <section id="oferta">
        <div className="oferta-inner">
          <span className="oferta-badge reveal">🎁 Promoção Especial</span>
          <h2 className="oferta-title reveal" style={{ transitionDelay: '.1s' }}>
            Ganhe batata frita <span>grátis</span><br />
            em pedidos acima de R$30
          </h2>
          <p className="oferta-sub reveal" style={{ transitionDelay: '.2s' }}>
            Válido todos os dias pelo WhatsApp • Enquanto durar o estoque
          </p>
          <a
            href="https://wa.me/5511999999999?text=Quero%20aproveitar%20a%20promo%20da%20batata%20gr%C3%A1tis!"
            className="btn-orange reveal"
            style={{ transitionDelay: '.3s', display: 'inline-flex' }}
            target="_blank" rel="noopener"
          >
            🚀 Aproveitar Agora
          </a>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ══ */}
      <section id="depoimentos">
        <div className="deps-inner">
          <div className="deps-header">
            <div className="sec-tag reveal">💬 Clientes</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              O que dizem <span>sobre nós</span>
            </h2>
          </div>
          <div className="deps-grid">
            {[
              { name: 'Carlos M.', loc: 'São Paulo, SP', text: 'Melhor hambúrguer que já comi na vida! O Double Smash é ridiculamente bom. Já virei cliente fiel.' },
              { name: 'Ana P.', loc: 'Campinas, SP', text: 'Entrega rápida e perfeita! Pedi às 20h e chegou em 22 minutos ainda quentinho. Não tem igual.' },
              { name: 'Rafael K.', loc: 'São Paulo, SP', text: 'Cliente fiel agora! O Classic Smash tem um sabor que vicia. Peço toda semana sem arrependimento.' },
            ].map((dep, i) => (
              <div className="dep-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="dep-q">&ldquo;</div>
                <div className="dep-stars">★★★★★</div>
                <p className="dep-text">{dep.text}</p>
                <div className="dep-sep" />
                <div className="dep-author">
                  <strong>{dep.name}</strong>
                  <span>{dep.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="sec-tag reveal">❓ Dúvidas</div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              Perguntas <span>Frequentes</span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-ic">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="ft-inner">
          <div>
            <a href="#hero" className="ft-logo">
              <span className="ft-logo-main"><span>Smash</span> Burgers</span>
            </a>
            <span className="ft-logo-sub">Premium Smash Burgers</span>
            <p className="ft-tag">O smash burger mais insano da cidade — feito com carne fresca e ingredientes de verdade.</p>
            <a href="https://wa.me/5511999999999" className="ft-link" target="_blank" rel="noopener"><span>💬</span>(11) 99999-9999</a>
            <a href="https://instagram.com/smashburgers" className="ft-link" target="_blank" rel="noopener"><span>📸</span>@smashburgers</a>
            <a href="#" className="ft-link"><span>📍</span>Rua das Lanchonetes, 123 — São Paulo</a>
          </div>
          <div>
            <div className="ft-col-title">Menu Rápido</div>
            <ul className="ft-links">
              {[['#hero','Home'],['#mais-vendidos','Mais Vendidos'],['#cardapio','Cardápio'],['#diferenciais','Sobre nós'],['#faq','Contato']].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-col-title">Horários</div>
            <ul className="ft-links">
              <li><a href="#">Seg–Sex: 18h–00h</a></li>
              <li><a href="#">Sáb–Dom: 12h–01h</a></li>
              <li><a href="#">Feriados: 14h–00h</a></li>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener">Pedir Agora →</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span className="ft-copy">© 2025 Smash Burgers. Todos os direitos reservados.</span>
          <span className="ft-flame">🍔🔥</span>
        </div>
      </footer>
    </>
  )
}
