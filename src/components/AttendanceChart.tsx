"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "پنج شنبه",
    حاضرین: 300,
    غایبین: 20,
  },
  {
    name: "چهارشنبه",
    حاضرین: 350,
    غایبین: 30,
  },
  {
    name: "سه شنبه",
    حاضرین: 320,
    غایبین: 20,
  },
  {
    name: "دوشنبه",
    حاضرین: 310,
    غایبین: 40,
  },
  {
    name: "یکشنبه",
    حاضرین: 300,
    غایبین: 20,
  },
  {
    name: "شنبه",
    حاضرین: 250,
    غایبین: 22,
  },
];

const AttendanceChart = () => {
  return (
    <div className=" bg-white rounded-xl p-2  h-full shadow-lg">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">حضور غیاب</h1>
        <Image src="/moreDark.png" alt="بیشتر..." width={20} height={20} />
      </div>

      {/* chart */}

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3"  vertical={false}/>
          <XAxis dataKey="name" axisLine={false} />
         
          <Tooltip  contentStyle={{borderRadius:'10px'}}/>
          <Legend align="right" />
          <Bar dataKey="حاضرین" fill="#65acf5" legendType="circle" radius={[10,10,0,0]} />
          <Bar dataKey="غایبین" fill="#f34178"  legendType="circle" radius={[10,10,0,0]}/>
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
