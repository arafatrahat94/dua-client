import Image from "next/image";
import logo from "../../../assets/logo.svg";
import menu from "../../../assets/54-menu-2.svg";
import hand from "../../../assets/hand.svg";
import home from "../../../assets/home 1.svg";
import memorize from "../../../assets/memorize 1.svg";
import save from "../../../assets/3-keep-minus.svg";
import ruquiyah from "../../../assets/ruqyah 1.svg";
import dua from "../../../assets/dua-info 1.svg";
import books from "../../../assets/books 1.svg";
const SideNav = () => {
  return (
    <div className="h-screen mx-[30px] my-[40px] rounded-[24px] overflow-scroll  w-[100px] containering bg-white border flex flex-col items-center justify-between">
      <div className="mt-[31px] mb-[130px]">
        <Image
          className="w-[73px]"
          src={logo}
          alt=""
          height={500}
          width={500}
        ></Image>
      </div>
      <div className="flex flex-col gap-y-3 mb-[130px]">
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={home}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={menu}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={memorize}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={save}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={ruquiyah}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={dua}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="p-[7px] rounded-full border bg-[#E8F0F5] flex items-center justify-center">
          <Image
            className="w-[20px] "
            src={books}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
      </div>
      <Image
        className="w-[74px] "
        src={hand}
        alt=""
        height={500}
        width={500}
      ></Image>
    </div>
  );
};

export default SideNav;
