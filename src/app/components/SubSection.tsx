import React from "react";
import Image from "next/image";

const SubSection = () => {
  return (
    <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
      <div className="text-center max-w-4xl px-6">
        <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#333333] mb-4">
          Browse The Range
        </h2>
        <p className="font-poppins text-lg lg:text-xl text-[#555555] mb-8">
          Explore our diverse collection of premium furniture designed to
          elevate your living space.
        </p>

        {/* Images in a row */}
        <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/p1.png"
              alt="Dining"
              width={381}
              height={480}
              className="object-cover"
            />
            <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
              Dining
            </p>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/p2.png"
              alt="Living"
              width={381}
              height={480}
              className="object-cover"
            />
            <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
              Living
            </p>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/p3.png"
              alt="Bedroom"
              width={381}
              height={480}
              className="object-cover"
            />
            <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
