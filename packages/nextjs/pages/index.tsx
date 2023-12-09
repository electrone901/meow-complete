import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MetaHeader } from "~~/components/MetaHeader";

/**
 * the site is intended to be used primarily on "Sepolia" testnet
 * where devs can get a feel for how the chainlink products work
 * and the LINK is free and plentiful
 */
const Home: NextPage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("/assets/cover1.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Set to full height of the viewport
  };
  const router = useRouter();
  const poligonIdAuthentication = async () => {
    router.push("/selectCat");
  };
  return (
    <div className="">
      <MetaHeader />
      <div style={backgroundImageStyle} onClick={poligonIdAuthentication}></div>
    </div>
  );
};

export default Home;
