import { Navbar, Footer } from "./components";

import "./globals.css";
import { Inter } from "next/font/google";
import Container from "./components/common/Container";
import Background from "./components/common/background/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Portfolio v2",
  description: "웹 포트폴리오 Next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </Background>
      </body>
    </html>
  );
}
