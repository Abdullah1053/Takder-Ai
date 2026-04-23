import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Takder‑Ai | Your Knowledge, Searchable",
  description: "Turn your PDFs and notes into a searchable knowledge base using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
