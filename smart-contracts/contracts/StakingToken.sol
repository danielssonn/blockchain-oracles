// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";


contract StakingToken is ERC20, Ownable {

    uint constant _initial_supply = 1000 * (10**18);

    mapping (address => bool) tokenHolders;

    constructor() ERC20("Staking Token", "STKTKN") {
        _mint(msg.sender, _initial_supply);
    }

    function _testReplenishSupply(uint256 amount) public onlyOwner{
        _mint(msg.sender, amount*(10*18));
    }

    function mint(address to, uint256 amount) public returns (bool) {
        
        if(balanceOf(to)==0 && !tokenHolders[to]){
            console.log("will mint", balanceOf(to),  tokenHolders[to]);
            _mint(to, amount);
            tokenHolders[to] = true;
            emit Minted(to, amount);
            return true;
        } else {
            console.log("will not mint", balanceOf(to),  tokenHolders[to]);
            emit NotMinted(to, balanceOf(to));
            return false;
        }
       
    }
    event Minted(address indexed user, uint256 amount);
    event NotMinted(address indexed user, uint256 amount);

}
