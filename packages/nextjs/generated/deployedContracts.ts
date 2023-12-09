const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        AggregatorV3Consumer: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "priceFeedAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "getDecimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDescription",
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
              inputs: [],
              name: "getLatestPrice",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getVersion",
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
          ],
        },
        MockV3Aggregator: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
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
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
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
              name: "getTimestamp",
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
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
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
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
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
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
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
          ],
        },
        VRFCoordinatorV2Mock: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint96",
                  name: "_baseFee",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "_gasPriceLink",
                  type: "uint96",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InsufficientBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidConsumer",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRandomWords",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSubscription",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "MustBeSubOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "TooManyConsumers",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "consumer",
                  type: "address",
                },
              ],
              name: "ConsumerAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "consumer",
                  type: "address",
                },
              ],
              name: "ConsumerRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "outputSeed",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint96",
                  name: "payment",
                  type: "uint96",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "RandomWordsFulfilled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "keyHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "preSeed",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "callbackGasLimit",
                  type: "uint32",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "numWords",
                  type: "uint32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RandomWordsRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SubscriptionCanceled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "SubscriptionCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "oldBalance",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newBalance",
                  type: "uint256",
                },
              ],
              name: "SubscriptionFunded",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_FEE",
              outputs: [
                {
                  internalType: "uint96",
                  name: "",
                  type: "uint96",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "GAS_PRICE_LINK",
              outputs: [
                {
                  internalType: "uint96",
                  name: "",
                  type: "uint96",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MAX_CONSUMERS",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              name: "acceptSubscriptionOwnerTransfer",
              outputs: [],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "addConsumer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "cancelSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "consumerIsAdded",
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
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_requestId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "fulfillRandomWords",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_requestId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_words",
                  type: "uint256[]",
                },
              ],
              name: "fulfillRandomWordsWithOverride",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "uint96",
                  name: "_amount",
                  type: "uint96",
                },
              ],
              name: "fundSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getConfig",
              outputs: [
                {
                  internalType: "uint16",
                  name: "minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "maxGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "stalenessSeconds",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "gasAfterPaymentCalculation",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackWeiPerUnitLink",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFeeConfig",
              outputs: [
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier1",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier2",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier3",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier4",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier5",
                  type: "uint32",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier2",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier3",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier4",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier5",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getRequestConfig",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              name: "getSubscription",
              outputs: [
                {
                  internalType: "uint96",
                  name: "balance",
                  type: "uint96",
                },
                {
                  internalType: "uint64",
                  name: "reqCount",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "consumers",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
              ],
              name: "pendingRequestExists",
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
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "removeConsumer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_keyHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "uint16",
                  name: "_minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "_callbackGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "_numWords",
                  type: "uint32",
                },
              ],
              name: "requestRandomWords",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "requestSubscriptionOwnerTransfer",
              outputs: [],
              stateMutability: "pure",
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
        AggregatorV3Consumer: {
          address: "0xB46Ff022f5Afd7DAc265Bbb9c0b97616e815bA83",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "priceFeedAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "getDecimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDescription",
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
              inputs: [],
              name: "getLatestPrice",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getVersion",
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
          ],
        },
        AutomationConsumer: {
          address: "0x6367F14cFC4eC94534635e88ABe304AC9304Cd51",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract LinkTokenInterface",
                  name: "link",
                  type: "address",
                },
                {
                  internalType: "contract AutomationRegistrarInterface",
                  name: "registrar",
                  type: "address",
                },
                {
                  internalType: "contract AutomationRegistryBaseInterface",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AutomationConsumer__UpkeepNotNeeded",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "counter",
                  type: "uint256",
                },
              ],
              name: "CounterStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "counter",
                  type: "uint256",
                },
              ],
              name: "CounterStopped",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "IntervalUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "counter",
                  type: "uint256",
                },
              ],
              name: "UpkeepPerformed",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "checkUpkeep",
              outputs: [
                {
                  internalType: "bool",
                  name: "upkeepNeeded",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "performData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              name: "fundUpkeep",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getLinkBalance",
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
              name: "getUpkeepInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "target",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "executeGas",
                      type: "uint32",
                    },
                    {
                      internalType: "bytes",
                      name: "checkData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint96",
                      name: "balance",
                      type: "uint96",
                    },
                    {
                      internalType: "address",
                      name: "admin",
                      type: "address",
                    },
                    {
                      internalType: "uint64",
                      name: "maxValidBlocknumber",
                      type: "uint64",
                    },
                    {
                      internalType: "uint32",
                      name: "lastPerformBlockNumber",
                      type: "uint32",
                    },
                    {
                      internalType: "uint96",
                      name: "amountSpent",
                      type: "uint96",
                    },
                    {
                      internalType: "bool",
                      name: "paused",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "offchainConfig",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UpkeepInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_link",
              outputs: [
                {
                  internalType: "contract LinkTokenInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_registrar",
              outputs: [
                {
                  internalType: "contract AutomationRegistrarInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_registry",
              outputs: [
                {
                  internalType: "contract AutomationRegistryBaseInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
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
                  internalType: "bytes",
                  name: "performData",
                  type: "bytes",
                },
              ],
              name: "performUpkeep",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedEmail",
                      type: "bytes",
                    },
                    {
                      internalType: "address",
                      name: "upkeepContract",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "gasLimit",
                      type: "uint32",
                    },
                    {
                      internalType: "address",
                      name: "adminAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint8",
                      name: "triggerType",
                      type: "uint8",
                    },
                    {
                      internalType: "bytes",
                      name: "checkData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "triggerConfig",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "offchainConfig",
                      type: "bytes",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct RegistrationParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "registerNewUpkeep",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "resetCounter",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "s_counter",
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
              name: "s_interval",
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
              name: "s_isCounting",
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
              name: "s_lastTimestamp",
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
              name: "s_maxCounterValue",
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
              name: "s_upkeepID",
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
                  internalType: "uint256",
                  name: "_upkeepID",
                  type: "uint256",
                },
              ],
              name: "setUpkeepID",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "startCounting",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "stopCounting",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
              ],
              name: "updateInterval",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract AutomationRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
              ],
              name: "updateRegistrarAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract AutomationRegistryBaseInterface",
                  name: "_registry",
                  type: "address",
                },
              ],
              name: "updateRegistryAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        VRFConsumer: {
          address: "0x9fB4db5CF3b8F7aB3dF507F951f1705F94ff39e7",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_wrapperAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
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
              ],
              name: "OwnershipTransferRequested",
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
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spinner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "randomValue",
                  type: "uint256",
                },
              ],
              name: "WheelResult",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spinner",
                  type: "address",
                },
              ],
              name: "WheelSpun",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getLinkBalance",
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
              name: "linkAddress",
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
              inputs: [],
              name: "owner",
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
                  name: "_requestId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "_randomWords",
                  type: "uint256[]",
                },
              ],
              name: "rawFulfillRandomWords",
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
              name: "s_results",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "s_spinners",
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
              inputs: [],
              name: "spinWheel",
              outputs: [
                {
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
