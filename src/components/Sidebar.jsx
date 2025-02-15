import { Home, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">پنل مدیریت</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="flex items-center gap-2"><Home /> داشبورد</Link></li>
        <li><Link to="/users" className="flex items-center gap-2"><Users /> کاربران</Link></li>
        <li><Link to="/settings" className="flex items-center gap-2"><Settings /> تنظیمات</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
