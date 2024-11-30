import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="relative w-[35px] h-[35px]">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" fill className="text-white" />
      </Link>
    </div>
  );
}

export default Logo;