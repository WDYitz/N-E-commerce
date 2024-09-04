import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="px-5 flex items-center justify-center flex-col h-[800px] space-y-4">
      <FileWarning className="size-16 text-primary" />
      <p>Parece que essa categoria não existe.</p>
      <Button asChild>
        <Link href="/" className="text-primary text-sm font-semibold">
          Voltar para pagina inicial
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
