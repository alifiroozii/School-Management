"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => (
    <div className="w-full flex justify-center items-center">
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  ),
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  student: (type, data) => <StudentForm type={type} data={data} />,
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
};

const FormModal = ({
  type,
  data,
  id,
  table,
}: {
  table:
    | "teacher"
    | "student"
    | "subject"
    | "class"
    | "result"
    | "exam"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? " round-shadow"
      : type === "update"
      ? "bg-blue-300"
      : "bg-slate-400";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-xl text-center">
          همه داده ها پاک میشود.آیامطمئن هستید برای پاک کردن؟
        </span>
        <button className=" px-4 py-2 bg-red-700 rounded-md w-max self-center text-white border-none ">
          پاک کردن
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "form not found"
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center  justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] max-h-[90vh] overflow-y-auto ">
            <div className="absolute top-4 right-4 cursor-pointer ">
              <Image
                src="/close.png"
                alt="بستن"
                width={14}
                height={14}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="mt-6">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
