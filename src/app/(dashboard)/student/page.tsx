"use client";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'


const StudentPage = () => {
  return (
    <div className="flex flex-col p-4 lg:flex-row gap-8">
      {/* right */}
      <div className="w-full lg:w-2/3">
        <div className="h-full bg-white rounded-md  shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-5">برنامه کلاس (12 کامپیوتر) </h2>
          <BigCalendar/>
        </div>
      </div>
      {/* left */}
      <div className="w-full  lg:w-1/3 flex flex-col gap-8 ">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
