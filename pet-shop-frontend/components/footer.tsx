import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "@/assets/images/pet-shop-logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-wrap justify-around py-4 px-12 bg-customDarkBrown"
    >
      <div>
        <h1 className="section-title text-6xl">PetShop</h1>
        <p className="text-customYellow text-xl">Tudo de melhor para seu pet</p>
        <p className="text-customYellow text-lg">Av. XXX, 00 - Centro</p>
        <nav className="py-8">
          <ul className="flex flex-row gap-2">
            <a
              href="https://www.facebook.com/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="text-[#1877F2] text-4xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="text-[#E1306C] text-4xl" />
            </a>
            <a
              href="https://web.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="text-[#25D366] text-4xl" />
            </a>
          </ul>
        </nav>
      </div>
      <Image src={logo} alt="logo.png" width={190} className="max-h-56" />
    </section>
  );
}

export default Footer;
