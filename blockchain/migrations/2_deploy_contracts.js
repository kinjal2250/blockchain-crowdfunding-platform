const Crowdfunding = artifacts.require("Crowdfunding");
const Insurance = artifacts.require("Insurance");

module.exports = function (deployer) {
    deployer.deploy(Crowdfunding);
    deployer.deploy(Insurance);
};
