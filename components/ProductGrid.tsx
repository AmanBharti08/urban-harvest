import { products } from "@/data/products";
import { CartItem, Product } from "@/types/products";

type props = {
  className?: string;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  selectedCategory: string;
};

export default function FilterBar({
  className,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  selectedCategory,
}: props) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredProducts.map((item, index) => {
          if (!item.inStock) {
            return (
              <div
                key={index}
                className="bg-gray-300 p-2 px-4 rounded-md w-full shadow-sm flex flex-col gap-5"
              >
                <h2 className="text-2xl font-bold text-green-800 mb-5">
                  {item.item}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-sm bg-red-100 text-red-800 p-1 px-2 flex justify-center  items-center rounded-2xl">
                    {item.category}
                  </p>
                  <p className="text-sm bg-green-100 text-green-800 p-1 px-2 flex justify-center  items-center w-12 rounded-2xl">
                    {" "}
                    {item.price}
                  </p>
                </div>

                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Out Of Stock
                </button>
              </div>
            );
          }

          const cartItem = cart.find((cartItem) => cartItem.id === item.id);

          return (
            <div
              key={index}
              className="bg-white p-2 px-4 rounded-md w-full shadow-sm flex flex-col gap-5 hover:scale-102"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-5">
                {item.item}
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-sm bg-red-100 text-red-800  p-1 px-2 flex justify-center  items-center rounded-2xl">
                  {item.category}
                </p>
                <p className="text-sm bg-green-100 text-green-800 p-1 px-2 flex justify-center  items-center w-12 rounded-2xl">
                  {" "}
                  {item.price}
                </p>
              </div>
              {cartItem ? (
                <div className="flex items-center justify-between bg-green-100 rounded-md p-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-white w-8 h-8 rounded-md"
                  >
                    -
                  </button>

                  <span>{cartItem.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-white w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
