import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NebulaOSINT - Professional Intelligence Solutions",
  description: "Uncover valuable insights with our comprehensive OSINT services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header and Footer will be client components */}
        <div suppressHydrationWarning>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
