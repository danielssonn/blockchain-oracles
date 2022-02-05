// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    uint256 public result;
    address public oracle;
    bytes32 public jobId;
    uint256 private fee;

    /**
     * Network: Kovan
     * Oracle: 0x7cBF93692cbBA821E69660221Ce604e73a80B40F
     * Job ID: b3d9f1e7a16046b49081fcad99b807d0
     * Fee: 0.1 LINK
     */
    constructor() {
        setPublicChainlinkToken();

        oracle = 0x7cBF93692cbBA821E69660221Ce604e73a80B40F;

        // This is default, the contract has a setter for this field
        // This job will look for the external adapter runing on locally @ http://192.168.5.10:8080
        jobId = "b3d9f1e7a16046b49081fcad99b807d0";

        // This job will look for the external adapter on Lambda @ https://guaqr4nbt8.execute-api.us-east-1.amazonaws.com/chainlinkExternalAdapter
        // jobId = "5c28d02f11e149ef9a9e26a5707bfa2f";

        fee = 0.1 * 10**18; // (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     */
    function requestPrice() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10**18;
        request.addInt("times", timesAmount);
        request.add("from", "ETH");

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, uint256 _result)
        public
        recordChainlinkFulfillment(_requestId)
    {
        result = _result;
    }

    /**
     * Set new jobID on the oracle. The jobs cannot be edited, new jobId is required for each change. See /config/JobIdXY.toml for job specs
     */
    function setOracleJobId(string memory _jobId) external {
        jobId = stringToBytes32(_jobId);
    }

    /**
     * Set new jobID on the oracle. The jobs cannot be edited, new jobId is required for each change. See /config/JobIdXY.toml for job specs
     */
    function setOracleAddress(address _oracle) external {
        oracle = _oracle;
    }

    /**
     * Conversion to input strings in Etherscan UI
     */
    function stringToBytes32(string memory source)
        private
        pure
        returns (bytes32 converted)
    {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            converted := mload(add(source, 32))
        }
    }
}
