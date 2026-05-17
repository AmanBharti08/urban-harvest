import { FaShoppingCart } from "react-icons/fa";

type props = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
};

export default function Header({ cartOpen, setCartOpen, totalItems }: props) {
  return (
    <div className="w-full h-16 flex justify-between items-center lg:px-30 md:px-20 sm:px-10 px-5 shadow-sm bg-white">
      <h1 className="text-green-700 text-2xl font-extrabold cursor-pointer">
        Urban Harvest
      </h1>
      <div className="relative flex items-center cursor-pointer w-9">
        <FaShoppingCart
          className="text-3xl"
          onClick={() => setCartOpen(!cartOpen)}
        />
        <span className="rounded-[100%] w-4 h-4 flex justify-center items-center p-1 text-[8px] font-bold top-0 right-0 text-white bg-green-700 absolute">
          {totalItems}
        </span>
      </div>
    </div>
  );
}
