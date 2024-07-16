import feedIcon from "@/assets/images/racao-para-animais-1.png";
import showerIcon from "@/assets/images/tomando-banho-1.png";
import toysIcon from "@/assets/images/brinquedo-pet-1.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
function ProductsPreview() {
  const items = [
    {
      key: 1,
      label: "Temos o melhor para a alimentação do seu pet!",
      src: feedIcon,
      alt: "alimentacao.png",
    },
    {
      key: 2,
      label: "Venha fazer banho e tosa no seu pet com os melhores!",
      src: showerIcon,
      alt: "banho.png",
    },
    {
      key: 3,
      label: "Além de diversos produtos para a felicidade do seu pet!",
      src: toysIcon,
      alt: "diversos.png",
    },
  ];
  return (
    <section
      id="products-preview"
      className="flex flex-col py-12 w-full justify-center items-center"
    >
      <h1 className="section-title text-center">
        O melhor em varieades e preço
      </h1>
      <div className="flex flex-wrap items-center justify-center w-2/3 gap-6 pt-8">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex flex-col justify-center items-center gap-2"
          >
            <Image src={item.src} alt={item.alt} width={120} height={120} />
            <p className="text-customYellow text-2xl text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <Link href="/produtos" className="py-8">
        <Button className="bg-customYellow text-[#000] text-2xl">
          Mostrar produtos
        </Button>
      </Link>
    </section>
  );
}

export default ProductsPreview;
