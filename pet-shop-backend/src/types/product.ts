import { Document } from "mongoose";

export type TProduct = Document & {
  name: string;
  price: number;
  image: string;
};
