import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import ScreensInDevelopment from "./screen-development";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "None E-commerce",
  description: "Melhores produtos eletrônicos",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="pt-BR" className="dark">
      <body className={poppins.className}>
        <Header />
        <ScreensInDevelopment>{children}</ScreensInDevelopment>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
