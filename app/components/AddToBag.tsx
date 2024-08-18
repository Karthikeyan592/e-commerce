"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, cartDetails, setItemQuantity, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  const handleAddToCart = () => {
    const existingItem = cartDetails && typeof cartDetails[product.price_id] === 'object'
    ? cartDetails[product.price_id]
    : null; 

    if (existingItem) {
      setItemQuantity(product.price_id, existingItem.quantity + 1);
    } else {
      addItem(product);
    }
    handleCartClick(); 
  };




  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}