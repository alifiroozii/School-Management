import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, eventsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Events = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  { header: "رویداد", accessor: "title" },
  {
    header: " کلاس ",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: " تاریخ",
    accessor: "date",
  },
  {
    header: " شروع ",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: " پایان  ",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
];

const EventsList = () => {
  const renderRow = (item: Events) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100"
    >
      <td className=" gap-1 md:gap-4 p-1 md:p-4 pr-0">{item.title}</td>
      <td className=" hidden md:table-cell">{item.class}</td>
      <td className="">{item.date} </td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center justify-end gap-1 md:gap-4">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-blueDark">
              <Image src="/edit.png" alt="مشاهده" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex justify-center rounded-full items-center bg-slate-500">
              <Image src="/delete.png" alt="حذف" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-5 shadow-lg  ">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block font-semibold text-lg">رویداد ها </h1>
        <div className="flex flex-col  items-center gap-4 w-full md:w-auto md:flex-row-reverse ">
          <TableSearch />

          <div className="flex justify-start w-full items-center gap-4 selt-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PurpleLight">
              <Image src="/filter.png" alt="فیلتر" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-PurpleLight">
              <Image src="/sort.png" alt="مرتب سازی" width={14} height={14} />
            </button>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center  justify-center rounded-full bg-PurpleLight">
                <Image
                  src="/plus.png"
                  alt="اضافه کردن"
                  width={14}
                  height={14}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default EventsList;
