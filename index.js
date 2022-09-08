var Web3 = require("web3");

if (typeof web3 != "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

function checkIfTheyAreRealAccounts() {
  var fromAddress = "";
  var toAddress = "yyyyyyy";
  var amount = "0";

  if (web3.utils.isAddress(toAddress) != true) {
    console.error(
      "You did not enter a correct ethereum address for the recipient address."
    );
    return;
  }
  if (amount == 0) {
    console.error("You must send more than 0 ETH.");
    return;
  }
}

checkIfTheyAreRealAccounts();
