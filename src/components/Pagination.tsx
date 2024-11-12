const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50  disabled:cursor-not-allowed"
      >
        قبل
      </button>
      <div className="flex items-center gap-4 text-sm">
        <button className="px-2 rounded-sm bg-pinkLight  ">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>

      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50  disabled:cursor-not-allowed">
        بعد
      </button>
    </div>
  );
};

export default Pagination;
