import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "فروردین", فروش: 4000 },
  { name: "اردیبهشت", فروش: 3000 },
  { name: "خرداد", فروش: 5000 },
];

const SalesChart = () => (
  <LineChart width={400} height={200} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="فروش" stroke="#8884d8" />
  </LineChart>
);

export default SalesChart;
