import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocationSearchInput } from "./components/location-search-input";
import { WeatherProvider } from "./context/WeatherContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App made by Sami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WeatherProvider>
      <html lang="en">
        <body className={`${inter.className} bg-sky`}>
          <main className="flex min-h-screen justify-between md:p-24 md:flex-row flex-col">
            <LocationSearchInput />
            <div className="flex flex-col grow "> {children}</div>
          </main>
        </body>
      </html>
    </WeatherProvider>
  );
}
