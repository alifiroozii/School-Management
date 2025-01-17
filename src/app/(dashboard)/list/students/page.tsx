import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  phone?: number;
  photo: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  { header: "اطلاعات", accessor: "info" },
  {
    header: "شناسه دانش آموز",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: " معدل",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: " شماره ",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: " ادرس ",
    accessor: "address",
    className: "hidden md:table-cell",
  },
];

const StudentList = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100"
    >
      <td className="flex items-center gap-4 p-4 pr-0">
        <Image
          src={item.photo}
          alt="عکس دانش اموز"
          width={40}
          height={40}
          className="md:hidden lg:block rounded-full w-10 h-10 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <h4 className="text-xs text-gray-500">{item?.class}</h4>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex itmes-center justify-end  gap-1 md:gap-4 ">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-blueDark">
              <Image src="/view.png" alt="مشاهده" width={16} height={16} />
            </button>
          </Link>
          <FormModal table="student" type="update" id={item.id} />

          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-5 shadow-lg  ">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block font-semibold text-lg">دانش آموزان </h1>
        <div className="flex flex-col  items-center gap-4 w-full md:w-auto md:flex-row-reverse ">
          <TableSearch />

          <div className="flex items-center justify-start w-full gap-4 selt-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full round-shadow">
              <Image src="/filter.png" alt="فیلتر" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full round-shadow">
              <Image src="/sort.png" alt="مرتب سازی" width={14} height={14} />
            </button>

            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default StudentList;
