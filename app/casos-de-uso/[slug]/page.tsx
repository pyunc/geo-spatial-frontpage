import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { getUseCase, useCases } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);

  if (!useCase) {
    return {};
  }

  return {
    title: useCase.title,
    description: useCase.description,
    alternates: {
      canonical: `/casos-de-uso/${useCase.slug}`,
    },
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCase(slug);

  if (!useCase) {
    notFound();
  }

  return <PageTemplate content={useCase} sectionLabel="Caso de uso" />;
}
