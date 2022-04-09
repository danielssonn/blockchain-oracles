// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Reward Tokens will be minted acording to the Tokenomics model
 * Tokenomics model will include number of StakingTokens staked, duration of the stake, success of the stakee
 * Reward Tokens has monetary characteristics, has economic value and needs to be inflation controlled
 * The exact tokenomic model is TBD, and is the very next component on the Roadmap
 */
contract RewardToken is ERC20, Ownable {
    uint256 constant _initial_supply = 1000 * (10**18);

    constructor() ERC20("CIBC Stars Rewards", "CIBCRW") {
        _mint(msg.sender, _initial_supply);
    }
}
