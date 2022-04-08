// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Mock Digital Identity contract. Enables mapping of wallet address to more human Identity.
 */

contract DigitalIdentity is Ownable {
    address[] directory;

    struct Identity {
        string name;
        string title;
    }

    mapping(address => Identity) public identities;

    /**
     * Set name, but only for the sender
     */
    function setName(address _address, string memory _name) public {
        if (msg.sender == _address) {
            addToDirectory(_address);

            identities[_address].name = _name;
            emit IdentityNameSet(msg.sender, _name);
        }
    }

    /**
     * Set title, but only for the sender
     */
    function setTitle(address _address, string memory _title) public {
        if (msg.sender == _address) {
            identities[_address].title = _title;
            emit IdentityTitleSet(msg.sender, _title);
        }
    }

    function getName(address _address) public view returns (string memory) {
        return identities[_address].name;
    }

    function getTitle(address _address) public view returns (string memory) {
        return identities[_address].title;
    }

    function getDirectory() public view returns (address[] memory) {
        address[] memory ret = new address[](directory.length);
        for (uint256 i = 0; i < directory.length; i++) {
            ret[i] = directory[i];
        }
        return ret;
    }

    // If the address is not in the directory yet, add it there
    function addToDirectory(address _address) internal {
        bool exists;
        for (uint256 i = 0; i < directory.length; i++) {
            if (directory[i] == _address) {
                exists = true;
            }
        }
        if (!exists) {
            directory.push(_address);
        }
    }

    function resetDirectory() public onlyOwner {
        delete directory;
    }

    event IdentityNameSet(address indexed user, string name);
    event IdentityTitleSet(address indexed user, string title);
}
