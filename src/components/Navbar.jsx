import { Search, Filter, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md">
      {/* جستجو */}
      <div className="relative ">
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-gray-100 p-2 pl-8 rounded-md"
        />
        <Search className="absolute left-2 top-2 text-gray-500"  />
      </div>

      {/* فیلتر و افزودن */}
      <div className="flex items-center space-x-3">
        <button className="bg-gray-200 p-2 rounded-md flex items-center">
          <Filter size={16} className="mr-1" /> Filter
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <Plus size={16} className="mr-1" /> Add New
        </button>
      </div>
    </div>
  );
};

export default Navbar;
