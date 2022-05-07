// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DummyToken is ERC20{
    constructor(string memory name, string memory symbol, address creator) ERC20(name,symbol) {
        _mint(creator, 1000 * 10e18);
    }
}