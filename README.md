# Meow

## Inspiration
Are you aware that roughly 6.5 million animals enter shelters every year, but only about 3.2 million find caring homes?

The idea of this project stems from our regular involvement in volunteering for non-profit organizations. Throughout these activities, we frequently encounter cats requiring extensive medical attention. It struck us deeply:

What if there were a means to mobilize more individuals to support these institutions, enabling these cats to receive the heightened care they urgently need?

Our vision is to redefine the pet industry by combining cutting-edge technology, gamification, and the power of cryptocurrencies.


## What it does
To address this, imagine if a platform was designed to assist shelters in raising funds. Additionally, users could engage with and support these animals by donating their love and thoughts in a fun and simple manner. This way, individuals could interact with adorable cats or other animals, making a positive impact on their lives.

Our demo:
- Allows users to create fundraisers
- Allows users to provide updates about their pets’ status, health, and recovery process
- Allows users to follow their favorite pets and receive personalized content
- Allows users to donate ERC20 tokens
- Allows users to donate NFTs
- Allows users to browse fundraisers and filter them
- It gives users a more accurate picture of the impact we can do it together
- Users can send or receive tips for their cause
- Users can send or receive tips
- Fundraises are represented as NFTs
- Easily collect accurate information that is available to the public using blockchain technology

## How we built it
Meow application makes use of the following software:
- We used Chainlink functions and API using the smart contract to get the prize fee of an item menu to feed pets. Chainlink empowered us to dynamically fetch the prize fee for menu items, ensuring a seamless and efficient process for users looking to contribute to feeding pets.

- We also used verifiable numbers, employing a randomized selection mechanism for feeding pets with a chosen item. This not only adds an element of excitement but also ensures fairness and unpredictability in the virtual pet care experience.

- `SepoliaETH Network` enables our application to be a scalable platform with fast transactions. We deployed our app on the Sepolia Network. Contract Address: `0x669874c4a8496b7b5bf5ae6cdbc7d55236567957`
https://sepolia.etherscan.io/address/0x669874c4a8496b7b5bf5ae6cdbc7d55236567957

- `Vercel.com` facilitated the process of our software publishing and distribution securely. We are hosting our application code in Vercel.
  https://meow-oci7fgoi6-electrone901.vercel.app/

* `IPFS NFTStorage` for data storage on IPFS that generates a transaction hash used to create an NFT of a photo.

* `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.
* `Solidity` for the smart contract.
* `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.
* `Hardhat` for local blockchain development.
* `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.

## Challenges we ran into
In our ambitious pursuit to integrate multiple technologies into our project, we regrettably encountered time constraints that hindered us, particularly in refining the smart contract intricacies and seamlessly incorporating the Chainlink protocols into our application. Despite our efforts, the complexities of these tasks coupled with time limitations led us to prioritize key aspects, leaving some integration objectives pending. We remain committed to revisiting and completing this integration in the future as we strive for a comprehensive and polished solution.

## Accomplishments that we're proud of
Our MVP Demo stands as a testament to our team's prowess in swiftly delivering a lean product while concurrently gaining valuable insights throughout the development journey. The exceptional skills and compelling ideas within our team consistently attract individuals to engage with our innovative initiatives. We take pride in our ability to not only create impactful solutions but also in the continuous learning journey embedded in our development process.

## What we learned
We learned the utilization of **Chainlink** functions and APIs within our smart contract. Chainlink empowered us to dynamically fetch the prize fee for menu items, ensuring a seamless and efficient process for users looking to contribute to feeding pets.

Moreover, we delved into the realm of verifiable numbers, employing a randomized selection mechanism for feeding pets with a chosen item. This not only adds an element of excitement but also ensures fairness and unpredictability in the virtual pet care experience.

Recognizing the need for speed and a superior user interface, we harnessed the power of The Graph. By indexing newly created pets, we significantly improved data retrieval speed, providing users with a more responsive and enjoyable interaction with our platform.

In our commitment to user-friendly features, we integrated the Ethereum Name Service (ENS). This enables users to effortlessly look up ENS, fetching associated avatars and displaying identifiable addresses. The inclusion of a Blockie image enhances the visual appeal, and users have the convenient option to copy the address with a simple click.

Our journey has uncovered a deep passion for developing innovative products centered around pets and goods. This passion fuels our commitment to continuously refine and elevate the user experience, making each interaction a delightful journey for pet enthusiasts and contributors alike.


## What's next for Meow
We would like to:
- Enhance interaction between people and cats by incorporating a wider range of animations and multi-effects.
- Thoroughly research pertinent laws and regulations to ensure meticulous project implementation.
- Conduct visits to additional non-profit organizations to explore iterative plans for improvement.
- Explore integrating blockchain or decentralized technologies to enhance transparency and accountability in donations and transactions.
- Implement AI-driven features for better matching between real animals and the animation creation process.
- Develop a decentralized ecosystem where animal care resources, such as vet services or fostering, can be easily accessed and shared among various animal welfare organizations.



https://meow-oci7fgoi6-electrone901.vercel.app/
https://github.com/electrone901/meow-complete
https://docs.google.com/presentation/d/1-iXIwKAuYBoYmSWhfEONMfDVcfAcul2o3TME4uerSCc/edit#slide=id.p

https://youtu.be/32gs8rKa39E

## 📈 Price Feeds

Chainlink price feeds bring off chain price quotes on chain using a decentralized network of oracles. The `FeedRegistry` contract is only avaible on mainnet, but the price feed addresses that power the `AggregatorV3Interface` are available on a wide range of networks.

### Steps

1. Import `AggregatorV3Interface` into your smart contract
2. Declare a state variable of type `AggregatorV3Interface`
3. Choose network and a pair of assets to find the price feed address
4. Instantiate the variable using the price feed address
5. Call `.latestRoundData()` and extract the answer

### Details

- The quote returned by the price feed contract has a specified number of decimals
- The quote returned by the price feed contract is only updated if the price deviates beyond a specified threshold or if a certain amount of time has passed since the last update

## 🎲 VRF (Verifiable Random Function)

Chainlink VRF provides access to verifiably random numbers on chain. Each request for a random number costs LINK and the reponse is delivered after requestConfirmations number of blocks. The VRFConsumer example uses the Direct Funding method, but you may prefer the Subscription method depending on your use case.

### Steps

1. Set up your contract to inherit VRFV2WrapperConsumerBase
2. Impliment a function that triggers request for random number by calling the requestRandomness function inhereted from VRFV2WrapperConsumerBase
3. You must override the fullFillrandomWords function inhereted from VRFV2WrapperConsumerBase

### Details

- The Direct Funding method requires your smart contract hold LINK tokens for payment
- The fulfillRandomWords function is triggered by the VRF Coordinator contract
- VRF response time is impacted by requestConfirmations which must be greater than the minimum amount set by the coordinator contract

## 🤖 Automation

Chainlink Automation calls a smart contract function if a specified set of criteria are met. The time-based trigger calls a target function on a target contract every specified interval. The custom logic trigger allows your contract to use on-chain state to determine when to call a target function. The log trigger allows your contract to use event log data as both a trigger and an input

### Steps

1. Decide which trigger fits best for your use case
2. Import the appropriate interface and override the checkUpkeep and performUpkeep functions inhereted from the interface
3. Register a new upkeep with chainlink by providing your target contract address and depositing LINK tokens

### Details

- The time-based trigger does not require an interface
- The custom logic trigger requires your target contract be compatible with AutomationCompatibleInterface
- The log trigger requires your target contract be compatible with IlogAutomation
