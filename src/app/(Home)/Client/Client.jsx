"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import categoryimg from "../../../assets/005-fever.svg";
import SingleCategory from "./SingleCategory";
const Client = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://dua-server.vercel.app/categoryData`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(category);
  const [selectId, setSelectId] = useState(0);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subcat_name, setSubcat_name] = useState("");
  const fetchSubData = (id) => {
    setSubCategoryData([]);
    fetch(`https://dua-server.vercel.app/sub_category?cat_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSubCategoryData(data);
        console.log(data);
        setSubcat_name(data[0]?.subcat_name_en);
      });
  };
  return (
    <div className="py-[35px] h-[900px] ">
      {/* side pannel */}
      <div className="w-[325px] xl:w-[429px]  rounded-[10px] h-[800px] containering overflow-y-scroll bg-white">
        <div>
          <div className="w-full h-[57px] px-[124px] py-[18px] bg-green-600 rounded-tl-[10px] rounded-tr-[10px] border justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-[17px] font-semibold font-['Inter']">
              Categories
            </div>
          </div>
        </div>
        <div className="w-full h-[50px] p-[13px] mt-4 mb-4 border-x border-neutral-200 justify-start items-center gap-2.5 inline-flex">
          <input
            placeholder="Search by Categories"
            className="h-[50px] rounded-lg bg-white border-2 w-full px-3 "
            type="text"
          />
        </div>
        {category.map((x, i) => (
          <SingleCategory
            selectId={selectId}
            setSelectId={setSelectId}
            key={i}
            setSubcat_name={setSubcat_name}
            subcat_name={subcat_name}
            fetchSubData={fetchSubData}
            data={x}
            subCategoryData={subCategoryData}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Client;
