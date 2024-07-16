import type { Metadata } from "next";
import { Road_Rage } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Provider } from "@/components/provider";

const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pet Shop",
  description: "Encontre os melhores produtos para seu pet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roadRage.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
