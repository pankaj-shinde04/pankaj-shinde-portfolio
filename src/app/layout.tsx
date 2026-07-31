import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Pankaj Shinde | Full Stack Developer | React | Node.js | Next.js",
  description: "Pankaj Shinde - Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies. Building scalable, user-centric applications with expertise in REST APIs, job scheduling, and performance optimization.",
  keywords: [
    "Pankaj Shinde",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Native",
    "API Development",
    "REST API",
    "Web Application",
    "Software Development"
  ],
  authors: [{ name: "Pankaj Shinde" }],
  creator: "Pankaj Shinde",
  publisher: "Pankaj Shinde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pankaj-shinde.vercel.app",
    title: "Pankaj Shinde | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies. Building scalable, user-centric applications.",
    siteName: "Pankaj Shinde Portfolio",
    images: [
      {
        url: "/images/profile1.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Shinde - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Shinde | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies.",
    images: ["/images/profile1.png"],
    creator: "@pankajshinde04",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://pankaj-shinde.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pankaj Shinde",
    "url": "https://pankaj-shinde.vercel.app",
    "image": "https://pankaj-shinde.vercel.app/images/profile1.png",
    "sameAs": [
      "https://github.com/pankaj-shinde04",
      "https://linkedin.com/in/pankaj-shinde",
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies. Building scalable, user-centric applications with expertise in REST APIs, job scheduling, and performance optimization.",
    "knowsAbout": [
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "REST API",
      "Web Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Modern College, Pune"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground transition-colors duration-300">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="782ee80b-5dbb-4f60-b9b9-175e776bf731"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
