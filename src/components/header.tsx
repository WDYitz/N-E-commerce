import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import Navbar from "./navbar";
import { getCategories } from "@/actions/category/getCategories.server";
import Logo from "./logo";

const Header = async () => {
  const { categories } = await getCategories();
  return (
    <header className="p-5 flex justify-between sm:px-8 md:px-12 lg:px-28 2xl:px-52">
      <Logo />
      <div className="flex gap-2 lg:flex-row-reverse lg:justify-between">
        <Cart />
        <Navbar categories={categories} />
      </div>
    </header>
  );
};

export default Header;
