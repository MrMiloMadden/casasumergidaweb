"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryItems = [
  { src: "/1.jpg", alt: "Ilustración Monstera y estrellas", caption: "Monstera y estrellas" },
  { src: "/2.jpg", alt: "Ilustración Sueños acuáticos", caption: "Sueños acuáticos" },
  { src: "/8.jpeg", alt: "Portada del libro Jardín sumergido", caption: "Jardín sumergido" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const stored = window.localStorage.getItem("larea-dark-mode");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return stored ? stored === "true" : prefersDark;
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("larea-dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="relative min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <div className="pointer-events-none absolute inset-0 editorial-bg" aria-hidden="true" />

      <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/95 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 lg:px-10">
          <a
            href="#inicio"
            className="font-[family-name:var(--font-display)] text-3xl leading-none text-[color:var(--ink)] md:text-4xl"
          >
            La Casa Sumergida
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink-soft)] md:flex">
            <a className="nav-link" href="#inicio">
              Inicio
            </a>
            <a className="nav-link" href="#sinopsis">
              El Libro
            </a>
            <a className="nav-link" href="#autora">
              Autora
            </a>
            <a className="nav-link" href="#galeria">
              Galería
            </a>
            <a className="nav-link" href="#comprar">
              Comprar
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <a
                className="social-button"
                href="https://www.instagram.com/watercolorsofmidnight?igsh=MWJ5M2k0MGFnc2Q2Zw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </a>
              <a
                className="social-button"
                href="https://www.tiktok.com/@larea.art?_r=1&_t=ZS-94Ipv27kD5g"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M16.5 2c.4 2.2 2 3.9 4.1 4.3v3.3c-1.8.1-3.5-.5-4.9-1.6v6.1a6 6 0 1 1-5.4-5.9v3.4a2.6 2.6 0 1 0 2.4 2.6V2h3.8z"
                  />
                </svg>
              </a>
            </div>

            <button
              className="icon-button"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Cambiar modo de color"
            >
              {darkMode ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M6.8 4.6 5.4 3.2 3.2 5.4l1.4 1.4 2.2-2.2zm10.4 0 2.2 2.2 1.4-1.4-2.2-2.2-1.4 1.4M12 5a1 1 0 0 0 1-1V2h-2v2a1 1 0 0 0 1 1m0 14a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m7-8a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1m-14 0a1 1 0 0 0-1-1H2v2h2a1 1 0 0 0 1-1m1.8 6.4-2.2 2.2 1.4 1.4 2.2-2.2-1.4-1.4m10.4 0-1.4 1.4 2.2 2.2 1.4-1.4-2.2-2.2M12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7"
                  />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path fill="currentColor" d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7.5 7.5 0 1 0 11.5 11.5z" />
                </svg>
              )}
            </button>

            <button className="cart-button" type="button" onClick={() => setCartOpen((prev) => !prev)}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M7 4H5L4 6H2v2h2l3.6 7.6-1.35 2.4A1 1 0 0 0 7.12 20H20v-2H8.42l.9-1.6H16a2 2 0 0 0 1.8-1.1L21 9a1 1 0 0 0-.9-1.45H6.2L7 4m1 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
                />
              </svg>
              <span className="hidden md:inline">Carrito</span>
              <span className="cart-badge">1</span>
            </button>

            <button
              className="icon-button md:hidden"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M4 7h16v2H4V7m0 4h16v2H4v-2m0 4h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileMenuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          className={`absolute inset-0 bg-black/40 transition ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
          aria-label="Cerrar menú"
          type="button"
        />
        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 h-full w-72 border-l border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="font-[family-name:var(--font-display)] text-2xl">Menú</p>
            <button className="icon-button" type="button" onClick={closeMobileMenu} aria-label="Cerrar menú">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7l-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3 1.4 1.4z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-5 text-lg text-[color:var(--ink-soft)]">
            <a href="#inicio" onClick={closeMobileMenu}>
              Inicio
            </a>
            <a href="#sinopsis" onClick={closeMobileMenu}>
              El Libro
            </a>
            <a href="#autora" onClick={closeMobileMenu}>
              Autora
            </a>
            <a href="#galeria" onClick={closeMobileMenu}>
              Galería
            </a>
            <a href="#comprar" onClick={closeMobileMenu}>
              Comprar
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <a
              className="social-button"
              href="https://www.instagram.com/watercolorsofmidnight?igsh=MWJ5M2k0MGFnc2Q2Zw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </a>
            <a
              className="social-button"
              href="https://www.tiktok.com/@larea.art?_r=1&_t=ZS-94Ipv27kD5g"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M16.5 2c.4 2.2 2 3.9 4.1 4.3v3.3c-1.8.1-3.5-.5-4.9-1.6v6.1a6 6 0 1 1-5.4-5.9v3.4a2.6 2.6 0 1 0 2.4 2.6V2h3.8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <main className="relative z-10">
        <section
          id="inicio"
          className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-16"
        >
          <div className="order-2 lg:order-1">
            <h1 className="font-[family-name:var(--font-display)] text-6xl leading-[0.95] text-[color:var(--ink)] sm:text-7xl md:text-8xl">
              La Casa
              <br />
              Sumergida
            </h1>
            <p className="mt-4 text-3xl italic text-[color:var(--brand)] md:text-4xl">por Larea Vanegas</p>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-[color:var(--ink-soft)]">
              Un viaje onírico a través de acuarelas delicadas que exploran los espacios íntimos del alma. La Casa
              Sumergida es una colección de ilustraciones y reflexiones que invitan al lector a sumergirse en un mundo
              donde lo botánico y lo emocional se entrelazan en una danza de colores suaves y formas orgánicas.
            </p>
            <div className="mt-7">
              <button
                className={`hidden rounded-full px-7 py-3 text-base font-semibold text-white transition hover:brightness-105 md:inline-flex ${
                  darkMode ? "bg-orange-500" : "bg-violet-800"
                }`}
                type="button"
                onClick={() => setCartOpen(true)}
              >
                Comprar ahora
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Surrealismo", "Naturaleza", "Introspección", "Feminidad", "Sueños"].map((topic) => (
                <span key={topic} className="rounded-full border border-[color:var(--line)] bg-[color:var(--chip)] px-4 py-2 text-sm text-[color:var(--brand)]">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-md lg:order-2">
            <div className="rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-[0_20px_40px_rgba(25,35,45,0.08)]">
              <Image
                src="/4.jpeg"
                alt="Portada del libro La Casa Sumergida"
                width={560}
                height={760}
                className="h-auto w-full rounded-[14px] object-cover"
                priority
              />
            </div>
            <button
              className={`mt-4 w-full rounded-full px-7 py-3 text-base font-semibold text-white transition hover:brightness-105 md:hidden ${
                darkMode ? "bg-orange-500" : "bg-violet-800"
              }`}
              type="button"
              onClick={() => setCartOpen(true)}
            >
              Comprar ahora
            </button>
          </div>
        </section>

        <section id="sinopsis" className="mx-auto w-full max-w-5xl px-5 pb-20 md:px-8 lg:px-10">
          <h2 className="section-title">Sobre el Libro</h2>
          <p className="section-ornament" aria-hidden="true">
            ─── ✦ ───
          </p>

          <div className="space-y-7 text-xl leading-relaxed text-[color:var(--ink-soft)]">
            <p>
              <span className="float-left mr-2 font-[family-name:var(--font-display)] text-7xl leading-[0.9] text-[color:var(--gold)]">
                U
              </span>
              n viaje onírico a través de acuarelas delicadas que exploran los espacios íntimos del alma. La Casa
              Sumergida es una colección de ilustraciones y reflexiones que invitan al lector a sumergirse en un mundo
              donde lo botánico y lo emocional se entrelazan en una danza de colores suaves y formas orgánicas.
            </p>
            <p>
              Cada ilustración en <em className="font-[family-name:var(--font-display)]">La Casa Sumergida</em> es una
              ventana a un mundo donde las hojas de monstera se entrelazan con constelaciones, donde las flores flotan
              en espacios acuáticos imaginarios y donde los colores suaves de la acuarela dan vida a emociones que las
              palabras apenas pueden capturar.
            </p>
            <p>
              Este libro invita a sumergirse, literal y metafóricamente, en las profundidades del alma, explorando
              temas de introspección, feminidad y la conexión íntima entre la naturaleza y nuestro mundo interior.
            </p>
          </div>

          <div className="mt-12 rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
            <h3 className="text-center font-[family-name:var(--font-display)] text-5xl text-[color:var(--brand)]">
              Temas Principales
            </h3>
            <ul className="mt-8 grid gap-4 text-lg text-[color:var(--ink-soft)] sm:grid-cols-2">
              {["Surrealismo", "Naturaleza", "Introspección", "Feminidad", "Sueños"].map((topic) => (
                <li key={topic} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--gold)]" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="autora" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 lg:px-10">
          <h2 className="section-title">Sobre la Autora</h2>
          <p className="section-ornament" aria-hidden="true">
            ─── ✦ ───
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface)] p-3">
              <Image
                src="/5.jpeg"
                alt="Retrato de Larea Vanegas"
                width={620}
                height={800}
                className="h-auto w-full rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-6xl leading-none text-[color:var(--brand)] md:text-7xl">
                Larea Vanegas
              </h3>
              <p className="mt-4 text-3xl italic text-[color:var(--gold)]">Artista visual contemporánea</p>
              <p className="mt-7 text-xl leading-relaxed text-[color:var(--ink-soft)]">
                Artista visual y autora, Larea Vanegas crea mundos de acuarela donde la naturaleza y la emoción
                convergen. Su trabajo ha sido descrito como poesía visual que captura la delicadeza de los momentos
                introspectivos y la fuerza silenciosa de lo femenino.
              </p>
              <p className="mt-8 border-t border-[color:var(--line)] pt-6 font-[family-name:var(--font-display)] text-3xl italic text-[color:var(--ink-soft)]">
                &quot;El arte es el lenguaje del alma cuando las palabras no son suficientes.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 lg:px-10">
          <h2 className="section-title">Galería de Ilustraciones</h2>
          <p className="section-ornament" aria-hidden="true">
            ─── ✦ ───
          </p>
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-[color:var(--ink-soft)]">
            Explora algunas de las ilustraciones que encontrarás en <em className="font-[family-name:var(--font-display)]">La Casa Sumergida</em>, donde cada acuarela cuenta su propia historia visual.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure key={item.src} className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface)] p-3">
                <Image src={item.src} alt={item.alt} width={480} height={640} className="h-[390px] w-full rounded-[12px] object-cover" />
                <figcaption className="pt-3 text-center font-[family-name:var(--font-display)] text-3xl italic text-[color:var(--brand)]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="comprar" className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8 lg:px-10">
          <h2 className="section-title">Consigue el Libro</h2>
          <div className="mx-auto mt-6 max-w-4xl rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-10">
            <p className="text-center font-[family-name:var(--font-display)] text-6xl text-[color:var(--brand)] md:text-7xl">
              La Casa Sumergida
            </p>
            <p className="mt-2 text-center text-3xl italic text-[color:var(--gold)]">por Larea Vanegas</p>

            <div className="mt-8 rounded-[16px] border border-dashed border-[color:var(--line)] bg-[color:var(--paper)] px-5 py-8 text-center">
              <p className="text-3xl text-[color:var(--ink-soft)]">Pronto disponible para compra</p>
              <p className="mt-2 text-lg text-[color:var(--ink-soft)]/85">
                La funcionalidad de carrito de compras estará disponible próximamente.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-[color:var(--ink-soft)]">Por consultas o pedidos anticipados:</p>
              <button
                className="mt-4 rounded-full border-2 border-[color:var(--gold)] px-8 py-3 text-lg font-semibold text-[color:var(--gold)] transition hover:bg-[color:var(--gold)] hover:text-[color:var(--paper)]"
                type="button"
                onClick={() => setCartOpen(true)}
              >
                Contáctanos
              </button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-[color:var(--line)] pt-8 text-[color:var(--ink-soft)] sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--brand)]/80">Formato</p>
                <p className="mt-1 text-xl font-semibold text-[color:var(--ink)]">Tapa blanda</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--brand)]/80">Páginas</p>
                <p className="mt-1 text-xl font-semibold text-[color:var(--ink)]">120 ilustradas</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--brand)]/80">Idioma</p>
                <p className="mt-1 text-xl font-semibold text-[color:var(--ink)]">Español</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--brand)]/80">Precio estimado</p>
                <p className="mt-1 text-xl font-semibold text-[color:var(--ink)]">$75.000 COP</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside
        aria-label="Carrito de compras"
        className={`fixed z-50 w-full border-t border-[color:var(--line)] bg-[color:var(--surface)] p-4 shadow-2xl transition duration-300 md:bottom-6 md:right-6 md:w-[360px] md:rounded-[18px] md:border md:p-5 ${
          cartOpen
            ? "bottom-0 translate-y-0 opacity-100"
            : "pointer-events-none -bottom-6 translate-y-full opacity-0 md:translate-y-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--brand)]">Carrito</p>
          <button className="icon-button" type="button" onClick={() => setCartOpen(false)} aria-label="Cerrar carrito">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7l-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3 1.4 1.4z" />
            </svg>
          </button>
        </div>
        <p className="mt-1 text-sm text-[color:var(--ink-soft)]">1 artículo</p>
        <div className="mt-4 flex gap-4">
          <Image src="/4.jpeg" alt="Libro La Casa Sumergida" width={90} height={120} className="h-24 w-20 rounded-[10px] object-cover" />
          <div className="flex-1">
            <p className="text-base font-semibold text-[color:var(--ink)]">La Casa Sumergida</p>
            <p className="text-sm text-[color:var(--ink-soft)]">Tapa blanda · Cantidad 1</p>
            <p className="mt-2 text-base font-semibold text-[color:var(--ink)]">$75.000 COP</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[color:var(--line)] pt-4">
          <span className="text-sm text-[color:var(--ink-soft)]">Subtotal</span>
          <span className="text-lg font-semibold">$75.000 COP</span>
        </div>
        <button
          className="mt-4 w-full rounded-full bg-[color:var(--brand)] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          type="button"
        >
          Finalizar compra
        </button>
      </aside>

      <footer className="relative z-10 border-t border-[color:var(--line)] bg-[color:var(--surface)]/80 pb-10 pt-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-[color:var(--ink-soft)] md:flex-row md:px-10 md:text-left">
          <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">La Casa Sumergida</p>
          <div className="flex items-center gap-2">
            <a
              className="social-button"
              href="https://www.instagram.com/watercolorsofmidnight?igsh=MWJ5M2k0MGFnc2Q2Zw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </a>
            <a
              className="social-button"
              href="https://www.tiktok.com/@larea.art?_r=1&_t=ZS-94Ipv27kD5g"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M16.5 2c.4 2.2 2 3.9 4.1 4.3v3.3c-1.8.1-3.5-.5-4.9-1.6v6.1a6 6 0 1 1-5.4-5.9v3.4a2.6 2.6 0 1 0 2.4 2.6V2h3.8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
