// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Award is ERC721URIStorage, Ownable {
    // ERC721 tokenIds
    uint256 private tokenIds = 0;

    // This is the total balance/overall budget for all Awards.
    uint256 totalAwardBalance = 0;

    // 1 ETH for single award
    uint256 singleAwardAmount = 1 * 10**18;

    // 10 days award vesting - we are so generous!
    uint256 awardVestingTime = 10 days;

    // Winner can have mutiple awards, concurrently
    mapping(address => mapping(uint256 => uint256)) wonAwards;

    // Manage when the user won, to enable vesting
    mapping(address => mapping(uint256 => uint256)) wonTimestamps;

    // Number of wins for each winner
    mapping(address => uint256) winerAwardCount;

    constructor() ERC721("Award", "AWRD") {}

    function getToatalAwardBalance() public view returns (uint256) {
        return totalAwardBalance;
    }

    // Contract owner can add to the overall Award balance budget
    function addAwardBalance() public payable onlyOwner {
        totalAwardBalance = totalAwardBalance + msg.value;
    }

    // Minting will create an NFT and move some money from the budget to winner's balance where we'll stake it for a bit
    // Thi
    function mintAward(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 newItemId = tokenIds + 1;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        uint256 awardNumberForWinner = winerAwardCount[recipient] + 1;

        wonAwards[recipient][awardNumberForWinner] = singleAwardAmount;
        wonTimestamps[recipient][awardNumberForWinner] = block.timestamp;

        totalAwardBalance = totalAwardBalance - singleAwardAmount;

        return newItemId;
    }

    // Withdraw the monetary award, if vested ...
    function withdrawAward(uint256 awardNumber) public payable {
        address payable withdrawTo = payable(msg.sender);
        uint256 amountToTransfer = getAwardBalance(msg.sender, awardNumber);

        withdrawTo.transfer(amountToTransfer);
        totalAwardBalance = totalAwardBalance - amountToTransfer;

        wonAwards[msg.sender][awardNumber] = 0;
    }

    function getAwardBalance(address winnerAddress, uint256 awardNumber)
        public
        view
        returns (uint256)
    {
        return wonAwards[winnerAddress][awardNumber];
    }

    // Some funky Solidity stuff to return the mapping value ...
    function getAllAwards(address winnerAddress)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory ret = new uint256[](winerAwardCount[winnerAddress]);
        for (uint256 i = 0; i < winerAwardCount[winnerAddress]; i++) {
            ret[i] = wonAwards[winnerAddress][i];
        }
        return ret;
    }

    function getAllVestedAwards(address winnerAddress)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory ret = new uint256[](winerAwardCount[winnerAddress]);
        for (uint256 i = 0; i < winerAwardCount[winnerAddress]; i++) {
            //check the original timestamp, make sure it is older than vesting period
            if (
                block.timestamp >
                wonTimestamps[winnerAddress][i] + awardVestingTime
            ) {
                ret[i] = wonAwards[winnerAddress][i];
            }
        }
        return ret;
    }

    function getAwardTimestamp(address winnerAddress, uint256 awardNumber)
        public
        view
        returns (uint256)
    {
        return wonTimestamps[winnerAddress][awardNumber];
    }
}
