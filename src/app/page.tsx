import Image from "next/image";
import PeopleCarousel from "./PeopleCarousel";
import ContactForm from "./ContactForm";

const industries = [
  {
    number: "01",
    name: "Empresas",
    description: "Procesos conectados para una gestión más clara y eficiente.",
  },
  {
    number: "02",
    name: "Educación",
    description: "Experiencias digitales que acompañan cada etapa de aprendizaje.",
  },
  {
    number: "03",
    name: "Comercio",
    description: "Herramientas para organizar operaciones y crecer con confianza.",
  },
  {
    number: "04",
    name: "Servicios",
    description: "Soluciones flexibles para equipos que ponen a las personas primero.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard-wrap" aria-label="Vista ilustrativa de una plataforma Siiro">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-brand">
            <span className="brand-mark">s</span>
            <span>Siiro <small>workspace</small></span>
          </div>
          <span className="dashboard-avatar">JD</span>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-greeting">
            <div>
              <span className="eyebrow">TU NEGOCIO, EN PERSPECTIVA</span>
              <h2>Todo en orden.</h2>
            </div>
            <span className="period-pill"><span /> Este mes</span>
          </div>
          <div className="dashboard-stats">
            <div className="stat-card">
              <span>Operaciones</span>
              <strong>+24.8%</strong>
              <div className="mini-bars bars-a"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="stat-card">
              <span>Procesos activos</span>
              <strong>128</strong>
              <div className="progress-track"><i /></div>
            </div>
          </div>
          <div className="dashboard-chart">
            <div className="chart-heading"><span>Actividad</span><span>Últimos 7 días⌄</span></div>
            <div className="chart-bars">
              <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="chart-days"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
          </div>
          <div className="dashboard-footer"><span className="status-dot" /> Información organizada, decisiones más simples.</div>
        </div>
      </div>
      <div className="float-note"><span className="note-icon">↗</span><span><b>Una visión completa</b><small>Todo conectado en un solo lugar</small></span></div>
      <div className="float-sparkle" aria-hidden="true">✳</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <a className="logo-link" href="#inicio" aria-label="Siiro, inicio">
            <Image src="/images/primary-logo.png" alt="Siiro" width={151} height={50} priority />
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#productos">Productos</a>
            <a href="#sectores">Sectores</a>
            <a href="#nosotros">Nosotros</a>
          </nav>
          <a className="button button-small button-outline" href="#contacto">Hablemos <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-label"><span className="eyebrow-dot" /> SOFTWARE HECHO PARA AVANZAR</div>
            <h1>Tu negocio tiene un siguiente nivel. <span>Vamos por él.</span></h1>
            <p className="hero-description">
              Creamos tecnología práctica para empresas y organizaciones. Soluciones que ordenan lo complejo y abren espacio para crecer.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#productos">Conoce nuestras soluciones <ArrowIcon /></a>
              <a className="text-link" href="#nosotros">Descubre Siiro <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>S</span><span>E</span><span>+</span></div>
              <p><strong>Una solución para cada reto.</strong><br />Tecnología que se adapta a ti.</p>
            </div>
          </div>
          <DashboardPreview />
        </div>
        <div className="hero-bottom container">
          <span>DISEÑADO PARA LO QUE VIENE</span>
          <div className="hero-bottom-line" />
          <span>TECNOLOGÍA CON PROPÓSITO</span>
        </div>
      </section>

      <section className="products section-space" id="productos">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow-label"><span className="eyebrow-dot" /> SOLUCIONES SIIRO</div>
              <h2>Software que entiende <span>tu mundo.</span></h2>
            </div>
            <p>Productos creados para resolver necesidades reales. Especializados en su propósito, conectados por una misma idea: hacerte avanzar.</p>
          </div>
          <div className="product-grid">
            <article className="product-card erp-card">
              <div className="product-topline"><span className="product-index">01 / GESTIÓN EMPRESARIAL</span><span className="product-arrow"><ArrowIcon /></span></div>
              <div className="product-art erp-art" aria-hidden="true">
                <div className="erp-sheet"><span className="sheet-line short" /><span className="sheet-line" /><span className="sheet-line medium" /><div className="sheet-chart"><i /><i /><i /><i /><i /><i /></div></div>
                <span className="art-orb" />
                <span className="art-cross">✳</span>
              </div>
              <h3>Sirro ERP</h3>
              <p>La gestión de tu empresa, en sintonía. Organiza procesos, conecta áreas y toma decisiones con información clara.</p>
              <div className="product-tags"><span>Operaciones</span><span>Finanzas</span><span>Control</span></div>
              <a className="product-link" href="#contacto">Explorar Sirro ERP <ArrowIcon /></a>
            </article>
            <article className="product-card campus-card">
              <div className="product-topline"><span className="product-index">02 / EDUCACIÓN</span><span className="product-arrow"><ArrowIcon /></span></div>
              <div className="product-art campus-art" aria-hidden="true">
                <div className="campus-window"><div className="window-head"><i /><i /><i /></div><div className="window-content"><span className="window-avatar">S</span><div><i /><i /></div></div><div className="window-progress"><i /></div></div>
                <span className="campus-orb" />
                <span className="campus-star">✳</span>
              </div>
              <h3>Siiro Campus</h3>
              <p>Una experiencia educativa más conectada. Facilita la gestión académica y acompaña a tu comunidad en cada paso.</p>
              <div className="product-tags"><span>Aprendizaje</span><span>Comunidad</span><span>Gestión</span></div>
              <a className="product-link" href="#contacto">Explorar Siiro Campus <ArrowIcon /></a>
            </article>
          </div>
        </div>
      </section>

      <PeopleCarousel />

      <section className="industries section-space" id="sectores">
        <div className="container industries-grid">
          <div className="industries-intro">
            <div className="eyebrow-label"><span className="eyebrow-dot" /> MUCHOS SECTORES, UN MISMO IMPULSO</div>
            <h2>La tecnología también debe <span>adaptarse a ti.</span></h2>
            <p>Entendemos que cada organización tiene su propia forma de hacer las cosas. Por eso creamos soluciones enfocadas en las personas y en sus desafíos cotidianos.</p>
            <a className="text-link dark-link" href="#contacto">Cuéntanos tu reto <ArrowIcon /></a>
          </div>
          <div className="industry-list">
            {industries.map((industry) => (
              <article className="industry-item" key={industry.number}>
                <span className="industry-number">{industry.number}</span>
                <div><h3>{industry.name}</h3><p>{industry.description}</p></div>
                <span className="industry-chevron">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section-space" id="nosotros">
        <div className="container about-panel">
          <div className="about-decoration" aria-hidden="true"><span /><i>✳</i></div>
          <div className="about-copy">
            <div className="eyebrow-label"><span className="eyebrow-dot" /> SOMOS SIIRO</div>
            <h2>Menos fricción.<br /><span>Más posibilidades.</span></h2>
            <p>Somos un equipo de desarrollo de software multipropósito. Diseñamos herramientas digitales útiles, cercanas y listas para acompañar la evolución de cada organización.</p>
            <a className="button button-primary" href="#contacto">Conversemos <ArrowIcon /></a>
          </div>
          <div className="about-values">
            <div><span>01</span><b>Escuchamos antes de construir</b><p>Entendemos el contexto para resolver el problema correcto.</p></div>
            <div><span>02</span><b>Diseñamos para las personas</b><p>Tecnología clara, útil y pensada para el día a día.</p></div>
            <div><span>03</span><b>Avanzamos contigo</b><p>Soluciones que acompañan el crecimiento de tu organización.</p></div>
          </div>
        </div>
      </section>

      <section className="contact section-space" id="contacto">
        <div className="container contact-panel">
          <div className="contact-copy">
            <div className="contact-icon" aria-hidden="true">✳</div>
            <div className="eyebrow-label"><span className="eyebrow-dot" /> EL SIGUIENTE PASO EMPIEZA AQUÍ</div>
            <h2>¿Qué te gustaría <span>hacer posible?</span></h2>
            <p>Cuéntanos sobre tu proyecto. Estamos listos para ayudarte a encontrar la solución adecuada.</p>
            <div className="contact-methods" aria-label="Otras formas de contacto">
              <a className="contact-method" href="mailto:siirosystem@gmail.com">
                <span>Email</span>
                <strong>siirosystem@gmail.com</strong>
              </a>
              <a
                className="contact-method"
                href="https://wa.me/584149021809"
                rel="noreferrer"
                target="_blank"
              >
                <span>WhatsApp</span>
                <strong>+58 4149021809</strong>
              </a>
              <div className="contact-method contact-method-pending">
                <span>Instagram</span>
                <strong>Por definir</strong>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="logo-link footer-logo" href="#inicio" aria-label="Siiro, volver al inicio">
            <Image src="/images/white-logo.png" alt="Siiro" width={151} height={50} />
          </a>
          <p>Tecnología que impulsa<br />lo que viene.</p>
          <div className="footer-links"><a href="#productos">Productos</a><a href="#sectores">Sectores</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Siiro. Todos los derechos reservados.</span><span>Hecho para avanzar <i>✳</i></span></div>
      </footer>
    </main>
  );
}
