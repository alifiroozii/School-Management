import React from "react";
import "moment/locale/fa";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
moment.locale("fa");

interface CalendarEvent {
  time: string;
  subject: string;
}

const calendarEvents: Record<string, CalendarEvent[]> = {
  شنبه: [
    { time: "8:00 - 9:00", subject: "ریاضی" },
    { time: "9:00 - 10:00", subject: "فیزیک" },
    { time: "10:30 - 11:30", subject: "شیمی" },
    { time: "12:00 - 01:00", subject: "دفاعی" },
  ],
  یکشنبه: [
    { time: "8:00 - 9:00", subject: " انگلیسی" },
    { time: "9:00 - 10:00", subject: "زیست‌شناسی" },
    { time: "10:30 - 11:30", subject: "ادبیات " },
    { time: "12:00 - 01:00", subject: "دینی" },
  ],
  دوشنبه: [
    { time: "8:00 - 9:00", subject: "ریاضی" },
    { time: "9:00 - 10:00", subject: "فیزیک" },
    { time: "10:30 - 11:30", subject: "آمار" },
    { time: "12:00 - 01:00", subject: "سلامت" },
  ],
  سه‌شنبه: [
    { time: "8:00 - 9:00", subject: "شیمی" },
    { time: "9:00 - 10:00", subject: " ادبیات" },
    { time: "10:30 - 11:30", subject: "هنر" },
    { time: "12:00 - 01:00", subject: "عربی" },
  ],
  چهارشنبه: [
    { time: "8:00 - 9:00", subject: "ریاضی" },
    { time: "9:00 - 10:00", subject: "فیزیک" },
    { time: "10:30 - 11:30", subject: "تاریخ" },
    { time: "12:00 - 01:00", subject: "دانش فنی" },
  ],
  پنجشنبه: [
    { time: "8:00 - 9:00", subject: " انگلیسی" },
    { time: "9:00 - 10:00", subject: "شیمی" },
    { time: "10:30 - 11:30", subject: "زیست‌شناسی" },
    { time: "12:00 - 01:00", subject: "تجارت" },
  ],
};

const BigCalendar = () => {
  return (
    <div className="container mx-auto p-6">
      <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-blueDark text-white">
            <th className="py-3 px-4 text-center">روز هفته</th>
            <th className="py-3 px-4 text-center">زمان</th>
            <th className="py-3 px-4 text-center">درس</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(calendarEvents).map((day) => {
            return calendarEvents[day].map((session, index) => (
              <tr
                key={`${index}-${day}`}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} `}
              >
                {index === 0 && (
                  <td
                    rowSpan={calendarEvents[day].length}
                    className="py-2 px-4 text-center font-bold border-r  border-gray-300"
                  >
                    {day}
                  </td>
                )}
                <td className="py-2 px-4 text-center">{session.time}</td>
                <td className="py-2 px-4 text-center">{session.subject}</td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BigCalendar;
