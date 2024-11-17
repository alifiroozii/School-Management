"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "",
    count : 50,
    fill: "#fff",
  },
  {
    name: "دوازدهم",
    count: 26,
    fill: "rgb(55, 209, 190)",
  },
  {
    name: "یازدهم",
    count: 35,
    fill: "rgb(153, 132, 249)",
  },
  {
    name: "دهم",
    count: 20,
    fill: "#f34178",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl p-2 w-full h-full shadow-lg">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">دانش آموز</h1>
        <Image src="/moreDark.png" alt="بیشتر..." width={20} height={20} />
      </div>
      {/* charts */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* button  */}
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-pinkDark"></div>
          <h2 className="font-bold">100</h2>
          <h3 className="text-xs text-gray-400">دوازدهم (%32)</h3>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-PurpleDark"></div>
          <h2 className="font-bold">130</h2>
          <h3 className="text-xs text-gray-400">یازدهم (%43)</h3>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-blueDark"></div>
          <h2 className="font-bold">80</h2>
          <h3 className="text-xs text-gray-400">دهم (%25)</h3>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
