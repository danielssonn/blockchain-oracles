// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract AwardNomination is Ownable{


    // all nominators staking into a nominee
    mapping(address => address[]) public nomineeStakers;

    // a nominator can nominate multiple nominees and stake towards them
    mapping(address => mapping(address => uint256)) public nominatorStakesBalance;

    // all nominees for a nominator
    mapping(address => address[]) public nominatorStakes;


    function nominateForAward(address _nominee) public {

        // set initial stake for a _nominee
        nominatorStakesBalance[msg.sender][_nominee] = 1;
      
        nomineeStakers[_nominee].push(msg.sender);

        nominatorStakes[msg.sender].push(_nominee);

    }


    function rebalanceStakes(address winner) public onlyOwner {
        
        // find everyone who has staked in the winner 
        for (uint256 i = 0; i < nomineeStakers[winner].length; ++i) {
            // give them 10x?
            nominatorStakesBalance[nomineeStakers[winner][i]][winner] = 10;
        }           
    }
    
}


