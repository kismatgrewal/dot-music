import Image from "next/image";
import React from "react";
import { scrollbtn } from "../common/Helper";

const Scrollbtn = () => {
  return (
    <div className="flex flex-col gap-6 xl:gap-9 2xl:gap-11 mt-20 sm:mt-[108px]">
      {/* scroll section 1 */}
      <div className="flex gap-6 xl:gap-9 2xl:gap-11 overflow-hidden justify-between items-center example">
        {scrollbtn.map((item, index) => (
          <div
            key={index}
            className="flex slideani gap-6 xl:gap-9 2xl:gap-11 justify-between items-center"
          >
            <div className="w-[185px] sm:w-[250px] h-[62px] md:h-[70px] xl:h-[78px] 2xl:h-[84px] rounded-lg border border-[#696969] bg-white shadow-[2.089px_4.178px_10.446px_0px_rgba(0,0,0,0.10)] py-3 px-2 xl:px-4 2xl:px-6 flex items-center gap-1 sm:gap-3">
              <Image
                src="/img/btn-1-img.png"
                width={58}
                height={58}
                alt="as-it-img"
              />
              <div className="flex flex-col gap-1 items-start">
                <p className="text-black text-[14px] sm:text-[22px] font-telegraf font-extrabold leading-normal">
                  As It Was
                </p>
                <p className="text-black text-[10px] sm:text-[15px] font-telegraf font-normal leading-normal">
                  Harry Styles
                </p>
              </div>
            </div>
            <div className=" w-[175px] sm:w-[203px] h-[56px]  border bg-white shadow-[2.445px_4.89px_12.225px_0px_rgba(0,0,0,0.10)] border-black rounded-[75px] flex gap-1 sm:gap-[17px] items-center px-3  py-[15px]">
              <Image
                src="/img/btn-2-img.png"
                width={37}
                height={37}
                alt="harry-image"
              />
              <p className="text-black text-center font-telegraf text-[14px] sm:text-[18px]  font-extrabold leading-normal">
                Harry Styles
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* scroll section 2 */}
      <div className="flex gap-6 xl:gap-9 2xl:gap-11 overflow-hidden justify-between items-center example ">
        {scrollbtn.map((item, index) => (
          <div
            key={index}
            className="flex slideani2 gap-6 xl:gap-9 2xl:gap-11 justify-between items-center"
          >
            <div className="w-[185px] sm:w-[250px] h-[62px] md:h-[70px] xl:h-[78px] 2xl:h-[84px] rounded-lg border border-[#696969] bg-white shadow-[2.089px_4.178px_10.446px_0px_rgba(0,0,0,0.10)] py-3 px-2 sm:px-6 flex items-center gap-1 sm:gap-3">
              <Image
                src="/img/btn-1-img.png"
                width={58}
                height={58}
                alt="as-it-img"
              />
              <div className="flex flex-col gap-1 items-start">
                <p className="text-black text-[14px] sm:text-[22px] font-telegraf font-extrabold leading-normal">
                  As It Was
                </p>
                <p className="text-black text-[10px] sm:text-[15px] font-telegraf font-normal leading-normal">
                  Harry Styles
                </p>
              </div>
            </div>
            <div className=" w-[175px] sm:w-[203px] h-[56px]  border bg-white shadow-[2.445px_4.89px_12.225px_0px_rgba(0,0,0,0.10)] border-black rounded-[75px] flex gap-1 sm:gap-[17px] items-center px-3  py-[15px]">
              <Image
                src="/img/btn-2-img.png"
                width={37}
                height={37}
                alt="harry-image"
              />
              <p className="text-black text-center font-telegraf text-[14px] sm:text-[18px]  font-extrabold leading-normal">
                Harry Styles
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* scroll section 3 */}
      <div className="flex gap-6 xl:gap-9 2xl:gap-11 overflow-hidden justify-between items-center example">
        {scrollbtn.map((item, index) => (
          <div
            key={index}
            className="flex slideani gap-6 xl:gap-9 2xl:gap-11 justify-between items-center"
          >
            {" "}
            <div className="w-[185px] sm:w-[250px] h-[62px] md:h-[70px] xl:h-[78px] 2xl:h-[84px] rounded-lg border border-[#696969] bg-white shadow-[2.089px_4.178px_10.446px_0px_rgba(0,0,0,0.10)] py-3 px-2 sm:px-6 flex items-center gap-1 sm:gap-3">
              <Image
                src="/img/btn-1-img.png"
                width={58}
                height={58}
                alt="as-it-img"
              />
              <div className="flex flex-col gap-1 items-start">
                <p className="text-black text-[14px] sm:text-[22px] font-telegraf font-extrabold leading-normal">
                  As It Was
                </p>
                <p className="text-black text-[10px] sm:text-[15px] font-telegraf font-normal leading-normal">
                  Harry Styles
                </p>
              </div>
            </div>
            <div className=" w-[175px] sm:w-[203px] h-[56px]  border bg-white shadow-[2.445px_4.89px_12.225px_0px_rgba(0,0,0,0.10)] border-black rounded-[75px] flex gap-1 sm:gap-[17px] items-center px-3  py-[15px]">
              <Image
                src="/img/btn-2-img.png"
                width={37}
                height={37}
                alt="harry-image"
              />
              <p className="text-black text-center font-telegraf text-[14px] sm:text-[18px]  font-extrabold leading-normal">
                Harry Styles
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* scroll section 4 */}
      <div className="flex gap-6 xl:gap-9 2xl:gap-11 overflow-hidden justify-between items-center example ">
        {scrollbtn.map((item, index) => (
          <div
            key={index}
            className="flex slideani2 gap-6 xl:gap-9 2xl:gap-11 justify-between items-center"
          >
            <div className="w-[185px] sm:w-[250px] h-[62px] md:h-[70px] xl:h-[78px] 2xl:h-[84px] rounded-lg border border-[#696969] bg-white shadow-[2.089px_4.178px_10.446px_0px_rgba(0,0,0,0.10)] py-3 px-2 sm:px-6 flex items-center gap-1 sm:gap-3">
              <Image
                src="/img/btn-1-img.png"
                width={58}
                height={58}
                alt="as-it-img"
              />
              <div className="flex flex-col gap-1 items-start">
                <p className="text-black text-[14px] sm:text-[22px] font-telegraf font-extrabold leading-normal">
                  As It Was
                </p>
                <p className="text-black text-[10px] sm:text-[15px] font-telegraf font-normal leading-normal">
                  Harry Styles
                </p>
              </div>
            </div>
            <div className=" w-[175px] sm:w-[203px] h-[56px]  border bg-white shadow-[2.445px_4.89px_12.225px_0px_rgba(0,0,0,0.10)] border-black rounded-[75px] flex gap-1 sm:gap-[17px] items-center px-3  py-[15px]">
              <Image
                src="/img/btn-2-img.png"
                width={37}
                height={37}
                alt="harry-image"
              />
              <p className="text-black text-center font-telegraf text-[14px] sm:text-[18px]  font-extrabold leading-normal">
                Harry Styles
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrollbtn;
