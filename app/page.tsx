"use client";

import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { CartItem } from "@/types/products";
import { Product } from "@/types/products";
import { calculateSubtotal, calculateTotalItems } from "@/utils/cart";
import { DELIVERY_FEE } from "@/constants";

import { useState } from "react";

import { LuUtensilsCrossed } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFilters, setOpenFilters] = useState(false);

  const subtotal = calculateSubtotal(cart);

  const total = subtotal + DELIVERY_FEE;

  const totalItems = calculateTotalItems(cart);

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
      <Header
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        totalItems={totalItems}
      />
      {cartOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setCartOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-screen z-50 lg:w-[30%] md:w-[50%] w-full bg-white p-6 flex flex-col shadow-xl">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-2xl font-bold">Cart</h1>

              <span
                className="text-xl cursor-pointer"
                onClick={() => setCartOpen(false)}
              >
                <LuUtensilsCrossed />
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex justify-center items-center text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto mt-5 flex flex-col gap-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-xl p-4 flex justify-between items-center"
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

                <div className="border-t pt-5 mt-5">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>

                    <span>
                      ₹
                      {cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Delivery</span>

                    <span>₹40</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>

                    <span>
                      ₹
                      {cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      ) + 40}
                    </span>
                  </div>

                  <button
                    disabled={cart.length === 0}
                    onClick={() => {
                      alert("Order placed successfully!");
                      setCart([]);
                      setCartOpen(false);
                    }}
                    className="bg-green-600 text-white w-full py-3 rounded-xl mt-5 hover:bg-green-700 disabled:bg-gray-300"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex lg:flex-row flex-col w-full lg:px-30 md:px-20 sm:px-10 px-5 p-10 gap-10">
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
          className={
            "lg:flex lg:flex-col hidden bg-white shadow-sm rounded-md justify-center items-center lg:w-1/4 sticky lg:h-[350px]"
          }
        />
        <button
          className="lg:hidden flex justify-center items-center w-20 gap-1 rounded-2xl border bg-white shadow-md p-1 border-green-800 text-green-800 "
          onClick={() => setOpenFilters(!openFilters)}
        >
          <CiFilter />
          <p>Filter</p>
        </button>
        {openFilters && (
          <div className="fixed inset-0 h-screen z-40">
            <FilterBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              openFilters={openFilters}
              setOpenFilters={setOpenFilters}
              className={"flex flex-col bg-white p-5 h-full z-50"}
            />
          </div>
        )}
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
