import { useState } from "react";

import { Link } from "react-router-dom";
import { menu } from "framer-motion/client";
import { 
  HandHeart, UserCheck, UsersRound, Calendar, DollarSign, Newspaper, 
  Home, Users, Settings, Star, FileText, CreditCard, CheckCircle, Send, 
  UserPlus, Clock, MessageCircle, Folder,PlusCircle,ChevronRight,ChevronDown, Briefcase, ClipboardList, 
  FilePlus, FileCheck, Heart, Activity, Gift, Flag, TrendingUp, FileBarChart, 
  FileSearch, Wallet, FileTextIcon, Database ,ChevronRightCircle,GanttChart,Menu
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  // const addNewFavorite = () => {
  //   const newItem = { name: "آیتم جدید", path: "#" };
  //   setFavorites([...favorites, newItem]);
  // };

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.path === item.path)
        ? prev.filter((fav) => fav.path !== item.path)
        : [...prev, { icon: item.icon, path: item.path }] // ذخیره فقط `icon` و `path`
    );
  };

  const menuItems = [
    { name: "داشبورد", icon: <Home size={24} />, path: "/" },
    {
      name: "مدیریت کمک‌های مالی",
      icon: <HandHeart size={24} />,
      subMenu: [
        { name: "ثبت کمک‌های مالی (نقدی و غیرنقدی)", path: "/donations", icon: <CreditCard size={24} /> },
        { name: "نمایش لیست پرداخت‌ها", path: "/donations/list", icon: <FileText size={24} /> },
        { name: "صدور و ارسال رسید کمک مالی", path: "/donations/receipt", icon: <Send size={24} /> },
        { name: "پیگیری وضعیت کمک‌ها", path: "/donations/track", icon: <CheckCircle size={24} /> },
        { name: "اتصال به درگاه پرداخت آنلاین", path: "/donations/payment", icon: <CreditCard size={24} /> },
      ],
    },
    {
      name: "مدیریت حامیان و خیرین",
      icon: <UserCheck size={24} />,
      subMenu: [
        { name: "ثبت اطلاعات حامیان", path: "/supporters/register", icon: <UserPlus size={24} /> },
        { name: "نمایش تاریخچه کمک‌های هر حامی", path: "/supporters/history", icon: <Clock size={24} /> },
        { name: "ارسال پیام تشکر و گزارش عملکرد", path: "/supporters/thanks", icon: <MessageCircle size={24} /> },
        { name: "مدیریت دسته‌بندی خیرین", path: "/supporters/categories", icon: <Folder size={24} /> },
      ],
    },
    {
      name: "مدیریت افراد تحت حمایت",
      icon: <Users size={24} />,
      subMenu: [
        { name: "ثبت مشخصات افراد تحت حمایت", path: "/beneficiaries/register", icon: <UserCheck size={24} /> },
        { name: "مشاهده وضعیت کمک‌های دریافتی", path: "/beneficiaries/status", icon: <Heart size={24} /> },
        { name: "دسته‌بندی افراد بر اساس نیازها", path: "/beneficiaries/categories", icon: <Users size={24} /> },
        { name: "مدیریت اسناد و مدارک", path: "/beneficiaries/documents", icon: <FileText size={24} /> },
      ],
    },
    {
      name: "مدیریت داوطلبان و کارکنان",
      icon: <UsersRound size={24} />,
      subMenu: [
        { name: "ثبت و نمایش اطلاعات داوطلبان", path: "/volunteers", icon: <UserCheck size={24} /> },
        { name: "تعیین نقش‌ها و وظایف", path: "/volunteers/roles", icon: <Briefcase size={24} /> },
        { name: "پیگیری فعالیت‌های داوطلبان", path: "/volunteers/reports", icon: <Activity size={24} /> },
        { name: "ارسال پیام و هماهنگی برای رویدادها", path: "/volunteers/messages", icon: <MessageCircle size={24} /> },
      ],
    },
    {
      name: "مدیریت رویدادها و کمپین‌ها",
      icon: <Calendar size={24} />,
      subMenu: [
        { name: "ایجاد و مدیریت رویدادهای خیریه", path: "/events", icon: <Gift size={24} /> },
        { name: "ثبت نام داوطلبان برای رویدادها", path: "/events/registration", icon: <UserPlus size={24} /> },
        { name: "پیگیری کمک‌های کمپین‌ها", path: "/events/campaigns", icon: <Flag size={24} /> },
        { name: "گزارش وضعیت کمپین‌ها", path: "/events/reports", icon: <TrendingUp size={24} /> },
      ],
    },
    {
      name: "حسابداری و مدیریت مالی",
      icon: <DollarSign size={24} />,
      subMenu: [
        { name: "نمایش ورودی‌ها و خروجی‌های مالی", path: "/finance/overview", icon: <Wallet size={24} /> },
        { name: "دسته‌بندی هزینه‌ها و درآمدها", path: "/finance/categories", icon: <Database size={24} /> },
        { name: "ثبت هزینه‌های سازمان", path: "/finance/expenses", icon: <FileTextIcon size={24} /> },
        { name: "تهیه گزارش مالی دوره‌ای", path: "/finance/reports", icon: <FileBarChart size={24} /> },
        { name: "اتصال به نرم‌افزارهای حسابداری", path: "/finance/software", icon: <FileSearch size={24} /> },
      ],
    },
    {
      name: "مدیریت محتوا و اطلاع‌رسانی",
      icon: <Newspaper size={24} />,
      subMenu: [
        { name: "ارسال اخبار و اطلاعیه‌ها", path: "/content/news", icon: <FileText size={24} /> },
        { name: "مدیریت مقالات و گزارش‌ها", path: "/content/articles", icon: <ClipboardList size={24} /> },
        { name: "ایجاد و انتشار گالری تصاویر و ویدئوها", path: "/content/gallery", icon: <FilePlus size={24} /> },
      ],
    },
    {
      name: "تنظیمات و مدیریت کاربران",
      icon: <Settings size={24} />,
      subMenu: [
        { name: "مدیریت نقش‌ها و سطح دسترسی کاربران", path: "/settings/roles", icon: <Users size={24} /> },
        { name: "ایجاد و حذف اکانت‌های مدیریتی", path: "/settings/accounts", icon: <UserCheck size={24} /> },
        { name: "تغییر تنظیمات سایت", path: "/settings/site", icon: <Settings size={24} /> },
        { name: "گزارش فعالیت کاربران", path: "/settings/reports", icon: <FileCheck size={24} /> },
      ],
    },
  ];

  return (
    <div className="flex sidebar">
      {/* بخش علاقه‌مندی‌ها */}
      <div className="h-screen w-16 p-2 flex flex-col items-center bg-gray">
        <PlusCircle className="cursor-pointer mb-4" size={24} />
        {favorites.map((fav, index) => (
          <Link key={index} to={fav.path} className="mb-4 flex flex-col items-center">
            {fav.icon}
            <span className="text-xs">{fav.name}</span>
          </Link>
        ))}
      </div>

      {/* منوی اصلی */}
      <div className={`bg-gray-100 text-gray-600 h-screen p-5 pb-5 transition-all duration-300 flex-col ${isOpen ? "w-64" : "w-16"}`}>
        <div className="flex items-center justify-between">
          {isOpen && <h3 className="">موئسسه خیریه طه</h3>}

          <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? <ChevronRight size={24} />  : <Grip size={24} />}
          </span>          
        </div>
        
        {isOpen && <hr className="mt-6 mb-2 border-t w-full border-gray-200" />}

        <ul className="mt-4 space-y-2 flex-1">
          {menuItems.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              <div className="flex items-center justify-between hover:bg-gray-300 rounded p-1" onClick={() => menu.subMenu && toggleSubMenu(menu.name)}>
                <div className="flex items-center">
                  <span>{menu.icon}</span>
                  {isOpen && <span className="pr-2 ml-3 text-sm">{menu.name}</span>}
                </div>
                {menu.subMenu && isOpen && (
                  <span>
                    {openSubMenu === menu.name ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                )}
              </div>
              {menu.subMenu && openSubMenu === menu.name && isOpen && (
                <ul className="pl-4 space-y-2">
                  {menu.subMenu.map((sub, subIndex) => (
                    <li key={subIndex} className="cursor-pointer flex justify-between items-center hover:bg-gray-100 text-sm rounded p-2">
                      <Link to={sub.path} className="flex items-center">
                        {/* {sub.icon} */}
                        <span className="ml-2">{sub.name}</span>
                      </Link>
                      <Star 
                        size={16} 
                        className={`cursor-pointer ${favorites.some(fav => fav.name === sub.name) ? "text-yellow-500" : "text-gray-400"}`}
                        onClick={() => toggleFavorite(sub)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
