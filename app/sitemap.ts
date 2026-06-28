import type { MetadataRoute } from "next";
import { solutions, useCases } from "@/data/site";

const baseUrl = "https://rua1.ai";

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
  ];
}
