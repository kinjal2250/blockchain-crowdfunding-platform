const Web3 = require('web3');
const { abi: crowdfundingAbi } = require('../abis/Crowdfunding.json');
const { abi: insuranceAbi } = require('../abis/Insurance.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const crowdfundingAddress = 'your_crowdfunding_contract_address';
const insuranceAddress = 'your_insurance_contract_address';

const crowdfundingContract = new web3.eth.Contract(crowdfundingAbi, crowdfundingAddress);
const insuranceContract = new web3.eth.Contract(insuranceAbi, insuranceAddress);

exports.createProject = async (title, description, goal, deadline, creator) => {
    return crowdfundingContract.methods.createProject(title, description, goal, deadline)
        .send({ from: creator });
};

exports.invest = async (projectId, amount, investor) => {
    return crowdfundingContract.methods.invest(projectId)
        .send({ from: investor, value: amount });
};

exports.withdrawFunds = async (projectId, creator) => {
    return crowdfundingContract.methods.withdrawFunds(projectId)
        .send({ from: creator });
};

exports.issuePolicy = async (policyDetails, premium, coverageAmount, insured) => {
    return insuranceContract.methods.issuePolicy(policyDetails, premium, coverageAmount)
        .send({ from: insured });
};

exports.claimPolicy = async (policyId, insured) => {
    return insuranceContract.methods.claimPolicy(policyId)
        .send({ from: insured });
};
