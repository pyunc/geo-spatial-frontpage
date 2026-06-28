import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { getSolution, solutions } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {};
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: {
      canonical: `/solucoes/${solution.slug}`,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return <PageTemplate content={solution} sectionLabel="Solucao" />;
}
