import Providers from "@/components/generics/Providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // <body className={inter.className}>
    <Providers>
      {/* <header><Navbar /></header> */}
      {children}
      {/* Other body content */}
    </Providers>
    // </body>
  );
}
