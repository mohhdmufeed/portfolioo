import { hostedUrl, navLinks, profile } from "@/constants";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}#person`,
  name: profile.name,
  alternateName: "mohhdmufeed",
  jobTitle: "AI/ML & Full Stack Developer",
  headline: "AI/ML & Modern Web Technologies Specialist",
  description: "Artificial Intelligence & Machine Learning student passionate about building AI-powered applications, machine learning models, and full-stack web applications.",
  image: `${hostedUrl}/assets/profile-image.jpg`,
  url: hostedUrl,
  nationality: "Indian",
  sameAs: [
    profile.gitHub,
    profile.linkedin,
    profile.x,
    profile.instagram
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shiroor",
    addressRegion: "Karnataka",
    addressCountry: "IN"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${hostedUrl}#website`,
  url: hostedUrl,
  name: `${profile.name} | Portfolio`,
  description: "Portfolio showcasing full stack development expertise across modern web technologies.",
  author: { "@id": `${hostedUrl}#person` },
  publisher: { "@id": `${hostedUrl}#person` },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString()
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": navLinks.map(el => el.label),
  "url": navLinks.map(el => `${hostedUrl}/${el.href}`)
};