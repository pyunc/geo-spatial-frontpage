import type { Metadata } from "next";
import { CalendarDays, Mail, MapPinned, Send } from "lucide-react";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Agende uma conversa para validar a primeira demo da rua1.ai.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="section-copy">
            <p className="eyebrow">Contato</p>
            <h1>Vamos desenhar a primeira demo de territorio.</h1>
            <p>
              Conte qual mercado, regiao ou base de empresas voce quer validar. A resposta ideal da demo
              deve caber em uma conversa curta e uma demo visual.
            </p>
            <div className="contact-methods">
              <a href={`mailto:${brand.email}`}>
                <Mail aria-hidden="true" className="h-5 w-5" />
                {brand.email}
              </a>
              <span>
                <CalendarDays aria-hidden="true" className="h-5 w-5" />
                Demo inicial de 30 minutos
              </span>
              <span>
                <MapPinned aria-hidden="true" className="h-5 w-5" />
                Foco em Brasil e America Latina
              </span>
            </div>
          </div>

          <form action={`mailto:${brand.email}`} className="contact-form" encType="text/plain" method="post">
            <div>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" placeholder="Seu nome" type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="voce@empresa.com" type="email" />
            </div>
            <div>
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" placeholder="Nome da empresa" type="text" />
            </div>
            <div>
              <label htmlFor="goal">Objetivo</label>
              <select defaultValue="" id="goal" name="goal">
                <option disabled value="">
                  Selecione uma prioridade
                </option>
                <option>Inteligencia de mercado</option>
                <option>Prospeccao B2B</option>
                <option>Expansao territorial</option>
                <option>Dados geoespaciais</option>
              </select>
            </div>
            <div className="contact-form__wide">
              <label htmlFor="message">Contexto</label>
              <textarea id="message" name="message" placeholder="Ex: quero mapear clinicas em SP por potencial de venda..." rows={5} />
            </div>
            <div className="contact-form__wide">
              <button className="button-link button-link--primary" type="submit">
                <span>Enviar por email</span>
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
