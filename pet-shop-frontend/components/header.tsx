"use client";
import Image from "next/image";
import logo from "@/assets/images/pet-shop-logo-300x300.png";
import Link from "next/link";
import useShopProductStore from "@/store/shopProductStore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "./ui/badge";

function Header() {
  const productsToShop = useShopProductStore((state) => state.products);
  const items = [
    {
      label: "Início",
      link: "/",
      key: 1,
    },
    {
      label: "Produtos",
      link: "/produtos",
      key: 2,
    },
    {
      label: "Contato",
      link: "/#contact-us",
      key: 3,
    },
  ];

  console.log("data", productsToShop);

  return (
    <section className="bg-customYellow flex justify-between items-center p-4 flex-wrap fixed w-full z-10">
      <Image src={logo} alt="logo.png" height={80} width={80} />
      <nav>
        <ul className="flex flex-row gap-2">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.link}
                className="text-2xl hover:text-customBrown"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="flex flex-row items-center gap-1">
            <Link href="/carrinho">
              <ShoppingCartIcon className="w-8 h-8" />
            </Link>
            <Badge>{productsToShop?.length}</Badge>
          </div>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
