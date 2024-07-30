// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    struct Project {
        address payable creator;
        string title;
        string description;
        uint goal;
        uint raisedAmount;
        uint deadline;
        bool completed;
    }

    Project[] public projects;
    mapping(uint => address[]) public investors;

    event ProjectCreated(uint projectId, address creator, string title, uint goal, uint deadline);
    event InvestmentMade(uint projectId, address investor, uint amount);

    function createProject(string memory _title, string memory _description, uint _goal, uint _deadline) public {
        projects.push(Project({
            creator: payable(msg.sender),
            title: _title,
            description: _description,
            goal: _goal,
            raisedAmount: 0,
            deadline: _deadline,
            completed: false
        }));

        emit ProjectCreated(projects.length - 1, msg.sender, _title, _goal, _deadline);
    }

    function invest(uint _projectId) public payable {
        Project storage project = projects[_projectId];
        require(block.timestamp < project.deadline, "Project deadline has passed");
        require(!project.completed, "Project already completed");

        project.raisedAmount += msg.value;
        investors[_projectId].push(msg.sender);

        emit InvestmentMade(_projectId, msg.sender, msg.value);
    }

    function withdrawFunds(uint _projectId) public {
        Project storage project = projects[_projectId];
        require(msg.sender == project.creator, "Only project creator can withdraw funds");
        require(block.timestamp >= project.deadline, "Project deadline has not passed");
        require(!project.completed, "Project already completed");

        project.completed = true;
        project.creator.transfer(project.raisedAmount);
    }
}
