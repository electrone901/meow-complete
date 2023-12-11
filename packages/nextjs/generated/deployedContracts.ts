const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Petfeedme: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "cid",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "targetAmmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "organizer",
                  type: "address",
                },
              ],
              name: "FundraiserCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "calories",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "donations",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "organizationlink",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "img",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "story",
                  type: "string",
                },
              ],
              name: "PetCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "_totalDonations",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_totalFundraisers",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_totalNFTs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_totalPets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_cid",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_targetAmmount",
                  type: "uint256",
                },
              ],
              name: "createFoundraiser",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "calories",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "donations",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "organizationlink",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "img",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "story",
                  type: "string",
                },
              ],
              name: "createPetProfile",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "fundraiserId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "donator",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              name: "donate",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "donationList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "fundraiser_id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "donationAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "donator",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "fundraiserList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "cid",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "targetAmmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalDonations",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "organizer",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllFundraisers",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "cid",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "targetAmmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalDonations",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "organizer",
                      type: "address",
                    },
                  ],
                  internalType: "struct Petfeedme.Fundraiser[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "fundraiser_id",
                  type: "uint256",
                },
              ],
              name: "getDonationsByFundraiserId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundraiser_id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "donationAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "donator",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "message",
                      type: "string",
                    },
                  ],
                  internalType: "struct Petfeedme.Donation[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fundraiserId",
                  type: "uint256",
                },
              ],
              name: "getFundraiser",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "cid",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "targetAmmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalDonations",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "organizer",
                      type: "address",
                    },
                  ],
                  internalType: "struct Petfeedme.Fundraiser",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
              ],
              name: "getUserPet",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "calories",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "walletaddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "donations",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "organizationlink",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "img",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "story",
                      type: "string",
                    },
                  ],
                  internalType: "struct Petfeedme.PetProfile",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "petList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "calories",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "donations",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "organizationlink",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "img",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "story",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              name: "setPetName",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userpetList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "calories",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "walletaddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "donations",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "organizationlink",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "img",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "story",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Petfeedme: {
          address: "0x669874C4A8496B7B5BF5AE6CDBc7d55236567957",
          abi: [{"inputs":[{"internalType":"address","name":"_linkAddress","type":"address"},{"internalType":"address","name":"_wrapperAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"cid","type":"string"},{"indexed":false,"internalType":"uint256","name":"targetAmmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"organizer","type":"address"}],"name":"FundraiserCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"calories","type":"uint256"},{"indexed":false,"internalType":"address","name":"walletaddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"donations","type":"uint256"},{"indexed":false,"internalType":"string","name":"organizationlink","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"img","type":"string"},{"indexed":false,"internalType":"string","name":"story","type":"string"}],"name":"PetCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalDonations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalFundraisers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalNFTs","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalPets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_cid","type":"string"},{"internalType":"uint256","name":"_targetAmmount","type":"uint256"}],"name":"createFoundraiser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"calories","type":"uint256"},{"internalType":"address","name":"walletaddress","type":"address"},{"internalType":"uint256","name":"donations","type":"uint256"},{"internalType":"string","name":"organizationlink","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"story","type":"string"}],"name":"createPetProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fundraiserId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"donator","type":"address"},{"internalType":"string","name":"message","type":"string"}],"name":"donate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donationList","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"fundraiser_id","type":"uint256"},{"internalType":"uint256","name":"donationAmount","type":"uint256"},{"internalType":"address","name":"donator","type":"address"},{"internalType":"string","name":"message","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"walletaddress","type":"address"}],"name":"feedPet","outputs":[{"internalType":"uint256","name":"requestId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"donations","type":"uint256"},{"internalType":"uint256","name":"calories","type":"uint256"}],"name":"feedPetanddonate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fundraiserList","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"targetAmmount","type":"uint256"},{"internalType":"uint256","name":"totalDonations","type":"uint256"},{"internalType":"address","name":"organizer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllFundraisers","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"targetAmmount","type":"uint256"},{"internalType":"uint256","name":"totalDonations","type":"uint256"},{"internalType":"address","name":"organizer","type":"address"}],"internalType":"struct Petfeedme.Fundraiser[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fundraiser_id","type":"uint256"}],"name":"getDonationsByFundraiserId","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"fundraiser_id","type":"uint256"},{"internalType":"uint256","name":"donationAmount","type":"uint256"},{"internalType":"address","name":"donator","type":"address"},{"internalType":"string","name":"message","type":"string"}],"internalType":"struct Petfeedme.Donation[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundraiserId","type":"uint256"}],"name":"getFundraiser","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"targetAmmount","type":"uint256"},{"internalType":"uint256","name":"totalDonations","type":"uint256"},{"internalType":"address","name":"organizer","type":"address"}],"internalType":"struct Petfeedme.Fundraiser","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLinkBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"walletaddress","type":"address"}],"name":"getUserPet","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"calories","type":"uint256"},{"internalType":"address","name":"walletaddress","type":"address"},{"internalType":"uint256","name":"donations","type":"uint256"},{"internalType":"string","name":"organizationlink","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"story","type":"string"}],"internalType":"struct Petfeedme.PetProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"linkAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"petList","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"calories","type":"uint256"},{"internalType":"address","name":"walletaddress","type":"address"},{"internalType":"uint256","name":"donations","type":"uint256"},{"internalType":"string","name":"organizationlink","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"story","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"},{"internalType":"uint256[]","name":"_randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"walletaddress","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"setPetName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userpetList","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"calories","type":"uint256"},{"internalType":"address","name":"walletaddress","type":"address"},{"internalType":"uint256","name":"donations","type":"uint256"},{"internalType":"string","name":"organizationlink","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"story","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawLink","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        },
      },
    },
  ],
} as const;

export default contracts;
