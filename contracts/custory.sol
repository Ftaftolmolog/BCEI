//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract CustodyToken {
    
    uint256 balance;
    mapping(address => uint) balances;

    constructor() {
        console.log("Deploying a Custody Token");
    }

    function SeeInput(string memory input_) public pure {
        console.log("Input: '%s'", input_);
    }

    function deposit() payable external {
        // deposit sizes are restricted to 1 ether
        require(msg.value == 1 ether);
        // an address cannot deposit twice
        require(balances[msg.sender] == 0);
        balances[msg.sender] += msg.value;
    }
     

    // receive() external payable {
    //     balance += msg.value;
    //     console.log("Recieved value: ", msg.value);
    //     console.log("Balance: ", balance);
    //     }
}