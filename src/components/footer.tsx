import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-4 px-5 py-6 bg-[#1A1B1F] w-full flex justify-between">
      <Image src="/logo.svg" alt="logo" width={20} height={20} />

      <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
