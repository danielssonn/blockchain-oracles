// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

/**
 * Initial balance of Staking tokens is be minted for each participant, upon wallet connection
 * Staking Tokens can be added to wallet using the Import Token feature
 * Staking Token is a utility token, without economic value
 */
contract StakingToken is ERC20, Ownable {
    uint256 constant _initial_supply = 10000 * (10**18);

    mapping(address => bool) tokenHolders;

    constructor() ERC20("CIBC Stars Staking", "CIBCST") {
        _mint(msg.sender, _initial_supply);
    }

    /**
     * Owner can increase the inital supply
     */
    function _testReplenishSupply(uint256 amount) public onlyOwner {
        _mint(msg.sender, amount * (10 * 18));
    }

    /**
     * Distribute Staking Tokens to users for staking, once only, upon inital wallet connection to contract
     */
    function mint(address to, uint256 amount) public returns (bool) {
        if (balanceOf(to) == 0 && !tokenHolders[to]) {
            console.log("will mint", balanceOf(to), tokenHolders[to]);
            _mint(to, amount);
            tokenHolders[to] = true;
            emit Minted(to, amount);
            return true;
        } else {
            console.log("will not mint", balanceOf(to), tokenHolders[to]);
            emit NotMinted(to, balanceOf(to));
            return false;
        }
    }

    event Minted(address indexed user, uint256 amount);
    event NotMinted(address indexed user, uint256 amount);
}
