"use client";

import { ProductService } from "@/service/product";
import Filter from "./components/filter";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { formSchema } from "./components/formSchema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorHandler from "@/components/errorHandler";
import { useCallback, useState } from "react";
import { TProduct } from "@/types/product";
import useShopProductStore from "@/store/shopProductStore";

const getAll = async (filter: string) => {
  if (filter) {
    const product = await ProductService.getByName(filter);
    return product.data;
  }
  const products = await ProductService.getAll();
  return products.data;
};

export default function Products() {
  const addProduct = useShopProductStore((state) => state.addProduct);
  const [filter, setFilter] = useState("");
  const { data, isPending, error } = useQuery({
    queryKey: ["GetAllProducts", filter],
    queryFn: () => getAll(filter),
    staleTime: Infinity,
    retry: false,
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    const { product } = values;
    setFilter(product);
  }, []);

  return (
    <section className="content-page">
      <Filter onSubmit={onSubmit} />
      <div className="flex flex-wrap justify-center gap-16 pt-12 w-full">
        {isPending ? (
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <Skeleton className="h-6 w-4/5 md:w-7/12" />
            <Skeleton className="h-6 w-4/5 md:w-7/12" />
            <Skeleton className="h-6 w-4/5 md:w-7/12" />
            <Skeleton className="h-6 w-4/5 md:w-7/12" />
          </div>
        ) : error ? (
          ErrorHandler(error.message)
        ) : data?.length ? (
          data?.map((product) => {
            const url = `/produtos/comprar/${product._id}`;
            return (
              <div
                key={product._id}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={product.image}
                  alt="imagem.png"
                  width={180}
                  height={180}
                />
                <p className="text-customYellow text-4xl">{product.name}</p>
                <p className="text-customYellow text-2xl">{product.price}</p>
                <div className="py-4">
                  <Button
                    className="bg-customYellow text-xl text-black"
                    onClick={() => addProduct(product)}
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-customYellow text-4xl text-center">
            {filter
              ? "Produto não encontrado"
              : "Sem produtos disponivéis no momento"}
          </div>
        )}
      </div>
    </section>
  );
}
