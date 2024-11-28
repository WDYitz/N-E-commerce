import Footer from "@/components/footer";
import Header from "@/components/header";
import { CartProvider } from "@/contexts/cart.";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Neutral-commerce",
    template: "%s | Neutral-commerce",
  },
  description: "Melhores produtos da baixada, encontre produtos de qualidade com o melhor preço.",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${poppins.className}`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default Layout;
