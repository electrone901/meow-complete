import React, { useState } from "react";
import Image from "next/image";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

import { BsHeartFill } from "react-icons/bs";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "120vh", // Set to full height of the viewport
};

// NEEDED TO do new screen step 9
function FoodPayment() {
  const calories = Number(56);
  const [selected, setSelected] = useState(Number(-1));
  const [selectedFood, setSelectedFood] = useState("");
  const [count, setCount] = useState(0);

  const [price, setPrice] = useState(0.99);

  const calculateTotal = () => {
    const total = count * price;

    // Format the total with two decimal places
    const formattedTotal = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);

    return formattedTotal;
  };

  const handleIncrement = () => {
    if (count < 999) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const formatCount = () => {
    return count.toString().padStart(3, "0");
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="flex items-center justify-center">
        <div className="w-[70%] mt-40">
          <div className="mb-20"></div>

          <div className="grid grid-cols-5 gap-4">
            <div className=" col-span-2">
              {selected !== -1 && (
                <div className="relative inline-block bg-white text-black p-4 rounded-lg items-center justify-center">
                  <span>Feed me </span>
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
                <div className="flex items-center justify-around py-8 px-6">
                  <div className="s">
                    <Image
                      src="/assets/image 1.png"
                      width={1900}
                      height={1900}
                      alt="pet"
                      className={`object-cover w-[120px] h-[120px] cursor-pointer ${
                        selected === 1 && "border-4 border-dotted border-black p-4  rounded-lg"
                      }`}
                      onClick={() => {
                        setSelected(1);
                        setSelectedFood("Fish");
                      }}
                    />
                    <p className="text-black m-0 text-md ">Price item: {price}</p>
                    <p className="text-black m-0 text-md ">Calories: {calories}</p>
                  </div>
                  <p className="font-ligth text-3xl text-black   text-center">Total {calculateTotal()}</p>
                  <p className="font-semibold text-3xl text-black  text-center">{calories * count} Cal</p>
                </div>
              </div>

              {/* COUNTER */}
              <div className="flex items-center justify-center mt-16">
                <button
                  className={` text-white p-4 rounded-md font-extrabold text-4xl ${
                    count < 999 ? "bg-black" : "bg-[#fce7c6]"
                  }`}
                  onClick={handleIncrement}
                  disabled={count > 999}
                >
                  <ImPlus fontSize={30} />
                </button>
                <div
                  className="bg-[#FFECCE] text-black border-[6px] border-white p-4 rounded-lg transition duration-300 ease-in-out w-[140px]
                 ml-6 mr-6 font-extrabold text-4xl text-center text-wider"
                >
                  {formatCount()}
                </div>
                <button
                  className={` text-white p-4 rounded-md font-extrabold text-4xl ${
                    count > 0 ? "bg-black" : "bg-[#f9e2bc]"
                  }`}
                  onClick={handleDecrement}
                  disabled={count <= 0}
                >
                  <ImMinus fontSize={30} />
                </button>
              </div>
              {/* BUTTON */}
              <div className="flex items-center justify-around mt-16 ">
                <button
                  className={`bg-[#C3994A] text-white border-4 border-white px-4 py-4 rounded-lg transition duration-300 ease-in-out w-[180px] text-2xl ${
                    count <= 0 ? "cursor-not-allowed opacity-50" : "hover:bg-[#d1a24b]"
                  }`}
                  disabled={count <= 0}
                  // onClick={() => router.push("/statusCat")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodPayment;
