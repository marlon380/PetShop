import Contact from "@/components/contact";
import HomeCarousel from "@/components/homeCarousel";
import ProductsPreview from "@/components/productsPreview";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-customBrown">
      <Suspense fallback={<div>Error</div>}>
        <HomeCarousel />
        <ProductsPreview />
        <Contact />
      </Suspense>
    </main>
  );
}
