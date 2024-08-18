"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount=0, handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/" className="flex">
        {/* <img src="/next.svg"/> */}
        <Image
                  src="/next.svg"
                  alt=" image"
                  // className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={30}
                  height={30}
                />
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Fashion</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none" // Add relative for positioning
          >
            <div className="flex flex-col relative ">
              <ShoppingBag />
              {cartCount > 0 && ( // Show cart count only if greater than 0
                <span className="absolute left-3.5 bottom-2.5 rounded-full bg-violet-500 text-white text-center text-xs font-bold px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </div>
            
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
            
          </Button>
        </div>
      </div>
    </header>
  );
}