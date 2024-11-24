"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "نام کاربری باید حداقل سه کلمه باشد" }),
  email: z.string().email({ message: "ادرس ایمیل نامعتبر" }),
  password: z.string().min(8, { message: "پسورد باید حداقل هشت کلمه باشد" }),
  firstName: z.string().min(3, { message: "نام ضروری است!" }),
  LastName: z.string().min(3, { message: "نام خانوادگی ضروری است!" }),
  phone: z.string().max(11).min(11, { message: "شماره تلفن را صحیح وارد کنید است!" }),
  address: z.string().min(3, { message: "آدرس ضروری است!" }),
  birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "تاریخ تولد نامعتبر است!",
  }),
  sex: z.enum(["خانم", "آقا"], { message: "جنسیت ضروری است!" }),
  img: z.instanceof(File, { message: "عکس ضروری است!" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form action="" className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">اضافه کردن یک معلم جدید</h1>
      {/* Form 1 */}
      <span className="text-xs text-gray-800 font-medium ">
        اطلاعات اهراز هویت
      </span>

      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          lable="نام کاربری"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          lable="ایمیل"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          lable="پسورد "
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>

      {/* form 2 */}
      <span className="text-xs text-gray-800 font-medium "> اطلاعات شخصی</span>
      <div className="flex flex-wrap justify-between  gap-4">
        <InputField
          lable="نام "
          name="firstName"
          defaultValue={data?.firstName || ""}
          register={register}
          error={errors?.firstName}
        />

        <InputField
          lable="نام خانوادگی "
          name="LastName"
          defaultValue={data?.LastName}
          register={register}
          error={errors?.LastName}
        />
        <InputField
          lable="شماره تلفن "
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />
      </div>
      <div className="flex flex-wrap justify-between  gap-3 ">
        <InputField
          lable="آدرس "
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          lable="تاریخ تولد "
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4 text-black">
          <label htmlFor="" className="text-xs  text-gray-500">
            {" "}
            جنسیت
          </label>
          <select
            id=""
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full pl-4 text-black"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="آقا" className="text-black">
              آقا
            </option>
            <option value="خانم" className="text-black">
              خانم
            </option>
          </select>
          {errors.sex?.message && (
            <p className="text-red-600 text-xs">
              {errors.sex?.message?.toString()}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label
          htmlFor="img"
          className="  flex items-center text-xs gap-2  text-gray-500 cursor-pointer"
        >
          <Image src="/upload.png" alt="اپلود فایل" height={28} width={28} />
          <span>اپلود عکس</span>
        </label>

        <input type="file" id="img" className="hidden" {...register("img")} />
        {errors.img?.message && (
          <p className="text-red-600 text-xs">
            {errors.img?.message?.toString()}
          </p>
        )}
      </div>

      <button className="bg-[#37d1be] text-white py-2 px-4 w-max rounded-md">
        {type === "create" ? "اضافه کردن" : "ویرایش کردن"}
      </button>
    </form>
  );
};

export default TeacherForm;
