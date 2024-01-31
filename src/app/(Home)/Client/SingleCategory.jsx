"use client";

import Image from "next/image";
import categoryimg from "../../../assets/005-fever.svg";
import { useEffect, useState } from "react";
const SingleCategory = ({
  data,
  setSelectId,
  selectId,
  fetchSubData,
  subCategoryData,
  subcat_name,
  setSubcat_name,
}) => {
  useEffect(() => {
    if (data.cat_id === 1) {
      fetchSubData(1);
      setSelectId(1);
    }
  }, []);
  console.log(subcat_name);
  console.log(subCategoryData);
  return (
    <div className="cursor-pointer">
      <div
        onClick={() => {
          setSelectId(data.id);

          fetchSubData(data.cat_id);
          //   setSubcat_name(subCategoryData[0].subcat_name_en);
        }}
        className="mx-[13px]  w-fit flex-col flex items-center justify-center  "
      >
        <div
          className={` ${
            data.id === selectId && "bg-slate-100"
          }  p-2.5  rounded-[10px] justify-start items-center  gap-4 inline-flex`}
        >
          <div className="p-2.5 bg-slate-300 rounded-[10px] justify-start items-start w-[50px] gap-2.5 flex">
            <Image
              src={categoryimg}
              alt=""
              width={500}
              className="w-[100px]"
              height={500}
            ></Image>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] ">
            <div className="w-[240px] text-green-600 text-base font-semibold font-['Inter']">
              {data.cat_name_en}
            </div>
            <div className="text-zinc-500 text-sm text font-normal ">
              Subcategory: {data.no_of_subcat}
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-[5px] inline-flex px-4 border-s border-gray-300">
            <div className="text-neutral-700 text-base font-semibold">
              {data.no_of_dua}
            </div>
            <div className="text-zinc-500 text-sm font-normal ">Duas</div>
          </div>
        </div>
      </div>
      <div className="flex ms-3 justify-start items-start">
        {subCategoryData.length > 0 && selectId === data.id && (
          <div className={` transform duration-700`}>
            {subCategoryData.map((x) => (
              <>
                {" "}
                <div
                  onClick={() => setSubcat_name(x.subcat_name_en)}
                  className={` ${
                    subcat_name == x.subcat_name_en && "text-green-600"
                  }  h-[60px] flex items-center transform duration-300`}
                >
                  <div className={`mx-3 `}>
                    <div
                      className={`${
                        subcat_name == x.subcat_name_en && "border-[#1FA45B]"
                      } h-[25px] w-1 border-s-2 border-dotted ms-1`}
                    ></div>
                    <div
                      className={`${
                        subcat_name == x.subcat_name_en && "bg-[#1FA45B]"
                      } w-[10px] h-[10px] transform duration-300 bg-slate-300 rounded-full`}
                    ></div>
                    <div
                      className={`${
                        subcat_name == x.subcat_name_en && "border-[#1FA45B]"
                      } h-[25px] w-1  transform duration-300 border-s-2 border-dotted ms-1`}
                    ></div>
                  </div>
                  {x.subcat_name_en}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
