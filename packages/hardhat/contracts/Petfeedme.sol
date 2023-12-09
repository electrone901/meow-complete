// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Petfeedme is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter public _totalNFTs;
  uint public _totalFundraisers = 0;
  uint public _totalDonations = 0;
  uint public _totalPets = 0;

  mapping(uint => Fundraiser) public fundraiserList;
  mapping(uint => Donation) public donationList;
  mapping(uint => PetProfile) public petList;
  mapping(address => PetProfile) public userpetList;

  struct Donation {
    uint id;
    uint fundraiser_id;
    uint donationAmount;
    address donator;
    string message;
  }

  struct Fundraiser {
    uint id;
    string cid;
    uint targetAmmount;
    uint totalDonations;
    address organizer;
  }

   struct PetProfile {
    uint id;
    uint calories;
    address walletaddress;
    uint donations;
    string organizationlink;
    string name;
    string img;
    string story;
  }

  event FundraiserCreated (
    uint id,
    string cid,
    uint targetAmmount,
    address organizer
  );

  event PetCreated (
    uint id,
    uint calories,
    address walletaddress,
    uint donations,
    string organizationlink,
    string name,
    string img,
    string story
  );

  constructor() ERC721("Meow", "MEOW") {}
  // calldata is read only, use for funct inputs as params

  function getUserPet (address walletaddress) public view returns (PetProfile memory) {
    return userpetList[walletaddress];
  }

  function createPetProfile(
    uint calories,
    address walletaddress,
    uint donations,
    string calldata organizationlink,
    string calldata name,
    string calldata img,
    string calldata story
  ) public  {
    PetProfile memory newpet = PetProfile(_totalPets, calories, walletaddress, donations, organizationlink, name, img, story);
    petList[_totalPets] = newpet;
    userpetList[walletaddress] = newpet;
    emit PetCreated(_totalPets, calories, walletaddress, donations, organizationlink, name, img, story);
    _totalPets++;
  }

  function setPetName(address walletaddress, string calldata name) public  {
    PetProfile storage pet = userpetList[walletaddress];
    pet.name = name;
  }

  function createFoundraiser(string calldata _cid, uint _targetAmmount) public  {
    fundraiserList[_totalFundraisers] = Fundraiser(_totalFundraisers, _cid, _targetAmmount, 0, msg.sender);
    emit FundraiserCreated(_totalFundraisers, _cid, _targetAmmount, msg.sender);
    _totalFundraisers++;
  }

  function donate(uint fundraiserId, uint amount, address donator, string calldata message ) public {
    Fundraiser storage fundraiser = fundraiserList[fundraiserId];
    fundraiser.totalDonations += amount;
    donationList[_totalDonations] = Donation(_totalDonations, fundraiserId, amount, donator, message);
    _totalDonations++;
  }

  function getAllFundraisers() public view returns (Fundraiser[] memory) {
    Fundraiser[] memory fundraiserArray = new Fundraiser[](_totalFundraisers);
    for (uint i = 0; i < _totalFundraisers; i++) {
        Fundraiser storage currentItem = fundraiserList[i];
        fundraiserArray[i] = currentItem;
    }
    return fundraiserArray;
  }

  function getDonationsByFundraiserId(uint fundraiser_id) public view returns (Donation[] memory) {
    uint256 count;
    for (uint256 i = 0; i < _totalDonations; i++) {
      if (donationList[i].fundraiser_id == fundraiser_id) {
        count++;
      }
    }
    // Create a new array to store donations with the specified fundraiser_id
    Donation[] memory donationsForFundraiser = new Donation[](count);
    uint256 currentIndex = 0;

    // Populate the new array with donations matching the fundraiser_id
    for (uint256 i = 0; i < _totalDonations; i++) {
        if (donationList[i].fundraiser_id == fundraiser_id) {
          donationsForFundraiser[currentIndex] = donationList[i];
          currentIndex++;
        }
    }
    return donationsForFundraiser;
  }

  function getFundraiser(uint _fundraiserId) public view returns (Fundraiser memory) {
      Fundraiser storage currentFundraiser = fundraiserList[_fundraiserId];
      return currentFundraiser;
  }

}

