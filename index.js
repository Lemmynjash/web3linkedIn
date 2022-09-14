var Web3 = require("web3");
import { abi } from "./contractApi";

if (typeof web3 != "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

var AppprovalContract = new web3.eth.Contract(abi, contractAddress);

function checkIfTheyAreRealAccounts() {
  var fromAddress = "";
  var toAddress = "yyyyyyy";
  var amount = "2";

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

  ApprovalContract.methods
    .deposit(toAddress)
    .send(
      {
        from: fromAddress,
        gas: 100000,
        value: web3.utils.toWei(amount, "ether"),
      },
      function (error, result) {
        if (error) {
          console.error("error: " + error);
        } else {
          console.log("Success: " + result);
        }
      }
    );
}

checkIfTheyAreRealAccounts();
