import { useState } from "react";
import { Search, Filter, Plus, Copy, Edit, Trash } from "lucide-react";

const Payments = () => {
  const [selected, setSelected] = useState([]);

  const payments = [
    { id: 1, name: "Ali Rezaei", amount: "$120", method: "Credit Card", date: "2024-02-10", status: "Completed" },
    { id: 2, name: "Sara Mohammadi", amount: "$50", method: "PayPal", date: "2024-02-09", status: "Pending" },
    { id: 3, name: "Mehdi Karimi", amount: "$75", method: "Bank Transfer", date: "2024-02-08", status: "Failed" },
    { id: 4, name: "Narges Ahmadi", amount: "$200", method: "Credit Card", date: "2024-02-07", status: "Completed" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* بالای صفحه - آمار و دکمه‌ها */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">لیست پرداخت‌ها</h2>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
          <Plus size={16} className="mr-2" /> افزودن پرداخت جدید
        </button>
      </div>

      {/* کارت‌های آمار */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">کل پرداخت‌ها</p>
          <h3 className="text-1xl font-bold">4.5 میلیارد تومان</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">مجموع درآمد</p>
          <h3 className="text-1xl font-bold">4 میلیارد تومان</h3>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">تعداد تراکنش‌ها</p>
          <h3 className="text-1xl font-bold">245</h3>
        </div>
      </div>

      {/* فیلتر و جستجو */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="جستجو در پرداخت‌ها..."
            className="w-full bg-white p-2 pl-10 rounded-lg border border-gray-300"
          />
        </div>
        <button className="flex items-center bg-gray-200 px-3 py-2 rounded-lg">
          <Filter size={16} className="mr-2" /> فیلتر
        </button>
      </div>

      {/* جدول پرداخت‌ها */}
      <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-100 text-gray-600 shadow-md">
              <th className="p-3 rounded-s-md "><input type="checkbox" /></th>
              <th className="p-3 text-right">نام پرداخت‌کننده</th>
              <th className="p-3 text-right">مبلغ</th>
              <th className="p-3 text-right">روش پرداخت</th>
              <th className="p-3 text-right">تاریخ</th>
              <th className="p-3 text-right">وضعیت</th>
              <th className="p-3 text-right rounded-e-md ">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t border-gray-100">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 text-right">{payment.name}</td>
                <td className="p-3 text-right">{payment.amount}</td>
                <td className="p-3 text-right">{payment.method}</td>
                <td className="p-3 text-right">{payment.date}</td>
                <td className="p-3 text-right">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm ${
                      payment.status === "Completed"
                        ? "bg-green-200 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button className="mx-1 text-blue-500"><Edit size={16} /></button>
                  <button className="mx-1 text-red-500"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* دکمه‌های عملیات گروهی */}
      <div className="flex justify-between items-center mt-4">
        <span>{selected.length} مورد انتخاب شده</span>
        <div>
          <button className="mx-1 bg-gray-200 px-3 py-2 rounded-lg"><Copy size={16} /></button>
          <button className="mx-1 bg-gray-200 px-3 py-2 rounded-lg"><Edit size={16} /></button>
          <button className="mx-1 bg-gray-200 px-3 py-2 rounded-lg"><Trash size={16} /></button>
        </div>
      </div>

      {/* صفحه‌بندی */}
      <div className="flex justify-center mt-6">
        <button className="mx-1 px-3 py-2 rounded-lg bg-gray-200">قبلی</button>
        <button className="mx-1 px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
        <button className="mx-1 px-3 py-2 rounded-lg bg-gray-200">2</button>
        <button className="mx-1 px-3 py-2 rounded-lg bg-gray-200">بعدی</button>
      </div>
    </div>
  );
};

export default Payments;
