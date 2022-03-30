// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracleClient {
    // Price, Decimals
    function requestEligibilityOffChain(address winner)
        external
        returns (bytes32 requestId);

    function requestAMLCheck(address winner)
        external
        returns (bytes32 requestId);
}
