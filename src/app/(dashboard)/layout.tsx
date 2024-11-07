import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex">

        {/* right */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] text-right   ">
          <Link className="flex justify-center lg:justify-start items-center gap-2" href="/">
            <Image src="/logo.png" width={30} height={30} alt="logo" />
            <span className="hidden lg:block mt-3">مدرسه من</span>
          </Link>
          <Menu/>
        </div>

        {/* left */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-x-hidden  bg-[#F7F8FA]  overflow-scroll ">
          <Navbar/>
          {children}
        </div>
      </div>
    </html>
  );
}
