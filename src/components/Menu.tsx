"use client"
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    items: [
      {
        icon: "/home.png",
        label: "صفحه اصلی",
        href: "/",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/teacher.png",
        label: "معلم ها",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "دانش آموزان",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "دروس",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "کلاس ها",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "امتحانات",
        href: "/list/exams",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/result.png",
        label: "نتایج",
        href: "/list/results",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/calendar.png",
        label: "رویدادها",
        href: "/list/events",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/announcement.png",
        label: "اطلاعیه ها",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "پروفایل*",
        href: "/profile",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/setting.png",
        label: "تنظیامات*",
        href: "/settings",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/logout.png",
        label: "خروج*",
        href: "/logout",
        visible: ["admin", "teacher", "student"],
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className="mt-3 text-sm ">
      {menuItems.map((i) => {
        return (
          <div className="flex flex-col justify-between  gap-2 mb-8" key={i.title}>
            {i.items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="flex justify-center items-center pt-2 lg:justify-start gap-4 lg:py-1 transition mx-2 lg:mx-4 rounded-sm lg:pr-1 lg:hover:bg-[#37d1bf1c] text-gray-500"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
