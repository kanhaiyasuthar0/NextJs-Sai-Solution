import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/generics/Navbar";
import Providers from "@/components/generics/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Solution",
  description:
    "Sai Solution is a premier construction and interior design company specializing in bespoke solutions tailored to each client's unique needs. Offering services from luxurious residential interiors to state-of-the-art commercial constructions, our website showcases an extensive portfolio designed to inspire and elevate the human experience. Discover our projects, services, and innovative design trends as we transform visions into reality.",
  openGraph: {
    type: "website",
    url: process.env.BASE_URL,
    title: "Sai Solution - Premier Construction and Interior Design",
    description:
      "Sai Solution specializes in bespoke construction and interior design solutions, tailored to each client's unique needs. Explore our portfolio to discover luxurious residential interiors, state-of-the-art commercial constructions, and innovative design trends.",
    siteName: "Sai Solution",
    images: [
      {
        url: `${process.env.BASE_URL}/placeholder-user.jpg`, // Update this URL with the path to your Open Graph image
        width: 1200, // Optional: specify image dimensions
        height: 630, // Optional: specify image dimensions
        alt: "Sai Solution - Transforming visions into reality", // Optional: provide an alt text for the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Head content like meta tags, title, and links to CSS */}</head>
      <body className={inter.className}>
        <Providers>
          <header>
            <Navbar />
          </header>
          {children}
          {/* Other body content */}
        </Providers>
      </body>
    </html>
  );
}
