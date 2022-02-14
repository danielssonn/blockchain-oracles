// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracleClient {
    // Price, Decimals
    function requestEligibilityOffChain() external returns (bytes32 requestId);
    // function paymentTokenAddress() external view returns (address);
}
