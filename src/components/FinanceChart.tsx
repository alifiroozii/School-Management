"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "اسفند",
    درامد: 4000,
    هزینه: 2400,
  },
  {
    name: "بهمن",
    درامد: 3000,
    هزینه: 1398,
  },
  {
    name: "دی",
    درامد: 2000,
    هزینه: 9800,
  },
  {
    name: "آذر",
    درامد: 2780,
    هزینه: 3908,
  },
  {
    name: "آبان",
    درامد: 1890,
    هزینه: 4800,
  },
  {
    name: "مهر",
    درامد: 2390,
    هزینه: 3800,
  },
  {
    name: "شهریور",
    درامد: 3490,
    هزینه: 4300,
  },
  {
    name: "مرداد",
    درامد: 3490,
    هزینه: 4300,
  },
  {
    name: "تیر",
    درامد: 3490,
    هزینه: 4300,
  },
  {
    name: "خرداد",
    درامد: 3490,
    هزینه: 4300,
  },
  {
    name: "اردیبهشت",
    درامد: 3490,
    هزینه: 4300,
  },
  {
    name: "قروردین",
    درامد: 3490,
    هزینه: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-2 w-full h-full shadow-lg">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">نمودار مالی </h1>
        <Image src="/moreDark.png" alt="بیشتر..." width={20} height={20} />
      </div>

      {/* chart */}
          <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="درامد" strokeWidth={3} stroke="#f34178" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="هزینه" strokeWidth={3}  stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
