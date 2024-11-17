import React from "react";

type Session = {
  time: string;
  saturday: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
};

const timetable: Session[] = [
  {
    time: "8:00",
    saturday: "ریاضی",
    sunday: "تجارت",
    monday: "ریاضی",
    tuesday: "شیمی",
    wednesday: "ریاضی",
    thursday: "انگلیسی",
  },
  {
    time: "9:00",
    saturday: "فیزیک",
    sunday: "انگلیسی",
    monday: "فیزیک",
    tuesday: "ادبیات",
    wednesday: "فیزیک",
    thursday: "شیمی",
  },
  {
    time: "10:30 ",
    saturday: "شیمی",
    sunday: "زیست‌شناسی",
    monday: "آمار",
    tuesday: "هنر",
    wednesday: "تاریخ",
    thursday: "زیست‌شناسی",
  },
  {
    time: "12:00 ",
    saturday: "دفاعی",
    sunday: "دینی",
    monday: "سلامت",
    tuesday: "عربی",
    wednesday: "دانش فنی",
    thursday: "تجارت",
  },
];

const days = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
] as const;
const dayNames = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
];

const StyledTable = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="hidden md:block lg:hidden xl:block">
        <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-blueDark text-white">
              <th className="py-3 px-4 text-center">زمان</th>
              <th className="py-3 px-4 text-center">شنبه</th>
              <th className="py-3 px-4 text-center">یکشنبه</th>
              <th className="py-3 px-4 text-center">دوشنبه</th>
              <th className="py-3 px-4 text-center">سه‌شنبه</th>
              <th className="py-3 px-4 text-center">چهارشنبه</th>
              <th className="py-3 px-4 text-center">پنج‌شنبه</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((session, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-2 px-4 text-center border-r border-gray-300 font-bold">
                  {session.time}
                </td>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {session.saturday}
                </td>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {session.sunday}
                </td>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {session.monday}
                </td>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {session.tuesday}
                </td>
                <td className="py-2 px-4 text-center border-r border-gray-300">
                  {session.wednesday}
                </td>
                <td className="py-2 px-4 text-center">{session.thursday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden lg:block xl:hidden">
        {days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className="mb-4 border border-gray-300 rounded-lg shadow-lg"
          >
            <div className="bg-blueDark text-white py-2 px-4 font-bold text-center">
              {dayNames[dayIndex]}
            </div>
            <div>
              {timetable.map((session, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-1 border-b border-gray-300"
                >
                  <div className="py-2 px-4 text-center font-bold bg-gray-100">
                    {session.time}
                  </div>
                  <div className="py-2 px-4 text-center">
                    {session[day as keyof Session]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyledTable;
