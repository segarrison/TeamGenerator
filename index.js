const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require("./src/page-template");

const managerQ = [
  {
    type: "input",
    message: "Please enter the team mananger's name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter the team manager's ID:",
    name: "managerID",
  },
  {
    type: "input",
    message: "Please enter the team manager's email:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter the team manager's office number:",
    name: "managerOfficeNumber",
  },
];

const engineerQ = [
  {
    type: "input",
    message: "Please enter the engineer's name:",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "engineerID",
  },
  {
    type: "input",
    message: "Please enter the engineer's email:",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username:",
    name: "engineerGitHub",
  },
];

const engineerQ = [
  {
    type: "input",
    message: "Please enter the intern's name:",
    name: "internName",
  },
  {
    type: "input",
    message: "Please enter the intern's ID:",
    name: "internID",
  },
  {
    type: "input",
    message: "Please enter the intern's email:",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Please enter the intern's college or university:",
    name: "internSchool",
  },
];

const options = [
  {
    type: "list",
    name: "optionsList",
    message:
      "If you would like to add another memeber of the team, please select which role to add. If you are done, please select Finish to generate your team page. ",
    choices: ["Engineer", "Intern", "Finish"],
  },
];
