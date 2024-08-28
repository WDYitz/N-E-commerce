import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <header className="p-5 flex justify-between">
      <div className="relative w-[35px] h-[35px]">
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" fill className="text-white" />
        </Link>
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
