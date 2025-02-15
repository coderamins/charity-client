import SalesChart from "../components/SalesChart";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">داشبورد</h1>

      {/* کارت‌های آماری */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md" 
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold">کاربران</h3>
          <p className="text-2xl font-bold">120</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md" 
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold">سفارشات</h3>
          <p className="text-2xl font-bold">45</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md" 
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold">درآمد</h3>
          <p className="text-2xl font-bold">$5,400</p>
        </motion.div>
      </div>

      {/* نمودار فروش */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">نمودار فروش</h3>
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
