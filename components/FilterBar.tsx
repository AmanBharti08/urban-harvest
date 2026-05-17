type props = {
  className?: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  openFilters: boolean;
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

const category = ["All", "Fruits", "Vegetables", "Herbs", "Dairy"];

export default function FilterBar({
  className,
  selectedCategory,
  setSelectedCategory,
  openFilters,
  setOpenFilters,
}: props) {
  return (
    <div className={className}>
      <h1 className="p-2 px-4 text-2xl font-semibold">Filter</h1>
      <div className="items-start w-full">
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-full p-2 px-4 text-sm  flex items-center gap-2"
            >
              <button
                onClick={() => setSelectedCategory(item)}
                className={`w-full text-left p-2 px-4 rounded-md ${
                  selectedCategory === item
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div
        className="text-black text-sm p-2 px-4 flex lg:hidden"
        onClick={() => setOpenFilters(!openFilters)}
      >
        <p className="bg-green-800 p-1 px-2 text-[12px] rounded-2xl text-green-100 font-bold ">
          Show Result
        </p>
      </div>
    </div>
  );
}
