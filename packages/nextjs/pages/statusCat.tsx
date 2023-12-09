import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "104vh", // Set to full height of the viewport
};

function StatusCat() {
  const router = useRouter();
  return (
    <div style={backgroundImageStyle}>
      <div className="flex items-center justify-center">
        <div className="w-[70%] mt-20">
          <p className="font-semibold text-3xl text-black px-2 py-2">Check MOMOTO’s status</p>

          <div className="grid grid-cols-5 gap-4">
            <div className=" p-4 col-span-2 flex items-center justify-center">
              <Image
                src="/assets/cat 001.png"
                width={1900}
                height={1900}
                alt="pet"
                className={`object-cover w-[300px] h-[400px] `}
              />
            </div>

            <div className="bg-[#FFECCE] p-4 col-span-3 border-8 border-white rounded-md">
              <div className="flex items-center pt-20">
                <p className="font-semibold text-2xl text-black px-4 py-3">Calories</p>
                <p className="font-semibold text-2xl text-black px-4 ">208 Cal</p>
                <HiArrowDownCircle color="red" fontSize={25} className="ml-1" />
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-2xl text-black px-4 py-3">Happiness</p>
                <BsHeartFill color="red" fontSize={25} className="ml-6" />
                <BsHeartFill color="red" fontSize={25} className="ml-6" />
                <BsHeartFill color="red" fontSize={25} className="ml-6" />
              </div>
              <div className="flex items-center justify-center mt-8 ">
                <button
                  className={`bg-[#C3994A] text-white border-4 border-white px-4 py-2 rounded-lg transition duration-300 ease-in-out w-[140px] hover:bg-[#d1a24b]`}
                  onClick={() => router.push("/selectFood")}
                >
                  Feed Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusCat;
