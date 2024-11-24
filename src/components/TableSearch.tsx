import Image from "next/image"

const TableSearch=()=>{
    return(
        <div className="w-full md:w-auto flex  gap-2 rounded-full  text-xs input-search-table py-2  p-1 px-2 ">
        <div className="">
          <Image src="/search.png" width={15} height={15} alt="جستجو" />
        </div>

        <input
          type="text"
          placeholder="جستجو..."
          className="focus:outline-none bg-transparent"
        />
      </div>    )
}

export default TableSearch