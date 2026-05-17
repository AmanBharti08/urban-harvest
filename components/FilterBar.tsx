type props = {
  className?: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const category = ["All", "Fruits", "Vegetables", "Herbs", "Dairy"];

export default function FilterBar({
  className,
  selectedCategory,
  setSelectedCategory,
}: props) {
  return (
    <div className={className}>
      <h1 className="p-2 px-4 text-md  border-b">Filter</h1>
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
              <label htmlFor={item} className="cursor-pointer">
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
