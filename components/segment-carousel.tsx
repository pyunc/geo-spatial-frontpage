"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const segments = [
  { label: "Agro", slug: "agro", image: "/images/segments/agro.png" },
  { label: "Alimentos", slug: "alimentos", image: "/images/segments/alimentos.png" },
  { label: "Automotivo", slug: "automotivo", image: "/images/segments/automotivo.png" },
  { label: "Construção", slug: "construcao", image: "/images/segments/construcao.png" },
  { label: "Educação", slug: "educacao", image: "/images/segments/educacao.png" },
  { label: "Energia Elétrica", slug: "energia-eletrica", image: "/images/segments/energia-eletrica.png" },
  { label: "Financeiro & Benefícios", slug: "financeiro-beneficios", image: "/images/segments/financeiro-beneficios.png" },
  { label: "Franquia & Varejo", slug: "franquia-varejo", image: "/images/segments/franquia-varejo.png" },
  { label: "Saúde", slug: "saude", image: "/images/segments/saude.png" },
  { label: "Telecom", slug: "telecom", image: "/images/segments/telecom.png" },
];

const cloneCount = 5;
const transitionDuration = 520;

export function SegmentCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef(true);
  const [virtualIndex, setVirtualIndex] = useState(cloneCount);
  const [isPaused, setIsPaused] = useState(false);

  const carouselItems = useMemo(
    () => [...segments.slice(-cloneCount), ...segments, ...segments.slice(0, cloneCount)],
    [],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector<HTMLElement>(".segment-carousel__card");

    if (!viewport || !card) {
      return;
    }

    const styles = window.getComputedStyle(viewport);
    const gap = Number.parseFloat(styles.getPropertyValue("--segment-gap")) || 4;
    const behavior = jumpRef.current ? "auto" : "smooth";

    jumpRef.current = false;
    viewport.scrollTo({
      behavior,
      left: virtualIndex * (card.offsetWidth + gap),
    });

    if (virtualIndex >= cloneCount + segments.length) {
      const timer = window.setTimeout(() => {
        jumpRef.current = true;
        setVirtualIndex(cloneCount);
      }, transitionDuration);

      return () => window.clearTimeout(timer);
    }

    if (virtualIndex < cloneCount) {
      const timer = window.setTimeout(() => {
        jumpRef.current = true;
        setVirtualIndex(cloneCount + segments.length - 1);
      }, transitionDuration);

      return () => window.clearTimeout(timer);
    }
  }, [virtualIndex]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isPaused || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setVirtualIndex((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function move(direction: -1 | 1) {
    setVirtualIndex((current) => current + direction);
  }

  return (
    <section
      aria-labelledby="segment-carousel-title"
      className="segment-carousel"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="segment-carousel__inner mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="segment-carousel__heading">
          <p className="segment-carousel__eyebrow">Segmentos</p>
          <h2 id="segment-carousel-title">Soluções para diversos casos de uso</h2>
          <p>
            Com expertise em dados de mercado, a rua1.ai atende diversos setores e se adapta com facilidade às
            mais variadas formas de operação das empresas.
          </p>
        </div>

        <div className="segment-carousel__stage">
          <button
            aria-label="Segmento anterior"
            className="segment-carousel__arrow segment-carousel__arrow--prev"
            onClick={() => move(-1)}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="h-8 w-8" />
          </button>

          <div
            aria-label="Carrossel de segmentos"
            aria-live="off"
            aria-roledescription="carousel"
            className="segment-carousel__viewport"
            ref={viewportRef}
            role="region"
          >
            <div className="segment-carousel__track">
              {carouselItems.map((segment, index) => (
                <Link
                  aria-label={`Ver segmento ${segment.label}`}
                  className="segment-carousel__card"
                  href={`/casos-de-uso/segmentos/${segment.slug}`}
                  key={`${segment.slug}-${index}`}
                >
                  <Image alt="" height={180} src={segment.image} width={80} />
                  <span className="segment-carousel__label">
                    <span>{segment.label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <button
            aria-label="Próximo segmento"
            className="segment-carousel__arrow segment-carousel__arrow--next"
            onClick={() => move(1)}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
