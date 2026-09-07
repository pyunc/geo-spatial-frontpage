import type { MetadataRoute } from "next";
import { segments, solutions, useCases } from "@/data/site";

const baseUrl = "https://rua1.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
    },
    ...solutions.map((solution) => ({
      url: `${baseUrl}/solucoes/${solution.slug}`,
      lastModified: new Date(),
    })),
    ...useCases.map((useCase) => ({
      url: `${baseUrl}/casos-de-uso/${useCase.slug}`,
      lastModified: new Date(),
    })),
    ...segments.map((segment) => ({
      url: `${baseUrl}/casos-de-uso/segmentos/${segment.slug}`,
      lastModified: new Date(),
    })),
  ];
}
