import Image from "next/image";
import lens from "../../../assets/Frame.svg";
import men from "../../../assets/Vector.svg";
import polygon from "../../../assets/Polygon 2.svg";
const TopNav = () => {
  return (
    <div className="flex justify-between gap-x-10 w-full  flex-grow items-center">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-semibold  text-2xl text-[#1FA45B]">Duas Page</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="w-[371px] px-4 focus:outline-[#1FA45B] focus:outline bg-white h-[51px] rounded-md"
          />
          <div className="p-3 bg-[#E8F0F5] absolute z-10 right-1 rounded-md border top-[3px]">
            <Image
              src={lens}
              alt=""
              width={500}
              height={500}
              className="w-[20px] "
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          alt=""
          className="w-[45px]"
          src={men}
          width={500}
          height={500}
        ></Image>
        <Image
          alt=""
          className="w-[12px] ms-2"
          src={polygon}
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default TopNav;
