// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Insurance {
    struct Policy {
        address insured;
        string policyDetails;
        uint premium;
        uint coverageAmount;
        bool claimed;
    }

    Policy[] public policies;

    event PolicyIssued(uint policyId, address insured, string policyDetails, uint premium, uint coverageAmount);
    event PolicyClaimed(uint policyId, address insured);

    function issuePolicy(string memory _policyDetails, uint _premium, uint _coverageAmount) public {
        policies.push(Policy({
            insured: msg.sender,
            policyDetails: _policyDetails,
            premium: _premium,
            coverageAmount: _coverageAmount,
            claimed: false
        }));

        emit PolicyIssued(policies.length - 1, msg.sender, _policyDetails, _premium, _coverageAmount);
    }

    function claimPolicy(uint _policyId) public {
        Policy storage policy = policies[_policyId];
        require(msg.sender == policy.insured, "Only insured can claim the policy");
        require(!policy.claimed, "Policy already claimed");

        policy.claimed = true;
        payable(policy.insured).transfer(policy.coverageAmount);

        emit PolicyClaimed(_policyId, msg.sender);
    }

    receive() external payable {}
}
