import { useState } from "react";
import { Search, Filter, Bell, User } from "lucide-react";
import { toAbsolouteUrl } from "../helpers/absolouteUrl";

const Navbar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // مدیریت نمایش باکس فیلتر

  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-sm relative">
      {/* جستجو و فیلتر */}
      <div className="relative flex items-center w-1/2">
        <Search className="absolute left-2 top-2 text-gray-500" />
        <input
          type="text"
          placeholder="جستجو ..."
          className="bg-gray-100 p-2 pl-8 pr-14 rounded-md w-full"
        />
        {/* آیکن فیلتر */}
        <div
          className="absolute left-12 top-3 cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={20} className="text-gray-500" />
        </div>

        {/* باکس فیلتر */}
        {isFilterOpen && (
          <div className="absolute left-0 top-12 bg-white shadow-lg rounded-md p-4 w-64 border border-solid border-gray-200">
            <h3 className="text-sm font-semibold mb-2">فیلترها</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span>فیلتر اول</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span>فیلتر دوم</span>
            </label>
            <button
              className="mt-3 w-full bg-blue-500 text-gray-600 p-2 rounded-md"
              onClick={() => setIsFilterOpen(false)}
            >
              اعمال فیلتر
            </button>
          </div>
        )}
      </div>

      {/* آواتار کاربری و نوتیفیکیشن */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell size={25} className="text-gray-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <User size={20} className="text-gray-500" />
          <img
            src={toAbsolouteUrl("/charity-taha-avatar.png")}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
