import "./globals.css";
import Header from "@/app/components/Header";

import { Providers } from "@/app/providers/provider";

export const metadata = {
  title: "Cervecerías Valdivianas",
  description: "Puntos de cervecerías en Valdivia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

