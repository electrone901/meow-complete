import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";

/**
 * the site is intended to be used primarily on "Sepolia" testnet
 * where devs can get a feel for how the chainlink products work
 * and the LINK is free and plentiful
 */
const Home: NextPage = () => {
  const { address } = useAccount();

  const backgroundImageStyle = {
    backgroundImage: 'url("/assets/cover1.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Set to full height of the viewport
  };

  const { data: petProfile } = useScaffoldContractRead({
    contractName: "Petfeedme",
    functionName: "getUserPet",
    args: [address],
  });

  const router = useRouter();
  const poligonIdAuthentication = async () => {
    console.log(petProfile);
    if (petProfile?.img === "") {
      router.push("/selectCat");
    } else if (petProfile?.name === "") {
      router.push("/nameCat");
    } else {
      router.push("/statusCat");
    }
  };
  return (
    <div className="">
      <MetaHeader />
      <div className="h-[100vh] bg-white text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <div className="col-span-1 col-start-1 col-end-2 mt-20">
              <div className="pt-24 text-[#C3994A] font-jetbrains-mono text-4xl font-extrabold leading-normal">
                <p>Turning every cat's</p>
                <p>frown into a happy</p>
                <p>purr</p>
              </div>
              {/* Buttons  */}
              <button
                className="bg-[#C3994A] text-white border-4 border-[#F5C364] hover:bg-[#F5C364]  rounded-lg w-[307px] mt-20  font-jetbrains-mono text-xl font-extrabold leading-normal p-4"
                // onClick={() => setImage()}
              >
                Upload Your Cat Story
              </button>

              <p className="text-black font-jetbrains-mono text-xs font-normal leading-normal mt-1">
                Share cat stories to raise essential funds
              </p>
              <button
                className="bg-[#C3994A] text-white border-4 border-[#F5C364] hover:bg-[#F5C364]  rounded-lg w-[307px] mt-20  font-jetbrains-mono text-xl font-extrabold leading-normal p-4"
                onClick={() => router.push("/get-start")}
              >
                Find Your Cat Pal
              </button>
              <p className="text-black font-jetbrains-mono text-xs font-normal leading-normal mt-1">
                Play games, help cats with donations
              </p>
            </div>
            <div className="col-span-2 col-start-2 col-end-4 mt-[280px]">
              <Image
                src="/assets/cat-heart.png"
                width={1900}
                height={1900}
                alt="pet"
                className={`object-cover rounded-md w-[100%] h-[100%] `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
