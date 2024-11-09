import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Image from "next/image";

const evets = [
  {
    id: 1,
    title: "جشن روز دانش آموز",
    time: "11:00 - 1403/08/13",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 2,
    title: "جلسه اولیا",
    time: "11:00 - 1403/08/22",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 3,
    title: "جلسه معلمان",
    time: "11:00 - 1403/08/30",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];

export default function Example() {
  return (
    <div className="">
      <Calendar calendar={persian} locale={persian_fa} />
      <div className="flex flex-col gap-4 mt-8 bg-white p-4 rounded-md shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between ">
            <h2 className="font-semibold text-xl">رویداد ها</h2>
            <Image src="/moreDark.png" alt="بیشتر..." width={20} height={20} />
          </div>
          {evets.map((event) => {
            return (
              <div
                key={event.id}
                className="p-4 rounded-md border-2 border-gray-50 border-t-4 even:border-t-blueLight odd:border-t-PurpleLight"
              >
                <div className="flex items-center mb-2 justify-between">
                  <h1 className="font-bold text-gray-700">{event.title}</h1>
                  <span className="text-gray-400">{event.time}</span>
                </div>
                <p className="text-gray-500">{event.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
