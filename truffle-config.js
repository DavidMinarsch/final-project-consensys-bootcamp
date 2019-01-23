const path = require("path");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    }
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      },
      evmVersion: "byzantium"
    }
  }
};
