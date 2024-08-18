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
    // Check if the item already exists in the cart
    const existingItem = cartDetails[product.price_id]; // Assuming price_id is unique for each product

    if (existingItem) {
      // If it exists, increase the quantity
      setItemQuantity(product.price_id, existingItem.quantity + 1);
    } else {
      // If it's a new item, add it with a quantity of 1
      addItem(product);
    }
    handleCartClick(); // Open the cart
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