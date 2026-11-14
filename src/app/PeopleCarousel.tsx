"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/people-collaboration.jpg",
    alt: "Un equipo de profesionales comparte ideas alrededor de una mesa de trabajo.",
    label: "Equipos que crean",
    title: "Las mejores ideas nacen cuando trabajamos en conjunto.",
    description:
      "Diseñamos herramientas para que las personas y sus equipos puedan enfocarse en lo que saben hacer mejor.",
  },
  {
    image: "/images/people-learning.jpg",
    alt: "Docente y estudiantes adultos participan en una clase presencial.",
    label: "Comunidades que aprenden",
    title: "Cada experiencia de aprendizaje merece avanzar.",
    description:
      "La tecnología puede acercar a docentes, estudiantes e instituciones en cada etapa del camino.",
  },
  {
    image: "/images/people-workshop.jpg",
    alt: "Un grupo de colegas conversa en un espacio de trabajo colaborativo.",
    label: "Organizaciones que evolucionan",
    title: "Personas reales. Retos únicos. Nuevas posibilidades.",
    description:
      "Creamos soluciones que se adaptan a las necesidades de cada organización y de quienes la hacen posible.",
  },
];

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "previous" ? "carousel-arrow-reverse" : undefined}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

export default function PeopleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeIndex];

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section className="people-section section-space" id="personas" aria-labelledby="people-title">
      <div className="container">
        <div className="people-heading">
          <div>
            <div className="eyebrow-label"><span className="eyebrow-dot" /> TECNOLOGÍA CENTRADA EN PERSONAS</div>
            <h2 id="people-title">Detrás de cada avance, <span>hay personas.</span></h2>
          </div>
          <p>Conocemos los retos de equipos, educadores y organizaciones. Por eso creamos soluciones pensadas para acompañar su día a día.</p>
        </div>

        <div
          className="people-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Personas y equipos en distintos sectores"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="people-photo-wrap">
            <Image
              key={slide.image}
              className="people-photo"
              src={slide.image}
              alt={slide.alt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <div className="people-photo-overlay" />
            <span className="people-photo-label">PERSONAS REALES · RETOS REALES</span>
            <span className="people-photo-count">{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>

          <div className="people-slide-copy" aria-live={isPaused ? "polite" : "off"}>
            <span className="people-slide-label">{slide.label}</span>
            <h3 key={slide.title} className="people-slide-title">{slide.title}</h3>
            <p>{slide.description}</p>
            <a className="people-cta" href="#productos">Conoce nuestras soluciones <ArrowIcon direction="next" /></a>

            <div className="people-controls">
              <div className="people-dots" aria-label="Elegir diapositiva">
                {slides.map((item, index) => (
                  <button
                    key={item.image}
                    className={`people-dot${index === activeIndex ? " is-active" : ""}`}
                    type="button"
                    aria-label={`Mostrar ${item.label.toLowerCase()}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
              <div className="people-arrows">
                <button type="button" aria-label="Imagen anterior" onClick={() => showSlide(activeIndex - 1)}>
                  <ArrowIcon direction="previous" />
                </button>
                <button type="button" aria-label="Imagen siguiente" onClick={() => showSlide(activeIndex + 1)}>
                  <ArrowIcon direction="next" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="people-disclaimer">Fotografías de stock ilustrativas.</p>
      </div>
    </section>
  );
}
