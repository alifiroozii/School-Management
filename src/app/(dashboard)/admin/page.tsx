"use client";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";



const AdminPage = () => {
  return (
    <div className="flex flex-col p-4 md:flex-row md:justify-between gap-8">
      {/* right */}
      <div className="w-full md:w-[60%] lg:w-2/3 flex flex-col gap-8">
        {/* user card */}

        <div className="flex justify-between gap-5 flex-wrap">
          <UserCard
            type="مدیر"
            gradient="box-one"
          />
          <UserCard
            type="معلم"
            gradient="box-two"
          />
          <UserCard
            type="دانش آموز"
            gradient="box-three"
          />
        </div>

        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[430px]">
            <CountChart />
          </div>

          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[430px]">
            <AttendanceChart />
          </div>
        </div>

        {/* bottom chart */}
        <div className="w-full h-[500px] ">
          <FinanceChart />
        </div>
      </div>

      {/* left */}
      <div className="w-full md:w-[32%]  lg:w-1/3 flex flex-col gap-8 ">
        <EventCalendar />
      <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
