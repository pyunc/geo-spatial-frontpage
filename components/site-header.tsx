"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MapPinned, Menu, X } from "lucide-react";
import { brand, solutions, useCases } from "@/data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link className="brand-mark" href="/" onClick={() => setIsOpen(false)}>
          <MapPinned aria-hidden="true" className="h-5 w-5" />
          <span>{brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacao principal">
          <div className="nav-popover">
            <button className="nav-trigger" type="button">
              Solucoes
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="nav-menu nav-menu--wide">
              <div className="nav-menu__intro">
                <span>Plataforma rua1.ai</span>
                <strong>Da leitura do territorio para a acao comercial.</strong>
              </div>
              <div className="nav-menu__grid">
                {solutions.map((solution) => (
                  <Link href={`/solucoes/${solution.slug}`} key={solution.slug}>
                    <span>{solution.navTitle}</span>
                    <small>{solution.heroMetric}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-popover">
            <button className="nav-trigger" type="button">
              Casos de uso
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="nav-menu">
              {useCases.map((useCase) => (
                <Link href={`/casos-de-uso/${useCase.slug}`} key={useCase.slug}>
                  <span>{useCase.navTitle}</span>
                  <small>{useCase.heroMetric}</small>
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-link" href="/#demo">
            Demo
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="header-link" href="/contato">
            Contato
          </Link>
          <Link className="header-cta" href="/contato">
            Agendar conversa
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="mobile-menu-button lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-panel lg:hidden">
          <div>
            <span className="mobile-panel__label">Solucoes</span>
            {solutions.map((solution) => (
              <Link href={`/solucoes/${solution.slug}`} key={solution.slug} onClick={() => setIsOpen(false)}>
                {solution.navTitle}
              </Link>
            ))}
          </div>
          <div>
            <span className="mobile-panel__label">Casos de uso</span>
            {useCases.map((useCase) => (
              <Link href={`/casos-de-uso/${useCase.slug}`} key={useCase.slug} onClick={() => setIsOpen(false)}>
                {useCase.navTitle}
              </Link>
            ))}
          </div>
          <Link className="mobile-panel__cta" href="/contato" onClick={() => setIsOpen(false)}>
            Agendar conversa
          </Link>
        </div>
      ) : null}
    </header>
  );
}
