import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>Parece que este produto não existe.</p>
      <Link href="/">Voltar para pagina inicial</Link>
    </div>
  );
};

export default NotFound;
