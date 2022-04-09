// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/*
 * ERC721 (NFT) certificate will be minted for each award
 */
contract AwardCertificate is ERC721URIStorage, Ownable {
    // ERC721 tokenIds
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Award Certificate", "AWRDCERT") {}

    function mintNFT(address winner, string memory tokenURI)
        external
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(winner, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
