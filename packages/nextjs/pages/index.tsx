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
    } 
    else if (petProfile?.name === "") {
      router.push("/nameCat");
    }
    else {
      router.push("/statusCat");
    }
    
  };
  return (
    <div className="">
      <MetaHeader />
      <div style={backgroundImageStyle} onClick={poligonIdAuthentication}></div>
    </div>
  );
};

export default Home;
