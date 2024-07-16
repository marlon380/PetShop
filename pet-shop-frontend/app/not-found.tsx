import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-customBrown w-full flex justify-center items-center flex-col">
      <h2 className="section-title">Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link href="/">Retornar ao iniício</Link>
    </div>
  );
}
