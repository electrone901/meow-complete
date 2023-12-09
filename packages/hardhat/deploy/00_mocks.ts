import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { developmentChains } from "../helper-hardhat-config";
import { network } from "hardhat";
import { networkConfig } from "../helper-hardhat-config";
import { getTokenBalance, sendLink } from "../tasks";

/** Deploy mock contracts necessary for testing on local networks
 *
 * @param hre HardhatRuntimeEnvironment object.
 */

const deployMocks: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, log } = hre.deployments;
  const { ethers } = hre;

  log("------------------------------------");
  const chainId = await hre.ethers.provider.getNetwork().then(network => network.chainId);
  const { VRFV2WrapperAddress, linkTokenAddress } = networkConfig[chainId].VRFConsumer;

  const args = [linkTokenAddress, VRFV2WrapperAddress];

  log("Petfeedme...");
  const Petfeedme = await deploy("Petfeedme", {
    from: deployer,
    log: true,
    args: args,
  });


  // check the LINK balance
  const VRFConsumerLinkBalance = await getTokenBalance(hre, Petfeedme.address, linkTokenAddress);
  // fund with LINK if the balance is 0 LINK (i.e. fresh deployment)
  if (+VRFConsumerLinkBalance === 0) {
    const amount = 1;
    console.log(`Funding VRFConsumer contract with ${amount} LINK`);
    await sendLink(Petfeedme.address, amount, hre);
  }

  // if (developmentChains.includes(network.name)) {
  //   log("Local network detected... Deploying mocks...");

  //   log("Deploying MockV3Aggregator...");
  //   await deploy("MockV3Aggregator", {
  //     from: deployer,
  //     log: true,
  //     args: [DECIMALS, INTIIAL_PRICE],
  //   });

  //   log("Deploying VRFCoordinatorV2Mock...");
  //   await deploy("VRFCoordinatorV2Mock", {
  //     from: deployer,
  //     log: true,
  //     args: [BASE_FEE, GAS_PRICE_LINK],
  //   });
  //   log("Mock contracts successfully deployed on local network!");
  //   log("------------------------------------");
  // }
};

export default deployMocks;

deployMocks.tags = ["mocks", "all"];
