import { useState } from "react";
import {
  HandHeart, UserCheck, UsersRound, Calendar, DollarSign, Newspaper,
  Menu,Star, GanttChart, Grip,PlusCircle, ChevronRightCircle, ChevronRight, ChevronDown, X, Home, Users, Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { menu } from "framer-motion/client";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const addNewFavorite = () => {
    const newItem = { name: "آیتم جدید", path: "#" };
    setFavorites([...favorites, newItem]);
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.includes(item) ? prev.filter((fav) => fav !== item) : [...prev, item]
    );
  };

  // const favItems = [
  //   { name: "آیتم جدید", path: "#" },
  //   { name: "نمایش تاریخچه کمک‌های هر حامی", path: "#",icon:<HandHeart size={24}/> },
  //   { name: "صدور و ارسال رسید کمک مالی", path: "#",icon:<UserCheck size={24}/> },
  //   { name: "نمایش لیست پرداخت‌ها", path: "#",icon:<Users size={24}/> }
  // ];

  // var favItem1={ name: "نمایش تاریخچه کمک‌های هر حامی", path: "#",icon:<HandHeart size={24}/> };
  // setFavorites([...favorites, favItem1]);


  const menuItems = [
    { name: "داشبورد", icon: <Home size={24} />, path: "/" },
    {
      name: "مدیریت کمک‌های مالی",
      icon: <HandHeart size={24} />,
      subMenu: [
        { name: "ثبت کمک‌های مالی (نقدی و غیرنقدی)", path: "/donations" },
        { name: "نمایش لیست پرداخت‌ها", path: "/donations/list" },
        { name: "صدور و ارسال رسید کمک مالی", path: "/donations/receipt" },
        { name: "پیگیری وضعیت کمک‌ها", path: "/donations/track" },
        { name: "اتصال به درگاه پرداخت آنلاین", path: "/donations/payment" },
      ],
    },
    {
      name: "مدیریت حامیان و خیرین",
      icon: <UserCheck size={24} />,
      subMenu: [
        { name: "ثبت اطلاعات حامیان", path: "/supporters/register" },
        { name: "نمایش تاریخچه کمک‌های هر حامی", path: "/supporters/history" },
        { name: "ارسال پیام تشکر و گزارش عملکرد", path: "/supporters/thanks" },
        { name: "مدیریت دسته‌بندی خیرین", path: "/supporters/categories" },
      ],
    },
    {
      name: "مدیریت افراد تحت حمایت",
      icon: <Users size={24} />,
      subMenu: [
        { name: "ثبت مشخصات افراد تحت حمایت", path: "/beneficiaries/register" },
        { name: "مشاهده وضعیت کمک‌های دریافتی", path: "/beneficiaries/status" },
        { name: "دسته‌بندی افراد بر اساس نیازها", path: "/beneficiaries/categories" },
        { name: "مدیریت اسناد و مدارک", path: "/beneficiaries/documents" },
      ],
    },
    {
      name: "مدیریت داوطلبان و کارکنان",
      icon: <UsersRound size={24} />,
      subMenu: [
        { name: "ثبت و نمایش اطلاعات داوطلبان", path: "/volunteers" },
        { name: "تعیین نقش‌ها و وظایف", path: "/volunteers/roles" },
        { name: "پیگیری فعالیت‌های داوطلبان", path: "/volunteers/reports" },
        { name: "ارسال پیام و هماهنگی برای رویدادها", path: "/volunteers/messages" },
      ],
    },
    {
      name: "مدیریت رویدادها و کمپین‌ها",
      icon: <Calendar size={24} />,
      subMenu: [
        { name: "ایجاد و مدیریت رویدادهای خیریه", path: "/events" },
        { name: "ثبت نام داوطلبان برای رویدادها", path: "/events/registration" },
        { name: "پیگیری کمک‌های کمپین‌ها", path: "/events/campaigns" },
        { name: "گزارش وضعیت کمپین‌ها", path: "/events/reports" },
      ],
    },
    {
      name: "حسابداری و مدیریت مالی",
      icon: <DollarSign size={24} />,
      subMenu: [
        { name: "نمایش ورودی‌ها و خروجی‌های مالی", path: "/finance/overview" },
        { name: "دسته‌بندی هزینه‌ها و درآمدها", path: "/finance/categories" },
        { name: "ثبت هزینه‌های سازمان", path: "/finance/expenses" },
        { name: "تهیه گزارش مالی دوره‌ای", path: "/finance/reports" },
        { name: "اتصال به نرم‌افزارهای حسابداری", path: "/finance/software" },
      ],
    },
    {
      name: "مدیریت محتوا و اطلاع‌رسانی",
      icon: <Newspaper size={24} />,
      subMenu: [
        { name: "ارسال اخبار و اطلاعیه‌ها", path: "/content/news" },
        { name: "مدیریت مقالات و گزارش‌ها", path: "/content/articles" },
        { name: "ایجاد و انتشار گالری تصاویر و ویدئوها", path: "/content/gallery" },
      ],
    },
    {
      name: "تنظیمات و مدیریت کاربران",
      icon: <Settings size={24} />,
      subMenu: [
        { name: "مدیریت نقش‌ها و سطح دسترسی کاربران", path: "/settings/roles" },
        { name: "ایجاد و حذف اکانت‌های مدیریتی", path: "/settings/accounts" },
        { name: "تغییر تنظیمات سایت", path: "/settings/site" },
        { name: "گزارش فعالیت کاربران", path: "/settings/reports" },
      ],
    },
  ];

  return (
    <div className="flex sidebar">
      <div className="h-screen w-16 p-2 flex flex-col items-center bg-gray-100">
        <PlusCircle className="cursor-pointer mb-4" size={24} onClick={addNewFavorite} />
        {favorites.map((fav, index) => (
          <Link key={index} to={fav.path} className="mb-4">
            <Star className="text-yellow-500" size={24} />
          </Link>
        ))}
      </div>


      <div
        className={`text-gray-600 h-screen p-5 transition-all duration-300 flex flex-col ${isOpen ? "w-64" : "w-16"
          }`}
      >
        <div className="flex items-center justify-between">
          {isOpen && <h2 className="text-xl font-bold">پنل مدیریت</h2>}
          <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? (
              <ChevronRightCircle className="text-gray-400" size={24} />
            ) : (
              <Grip size={24} />
            )}
          </span>
        </div>

        <ul className="mt-4 space-y-2 flex-1">
          {menuItems.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              <div
                className={`flex items-center justify-between hover:bg-gray-200 rounded p-1`}
                onClick={() => menu.subMenu && toggleSubMenu(menu.name)}
              >
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
                <ul className="pl-1 space-y-2">
                  {menu.subMenu.map((sub, subIndex) => (
                    <li key={subIndex} className="cursor-pointer hover:bg-gray-100 text-sm rounded p-3">
                      <Link to={sub.path} size={16}>{sub.name}</Link>
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
