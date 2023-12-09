
import React, { useState } from "react";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/router";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";
import { useWalletClient, useAccount } from "wagmi";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background pic 002.png")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "104vh", // Set to full height of the viewport
};


function NameCat() {
  const [name, setName] = useState("");
  const router = useRouter();
  const { address } = useAccount();
  const handleInputChange = e => {
    setName(e.target.value);
  };

  const { data: walletClient } = useWalletClient();
  const { data: yourContract } = useScaffoldContract({
    contractName: "Petfeedme",
    walletClient,
  });

  const setPetName = async () => {
    await yourContract?.write.setPetName([address, name]);
    router.push("/statusCat");
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="flex items-center justify-center gap-4 text-black mt-20  px-48 py-6">
        <BiSolidRightArrow />
        <BiSolidRightArrow />
        <p className="font-semibold text-2xl ">Step 2: Name your CAT PAL</p>
      </div>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={handleInputChange}
          className={
            "bg-[#FFECCE] border-4 border-white text-black px-2 py-2 rounded-md font-semibold text-2xl uppercase text-center"
          }
        />
      </div>
      <div className="flex justify-center items-center  gap-4">
        <Image
          src="/assets/cat 001.png"
          width={1900}
          height={1900}
          alt="pet"
          className={`object-cover rounded-md  border-8 border-white w-[300px] h-[400px]`}
        />
      </div>
      <div className="flex items-center justify-center mt-8 ">
        <button
          // className="bg-gray-400 text-white border-4 border-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 ease-in-out w-[140px]"

          className={`bg-[#C3994A] text-white border-4 border-white px-4 py-2 rounded-lg transition duration-300 ease-in-out w-[140px] ${
            name.length < 3 ? "cursor-not-allowed opacity-50" : "hover:bg-[#d1a24b]"
          }`}
          disabled={name.length < 3}
          onClick={() => setPetName()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NameCat;
