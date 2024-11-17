import Image from "next/image";

interface UserCardProps {
    type: string;
    gradient: string; // اضافه کردن prop جدید برای رنگ گرادینت
  }
  
  const UserCard = ({ type, gradient }: UserCardProps) => {
    return (
      <div className={`rounded-2xl p-4 flex-1 min-w-[140px] shadow-lg ${gradient}`}>
        <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-700">1403/8/8</span>
        <Image src="/more.png" alt="بیشتر.." width={20} height={20}/>
        </div>
        <h1 className="text-2xl my-4 font-semibold text-white">30</h1>

        <h2 className="text-gray-100 text-sm">{type}</h2>
      </div>
    );
  };
  
  export default UserCard;
  