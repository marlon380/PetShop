import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import dogHouse from "@/assets/images/casinha-de-cachorro-removebg-preview-1-300x300.png";
import dogFeed from "@/assets/images/racao-300x300.png";
import dogToy from "@/assets/images/bolinha.png";
import Link from "next/link";

function HomeCarousel() {
  const items = [
    {
      key: 1,
      src: dogHouse,
      alt: "casa-cachorro.png",
    },
    {
      key: 2,
      src: dogFeed,
      alt: "racao-cachorro.png",
    },
    {
      key: 3,
      src: dogToy,
      alt: "brinquedo-cachorro.png",
    },
  ];
  return (
    <section
      id="carousel"
      className="flex flex-col justify-center items-center pt-32"
    >
      <h1 className="section-title">Diversos Produtos Para Seu Pet</h1>
      <Carousel className="w-full max-w-48 sm:max-w-xs">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.key}>
              <div className="p-1">
                <Link href="/produtos">
                  <Image src={item.src} alt={item.alt} />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none text-[#fff]" />
        <CarouselNext className="border-none text-[#fff]" />
      </Carousel>
    </section>
  );
}

export default HomeCarousel;
