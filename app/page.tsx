"use client";

import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { CartItem } from "@/types/products";
import { Product } from "@/types/products";

import { useState } from "react";

import { LuUtensilsCrossed } from "react-icons/lu";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div className="bg-gray-100 h-screen w-full relative">
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {cart.length === 0 ? (
        <p className="mt-10 text-gray-500">Cart is empty</p>
      ) : (
        <div className="w-full mt-10 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <h2 className="font-semibold">{item.item}</h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-7 h-7 bg-gray-100 rounded-md"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-7 h-7 bg-gray-100 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex lg:flex-row flex-col w-full lg:px-30 md:px-20 sm:px-10 px-5 p-10 gap-10">
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          className={
            "lg:flex lg:flex-col hidden bg-white shadow-sm rounded-md justify-center items-center lg:w-1/4 sticky h-[250px]"
          }
        />
        <ProductGrid
          className={"lg:w-3/4 w-full"}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
