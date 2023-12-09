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
function SelectFood() {
  const [selected, setSelected] = useState(Number(-1));
  const [selectedFood, setSelectedFood] = useState("");
  const router = useRouter();
  return (
    <div style={backgroundImageStyle}>
      <div className="flex items-center justify-center">
        <div className="w-[70%] mt-40">
          <div className="mb-20">
            {selected == -1 && (
              <p className="font-bold text-3xl text-black px-2 py-2">Let’s see what MOMOTO likes to eat today.</p>
            )}
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className=" col-span-2">
              {selected !== -1 && (
                <div className="relative inline-block bg-white text-black p-4 rounded-lg items-center justify-center">
                  <span> I love </span>
                  <div className="relative z-1 flex items-center ">
                    <p>{selectedFood} ~Meow~</p>
                    <BsHeartFill color="red" fontSize={25} className="ml-1" />
                    <BsHeartFill color="red" fontSize={25} className="ml-1" />
                  </div>
                  <div className="absolute h-8 w-8 bg-white transform rotate-45 -mb-8 left-1/2 -translate-x-2 after:block after:w-8 after:h-8 after:bg-white after:absolute after:transform after:rotate-225 after:-mb-8 after:left-1/2 after:-translate-x-2"></div>
                </div>
              )}
              <div className="flex items-center justify-center  z-20">
                <Image
                  src="/assets/cat 001.png"
                  width={1900}
                  height={1900}
                  alt="pet"
                  className={`object-cover w-[300px] h-[400px] mt-[-50px] text-center `}
                />
              </div>
              <p className="font-semibold text-3xl text-black px-2 py-2  text-center">MOMOTO.</p>
            </div>

            <div className=" col-span-3 ">
              <div className="bg-[#FFECCE]  border-8 border-white rounded-md ">
                <div className="flex items-center justify-around pt-8">
                  <Image
                    src="/assets/image 4.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 1 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(1);
                      setSelectedFood("Coconut");
                    }}
                  />
                  <Image
                    src="/assets/image 5.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 2 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(2);
                      setSelectedFood("Watermelon");
                    }}
                  />
                  <Image
                    src="/assets/image 1.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 3 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(3);
                      setSelectedFood("Fish");
                    }}
                  />
                </div>

                <div className="flex items-center justify-around py-16">
                  <Image
                    src="/assets/image 2.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 4 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(4);
                      setSelectedFood("Grapes");
                    }}
                  />
                  <Image
                    src="/assets/image 3.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 5 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(5);
                      setSelectedFood("Fried Rice");
                    }}
                  />
                  <Image
                    src="/assets/image 6.png"
                    width={1900}
                    height={1900}
                    alt="pet"
                    className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                      selected === 6 && "border-4 border-dotted border-black p-4  rounded-lg"
                    }`}
                    onClick={() => {
                      setSelected(6);
                      setSelectedFood("Water");
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-around mt-8 ">
                <button
                  className={`bg-[#02B53C] text-white border-4 border-white px-8 py-4 rounded-xl transition duration-300 ease-in-out text-3xl w-[250px] ${
                    selected == -1 ? "cursor-not-allowed opacity-50" : "hover:bg-[#72d35a]"
                  }`}
                  onClick={() => router.push("/foodPayment")}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectFood;
