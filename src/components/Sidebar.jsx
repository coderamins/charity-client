import { useState } from "react";
import { Menu, X, Home, Users, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* سایدبار */}
      <div
        className={`bg-gray-800 text-white h-screen p-5 transition-all duration-300 flex flex-col ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* هدر سایدبار */}
        <div className="flex items-center justify-between">
          {isOpen && <h2 className="text-xl font-bold">پنل مدیریت</h2>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:bg-gray-700 rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* منوی سایدبار */}
        <ul className="mt-4 space-y-2 flex-1">
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <Home size={24} />
            <span className={`ml-3 text-sm transition-all ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
              داشبورد
            </span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <Users size={24} />
            <span className={`ml-3 text-sm transition-all ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
              کاربران
            </span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <Settings size={24} />
            <span className={`ml-3 text-sm transition-all ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
              تنظیمات
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
