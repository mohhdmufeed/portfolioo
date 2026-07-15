import PdfViewer from '@/components/ui/pdfViewer';
import { canonicalUrl } from '@/constants';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata:Metadata = {
  title: "Resume",
  description: "View my professional resume detailing my experience as an AI/ML & Full Stack Developer, technical skills, projects, and achievements.",
  openGraph: {
    title: "Resume | Mohammed Mufeed",
    description: "Professional resume of Mohammed Mufeed - AI/ML & Full Stack Developer",
    images: [
      {
        url: "/screenshots/resume-og.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Mufeed's Resume",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Mohammed Mufeed",
    description: "Professional resume of Mohammed Mufeed - AI/ML & Full Stack Developer",
    images: ["/screenshots/resume-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/resume`,
  },
};

const page = () => {
  return (
    <PdfViewer />
  );
};

export default memo(page);