import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-end  md:justify-between items-center p-4">
      {/* search bar */}
      <div className="hidden md:flex gap-2 rounded-full ring-[1.5px] text-xs ring-gray-300 p-1">
        <div className="">
          <Image src="/search.png" width={15} height={15} alt="جستجو" />
        </div>

        <input
          type="text"
          placeholder="جستجو..."
          className="focus:outline-none bg-transparent"
        />
      </div>

      {/* icon , user */}
      <div className="flex justify-start items-center">
        <div className="flex items-center gap-3 ml-5">
          <div className="bg-white px-1  round-shadow rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
            <Image src="/message.png" width={20} height={20} alt="پیغام" />
          </div>

          <div className="bg-white px-2 round-shadow rounded-full w-8 h-8 flex justify-center items-center relative cursor-pointer">
            <Image
              src="/announcement.png"
              width={20}
              height={20}
              alt="اطلاعیه"
            />
            <div className="absolute -top-2 right-5 w-4 text-xs h-4 rounded-full flex items-center justify-center bg-purple-500 text-white z-10">
              1
            </div>
          </div>
        </div>

        <div className="flex  ">
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">نازنین حسینی</span>
            <span className="text-[10px] text-gray-500 text-left">مدیر</span>
          </div>
          <Image
            src="/avatar.png"
            width={35}
            height={35}
            alt="کاربر"
            className="rounded-full mx-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
