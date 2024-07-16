"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ListIcon from "@mui/icons-material/List";
import { Input } from "@/components/ui/input";
import SearchIcon from "@mui/icons-material/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { ProductService } from "@/service/product";
import { formSchema } from "./formSchema";

function Filter({ onSubmit }: { onSubmit: (values: any) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
    },
  });

  const selectItems = [
    {
      id: 1,
      label: "Ração",
      value: "racao",
    },
    {
      id: 2,
      label: "Acessórios",
      value: "acessorios",
    },
    {
      id: 3,
      label: "Brinquedos",
      value: "briquedos",
    },
    {
      id: 4,
      label: "Medicamentos",
      value: "medicamentos",
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pt-8 w-full flex flex-row flex-wrap items-end justify-center gap-2"
      >
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem className="w-4/5 md:w-2/4">
              <FormControl>
                <Input placeholder="Procure pelo produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ListIcon />
                {/* <span>Categorias</span> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {selectItems.map((item) => (
                  <DropdownMenuItem key={item.id}>
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        />
        <Button
          type="submit"
          className="bg-transparent text-black hover:bg-transparent w-8"
        >
          <SearchIcon />
        </Button>
      </form>
    </Form>
  );
}

export default Filter;
