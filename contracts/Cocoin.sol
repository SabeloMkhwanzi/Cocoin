
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cocoin is ERC20{
  
  constructor(uint256 _Supply) ERC20("Cocoin", "CCT") {
        _mint(msg.sender, _Supply * (10 ** decimals()));
    }
}
