import { Metadata } from 'next';
import Certificates from '@/components/Certificates';
import { canonicalUrl, hostedUrl } from '@/constants';
import SchemaScripts from '@/components/SchemaScripts';

export const metadata: Metadata = {
  title: "Certifications",
  description: "View my professional certifications and training in AI/ML, deep learning, and software development.",
  openGraph: {
    title: "Certifications | Mohammed Mufeed",
    description: "Professional certifications and specialized training validation in AI, ML, and Full Stack development.",
    images: [
      {
        url: "/screenshots/certificates-og.png",
        width: 1200,
        height: 630,
        alt: "Certifications Portfolio",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Mohammed Mufeed",
    description: "Professional certifications and specialized training validation in AI, ML, and Full Stack development.",
    images: ["/screenshots/certificates-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/certificates`,
  },
};

const certificatesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${hostedUrl}/certificates#certificatespage`,
  url: `${hostedUrl}/certificates`,
  name: "Certifications Portfolio",
  description: "Collection of professional courses and certifications in AI, ML, and software development.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: hostedUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Certifications",
        item: `${hostedUrl}/certificates`
      }
    ]
  }
};

const page = () => {
  return (
    <>
      <SchemaScripts schemas={[certificatesSchema]} />
      <Certificates />
    </>
  );
};

export default page;
