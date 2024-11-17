import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Announcements from "@/components/Announcements";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* right */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info card */}
          <div className="box-two shadow-lg text-white py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="عکس معلم"
                width={96}
                height={96}
                className=" w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h1 className="text-xl font-semibold">علی حسینی</h1>
              <p className="text-sm text-gray-200 ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
              <div className="flex items-center gap-2 justify-between flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 items-center gap-2 flex">
                  <Image src="/mail.png" alt="ایمیل" width={14} height={14} />
                  <span>ophelia@castro.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 items-center gap-2 flex">
                  <Image src="/phone.png" alt="ایمیل" width={14} height={14} />
                  <span>123456789</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 items-center gap-2 flex">
                  <Image src="/date.png" alt="ایمیل" width={14} height={14} />
                  <span>1370/10/10</span>
                </div>
              </div>
            </div>
          </div>
          {/* small card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* card */}
            <div className="w-full bg-white p-4 shadow-lg rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">90%</h2>
                <span className="text-gray-400 text-sm ">حضور و غیاب</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 shadow-lg rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">6</h2>
                <span className="text-gray-400 text-sm "> کلاس ها </span>
              </div>
            </div>
            <div className="w-full bg-white p-4 shadow-lg rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">5</h2>
                <span className="text-gray-400 text-sm "> درس ها</span>
              </div>
            </div>
            <div className="w-full bg-white p-4 shadow-lg rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">2</h2>
                <span className="text-gray-400 text-sm "> َشاخه</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 shadow-lg ">
          <h1>برنامه معلم</h1>
          <BigCalendar />
        </div>
      </div>
      {/* left */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white shadow-lg rounded-md  p-4">
          <h2 className="text-lg font-semibold">دسترستی ها </h2>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-600">
            <Link href="/" className="py-2 px-3 rounded-md bg-[#ff528981]"> کلاس ها</Link>
            <Link href="/" className="py-2 px-3 rounded-md bg-[#37d1bfb0]"> دانش آموزان </Link>
            <Link href="/" className="py-2 px-3 rounded-md bg-[#119bd29c]"> درس ها</Link>
            <Link href="/" className="py-2 px-3 rounded-md bg-[#9984f9a1]">  امتحانات</Link>

          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
