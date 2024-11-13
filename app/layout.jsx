import localFont from "next/font/local";
import "@/styles/globals.css"

import {ReactLenis} from "@/utils/lenis"

const raveo = localFont({
  src: "../styles/fonts/RaveoVF.woff2",
  variable: "--font-raveo",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export const metadata = {
  title: "Text-Blur",
  description: "A collection of Button Ideas",
  openGraph: {
    title: "Buttons",
    images: "/opengraph.png",
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className={`${raveo.variable} antialiased font-[family-name:var(--font-raveo)]`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
