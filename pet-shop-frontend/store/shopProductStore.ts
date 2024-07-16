import { TProduct } from "@/types/product";
import { create } from "zustand";

type useShopProductStoreProps = {
  products: TProduct[];
  addProduct: (value: TProduct) => void;
  removeProduct: (value: TProduct) => void;
};

const useShopProductStore = create<useShopProductStoreProps>()((set) => ({
  products: [] as TProduct[],
  addProduct: (value: TProduct) =>
    set((state) => {
      const productExists = state.products.some(
        (existingItem) => existingItem._id === value._id
      );
      return productExists
        ? state
        : {
            products: [...state.products, value],
          };
    }),
  removeProduct: (value: TProduct) =>
    set((state) => ({
      products: state.products.filter((product) => product._id !== value._id),
    })),
}));

export default useShopProductStore;
