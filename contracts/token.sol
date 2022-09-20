//SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.5.0 <0.9.0;

import "hardhat/console.sol";

contract token {
    string public name = "hard token";
    string public symbol = "HT";
    uint public totalsupply = 10000;

    address public owner;

    mapping(address=>uint) balances;

    constructor(){
          balances[msg.sender] = totalsupply;
          owner=msg.sender;
    }

    function transfer(address to , uint amount) external {
        console.log("**Sender balance is %s tokens**",balances[msg.sender]);
        console.log("**sender is sending %s tokens to %s address**",amount,to);
        require(balances[msg.sender]>=amount,"Not enough tokens");
        balances[msg.sender]-=amount;//deduction ofbalance 
        balances[to] +=amount;
    }
    function balanceof(address account) external view returns(uint256){
       return balances[account];
 }

}