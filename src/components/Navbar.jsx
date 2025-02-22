import { Search, Filter, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-sm">
      {/* جستجو */}
      <div className="relative ">
        <input
          type="text"
          placeholder="جستحو ..."
          className="bg-gray-100 p-2 pl-8 rounded-md"
        />
        <Search className="absolute left-2 top-2 text-gray-500"  />
      </div>

      {/* فیلتر و افزودن */}
      <div className="flex items-center space-x-3">
        
          <Filter size={16} className="mr-1" /> 
       
          <Plus size={16} className="mr-1" /> 
      </div>
    </div>
  );
};

export default Navbar;
