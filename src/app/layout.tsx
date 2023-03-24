import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

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
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
