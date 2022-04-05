// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingToken is ERC20, Ownable {
    uint constant _initial_supply = 1000 * (10**18);
    constructor() ERC20("Staking Token", "STKTKN") {
        _mint(msg.sender, _initial_supply);
    }

    function _testReplenishSupply(uint256 amount) public onlyOwner{
        _mint(msg.sender, amount*(10*18));
    }

    function mint(address to, uint256 value) public returns (bool) {
        require(value <= 10000000 ether, "dont be greedy");
        _mint(to, value);
        return true;
    }
}
