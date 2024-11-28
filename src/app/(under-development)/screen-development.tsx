"use client";
import { FileWarningIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { useMedia } from "react-use";

const ScreensInDevelopment = ({ children }: PropsWithChildren) => {
  const isTabletOrHigher = useMedia("(min-width: 900px)", false);

  if (isTabletOrHigher) {
    return (
      <main className="flex flex-col max-h-full min-h-[900px] space-y-2 justify-center items-center">
        <span>
          <FileWarningIcon size={40} />
        </span>
        <p>Página em Desenvolvimento.</p>
        <p className="text-md ">404</p>
      </main>
    );
  }

  return <>{children}</>;
};

export default ScreensInDevelopment;
