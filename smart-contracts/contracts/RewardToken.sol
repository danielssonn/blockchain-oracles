// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardToken is ERC20, Ownable {
    uint256 constant _initial_supply = 1000 * (10**18);

    constructor() ERC20("CIBC Stars Rewards", "CIBCRW") {
        _mint(msg.sender, _initial_supply);
    }
}
