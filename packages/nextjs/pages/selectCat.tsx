import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiSolidRightArrow } from "react-icons/bi";
// import { MdVerified } from "react-icons/md";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background pic 002.png")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "104vh", // Set to full height of the viewport
};

function SelectCat() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(Number(-1));

  const data = [
    { front: "/assets/cat 001.png", back: "/assets/1.png" },
    { front: "/assets/cat 002.png", back: "/assets/2.png" },
    { front: "/assets/cat 003.png", back: "/assets/3.png" },
  ];
  const [showBack, setShowBack] = useState(Array(data.length).fill(false));

  const toggleImage = index => {
    setShowBack(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const openWebsite = () => {
    window.open("https://bestfriends.org/adopt/adopt-our-sanctuary/9384987/mousie", "_blank");
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="w-[800px]"></div>\
      <div className="flex items-center justify-center gap-4 text-black mt-20  px-48 py-10">
        <BiSolidRightArrow />
        <BiSolidRightArrow />
        <p className="font-semibold text-2xl ">Step 1: Pick your CAT PAL</p>
      </div>
      <div className="flex justify-center items-center  gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative cursor-pointer transition-transform transform ${
              selectedImage === index ? "border-4 border-blue-500 rounded" : ""
            }`}
          >
            <div className="relative">
              <Image
                src={showBack[index] ? item.back : item.front}
                width={1900}
                height={1900}
                alt="pet"
                className={`object-cover rounded-md  border-8 border-white ${
                  selectedImage === index ? `w-[420px] h-[600px]` : `w-[300px] h-[400px]`
                } transform duration-300 ease-in-out`}
              />

              {showBack[index] && selectedImage === index && (
                <div
                  className="cursor-pointer bg-[#1BE73C] text-black px-4 py-2 rounded-full text-sm absolute top-8 ml-5 transform -translate-x-1/1 -translate-y-1/1 transform duration-300 ease-in-out"
                  onClick={openWebsite}
                >
                  Open website
                </div>
              )}

              <Image
                src="/assets/flip.png"
                width={20}
                height={20}
                alt="pet"
                onClick={() => toggleImage(index)}
                className="w-[30px] h-[30px]
              absolute top-8 right-[10px] transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-20 ">
        <button
          className="bg-gray-400 text-white border-4 border-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 ease-in-out w-[140px]"
          onClick={() => router.push("/nameCat")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectCat;
