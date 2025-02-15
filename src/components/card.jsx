import { motion } from "framer-motion";

const Card = ({ title, value }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );
};
