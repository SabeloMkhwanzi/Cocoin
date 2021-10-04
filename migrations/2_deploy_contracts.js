const Cocoin = artifacts.require("Cocoin");

module.exports = function (deployer) {
  deployer.deploy(Cocoin, 1000000);
};
