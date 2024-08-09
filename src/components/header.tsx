import Image from "next/image";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <header className="p-5 flex justify-between">
      <div className="relative w-[35px] h-[35px]">
        <Image src="/logo.svg" alt="Logo" fill className="text-white" />
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
