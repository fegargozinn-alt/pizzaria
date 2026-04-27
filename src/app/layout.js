import { Creepster, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const creepster = Creepster({
  variable: "--font-creepster",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desgraça Cósmica Pizzaria",
  description: "Site oficial da Desgraça Cósmica Pizzaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${creepster.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
