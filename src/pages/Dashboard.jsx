import { Card, CardContent } from "../components/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line,AreaChart, CartesianGrid, Area } from "recharts";
import { Users, HandHeart, Filter, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const donationData = [
    // { name: "تیر", amount: 15000, donors: 35 },
    // { name: "مرداد", amount: 7000, donors: 35 },
    // { name: "شهریور", amount: 8000, donors: 35 },
    { name: "مهر", amount: 5000, donors: 35 },
    { name: "آبان", amount: 16000, donors: 20 },
    { name: "آذر", amount: 20000, donors: 25 },
    { name: "دی", amount: 12000, donors: 40 },
    { name: "بهمن", amount: 18000, donors: 30 },
    { name: "اسفند", amount: 15000, donors: 40 },
  ];

  const volunteerData = [
    { name: "مهر", count: 40 },
    { name: "آبان", count: 10 },
    { name: "آذر", count: 11 },
    { name: "دی", count: 35 },
    { name: "بهمن", count: 42 },
    { name: "اسفند", count: 50 },
  ];
  const data = [
    {
      name: '1403/10/01',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '1403/10/02',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '1403/10/03',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '1403/10/04',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '1403/10/05',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '1403/10/06',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '1403/10/07',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const filteredData = donationData.filter((item) => {
    const matchesMonth = selectedMonth ? item.name === selectedMonth : true;
    const matchesSearch =
      item.amount.toString().includes(searchTerm) ||
      item.donors.toString().includes(searchTerm);
    return matchesMonth && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 p-5">
      <Card className="col-span-3 shadow">
        <CardContent className="flex items-center p-4">
          <HandHeart size={32} className="text-red-500 p-1" />
          <div className="ml-3">
            <h3 className="text-lg font-bold">کمک‌های مالی</h3>
            <p className="text-gray-600">مجموع: 45,000,000 تومان</p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3 shadow bg-blend-normal">
        <CardContent className="flex items-center p-4">
          <Users size={32} className="text-blue-500 p-1" />
          <div className="ml-3">
            <h3 className="text-lg font-bold">تعداد خیرین</h3>
            <p className="text-gray-600">۵۳۰ نفر</p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3 shadow">
        <CardContent className="flex items-center p-4">
          <Calendar size={32} className="text-green-500 p-1" />
          <div className="ml-3">
            <h3 className="text-lg font-bold">رویدادهای فعال</h3>
            <p className="text-gray-600">۱۲ رویداد</p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3  shadow">
        <CardContent className="flex items-center p-4">
          <DollarSign size={32} className="text-yellow-500 p-1" />
          <div className="ml-3">
            <h3 className="text-lg font-bold">بودجه باقی‌مانده</h3>
            <p className="text-gray-600">۸,۰۰۰,۰۰۰ تومان</p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-6 col-span-2 p-4 ">
        <h3 className="text-md font mb-2">نمودار کمک‌های مالی</h3>
        <ResponsiveContainer width="100%" height={300} className="dir-ltr">
          <BarChart data={donationData}>
            {/* <CartesianGrid strokeDasharray="2 2" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#ff6b6b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="col-span-6 col-span-2 p-4 ">
        <h3 className="text-md font mb-2">فعالیت داوطلبان</h3>
        {/* <ResponsiveContainer width="100%" height={300} className="dir-ltr">
          <LineChart data={volunteerData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#4c51bf" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer> */}
        <ResponsiveContainer width="100%" height={200} className="dir-ltr">
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card className="col-span-6 p-4 shadow-md rounded-lg">
        <h3 className="text-md mb-4 text-gray-700">📊 گزارش مالی</h3>

        {/* فیلتر و جستجو */}
        <div className="flex flex-wrap gap-3 mb-4">
          {/* فیلتر ماه */}
          <select
            className="p-2 border-m rounded-lg bg-white text-gray-500"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">همه ماه‌ها</option>
            {donationData.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          {/* جستجو */}
          <input
            type="text"
            placeholder="جستجو در مبلغ یا تعداد خیرین..."
            className="p-2 border-xs rounded-md flex-1 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* جدول */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                <th className="py-3 px-6 text-right">ماه
                  <svg className="w-4 h-4 ms-1 flex-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                  </svg>
                </th>
                <th className="py-3 px-6 text-right">مبلغ (تومان)</th>
                <th className="py-3 px-6 text-right">تعداد خیرین</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={`last:border-none ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-200 transition-all duration-200`}
                  >
                    <td className="py-3 px-6 text-right font-medium">
                      {item.name}
                    </td>
                    <td className="py-3 px-6 text-right text-green-600 font-semibold">
                      {item.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-6 text-right">{item.donors}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    داده‌ای یافت نشد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

    </div>
  );
};

export default Dashboard;
