import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB",
  description: "This is IMDB clone website",
  keywords: "Next.js, React, JavaScript",
  author: "wesley",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <body>{children}</body>
    </div>
  );
}
