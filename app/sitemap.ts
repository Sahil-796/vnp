import { MetadataRoute } from "next";
import { servicesPageData } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visionandpath.com";
  const currentDate = new Date();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic service pages from main content
  const servicePages: MetadataRoute.Sitemap = servicesPageData.content.map(
    (service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Hidden service pages (still indexable, just not shown in main grid)
  const hiddenServicePages: MetadataRoute.Sitemap =
    servicesPageData.hiddenServices.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...mainPages, ...servicePages, ...hiddenServicePages];
}
