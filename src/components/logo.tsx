"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

const Logo = () => {
  const logoRef = useRef(null);

  return (
    <motion.div className="relative w-[35px] h-[35px]"
      initial={{ opacity: 0, transform: "translateX(-100px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ type: "spring", duration: 0.3, bounce: 1, damping: 8 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" fill className="text-white" ref={logoRef} />
      </Link>
    </motion.div>
  );
}

export default Logo;