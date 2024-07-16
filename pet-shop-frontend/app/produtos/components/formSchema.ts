import { z } from "zod";

const categoriesValues = [
  "racao",
  "acessorios",
  "brinquedos",
  "medicamentos",
] as const;

export const formSchema = z.object({
  product: z.string(),
  categories: z.enum(categoriesValues),
});
