import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "120vh", // Set to full height of the viewport
};

// NEEDED TO do new screen step 9
function GetUpdates() {
  const [selected, setSelected] = useState(Number(-1));
  const [selectedFood, setSelectedFood] = useState("");
  const router = useRouter();
  return (
    <div style={backgroundImageStyle}>
      <div className=" flex items-center justify-center">
        <div className="w-[60%] mt-20">
          <div className="mb-20">
            {selected == -1 && (
              <>
                <p className="font-bold text-3xl text-black px-2 py-2 ">Help MOMOTO remember her food angels.</p>
                <p className="font-bold text-3xl text-black px-2 py-2">Sign up for a thank-you gift!</p>
              </>
            )}
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className=" col-span-2">
              <div className="flex items-center justify-end  z-20">
                <Image
                  src="/assets/cat 001.png"
                  width={1900}
                  height={1900}
                  alt="pet"
                  className={`object-cover w-[300px] h-[400px] mt-[-50px] text-center `}
                />
              </div>
            </div>

            <div className=" col-span-3 text-center">
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center bg-white text-black border-4 border-white hover:bg-[#fbf4e8]  rounded-lg w-[400px]  font-jetbrains-mono text-xl font-extrabold leading-normal p-4">
                  <img src="/assets/logos_google-gmail.png" alt="Your Image" className="w-[45px] h-[29px]  mr-4" />
                  <span>Gmail</span>
                </button>
              </div>

              <p className="font-semibold text-1xl text-black px-2 py-2 ">Or</p>
              <button
                className="bg-white text-black border-4 border-white hover:bg-[#fbf4e8]  rounded-lg w-[400px]  font-jetbrains-mono text-xl font-extrabold leading-normal p-4"
                // onClick={() => setImage()}
              >
                Input Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetUpdates;
