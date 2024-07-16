"use client";
import { Button } from "@/components/ui/button";
import useShopProductStore from "@/store/shopProductStore";
import Link from "next/link";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { Card } from "@/components/ui/card";

function ProductShop() {
  const { addProduct, products, removeProduct } = useShopProductStore();
  return (
    <section className="content-page flex justify-center">
      {products.length ? (
        <div className="centralize flex-row flex-wrap gap-4 w-full">
          {products.map((product) => (
            <Card
              key={product._id}
              className="flex flex-col justify-center items-center bg-customDarkBrown p-4 transition-all"
            >
              <Image
                src={product.image}
                alt="imagem.png"
                width={180}
                height={180}
              />
              <p className="text-customYellow text-4xl">{product.name}</p>
              <p className="text-customYellow text-2xl">{product.price}</p>
              <div className="flex flex-row gap-1 items-center py-4">
                <Button className="bg-customYellow text-xl text-black">
                  Finalizar compra
                </Button>
                <Button
                  className="bg-customYellow text-[#C70000]"
                  onClick={() => removeProduct(product)}
                >
                  <DeleteIcon fontSize="large" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <h1 className="section-title">Carrinho vazio</h1>
          <SentimentDissatisfiedIcon className="w-32 h-16" />
          <Link href="/produtos" className="py-4">
            <Button className="bg-customYellow text-black text-xl">
              Continuar comprando
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default ProductShop;
