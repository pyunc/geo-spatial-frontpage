import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { getSegment, segments } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return segments.map((segment) => ({ slug: segment.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);

  if (!segment) {
    return {};
  }

  return {
    title: segment.title,
    description: segment.description,
    alternates: {
      canonical: `/casos-de-uso/segmentos/${segment.slug}`,
    },
  };
}

export default async function SegmentPage({ params }: PageProps) {
  const { slug } = await params;
  const segment = getSegment(slug);

  if (!segment) {
    notFound();
  }

  return <PageTemplate content={segment} sectionLabel="Segmento" />;
}
