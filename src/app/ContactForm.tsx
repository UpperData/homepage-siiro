"use client";

import type { FormEvent } from "react";

const CONTACT_EMAIL = "siirosystem@gmail.com";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Consulta desde el sitio web de Siiro",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input autoComplete="name" name="name" required />
      </label>
      <label>
        Correo electrónico
        <input autoComplete="email" name="email" required type="email" />
      </label>
      <label>
        ¿En qué podemos ayudarte?
        <textarea name="message" required rows={4} />
      </label>
      <button className="button button-light" type="submit">
        Enviar mensaje
        <span aria-hidden="true">↗</span>
      </button>
      <p className="contact-form-note">
        Se abrirá tu aplicación de correo para que revises y envíes el mensaje.
      </p>
    </form>
  );
}
