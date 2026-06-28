import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Inteligencia geoespacial para crescimento`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Plataforma de inteligencia geoespacial para mapear mercados, priorizar contas B2B e planejar expansao.",
  metadataBase: new URL("https://rua1.ai"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13201b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
