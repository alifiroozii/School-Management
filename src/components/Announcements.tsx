const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">اطلاعیه ها</h2>
        <span className="text-xs text-gray-400 cursor-pointer">نمایش همه</span>
      </div>
      <div className="flex flex-col gap-8 mt-4">
        <div className="rounded-md p-4 bg-slate-100">
          <div className="flex items-center mb-2 justify-between">
            <h1 className="font-bold text-gray-700">آزمون ورودی تیزهوشان</h1>
            <span className="text-gray-400">1403/10/05</span>
          </div>
          <p className=" text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

        </div>

        <div className="rounded-md p-4 bg-slate-100">
          <div className="flex items-center mb-2 justify-between">
            <h1 className="font-bold text-gray-700">بهداشت</h1>
            <span className="text-gray-400">1403/11/01</span>
          </div>
          <p className=" text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
