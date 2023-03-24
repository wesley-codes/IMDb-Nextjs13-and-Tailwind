import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";
import Searchbar from "@/components/Searchbar";

export const metadata = {
  title: "IMDB",
  description: "This is IMDB clone website",
  keywords: "Next.js, React, JavaScript",
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
          <Navbar />
          <Searchbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
