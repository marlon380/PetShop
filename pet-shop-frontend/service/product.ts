import { TProduct } from "@/types/product";
import { api } from "./api";

export const ProductService = {
  getAll: async () => await api.get<Promise<TProduct[]>>("/produtos"),
  getByName: async (name: string) =>
    await api.get<Promise<TProduct[]>>(`/produtos/${name}`),
};
