const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require("./src/page-template");
const myTeam = [];

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

const internQ = [
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

function init() {
  inquirer.prompt(managerQ).then((response) => {
    let newManager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOfficeNumber
    );
    myTeam.push(newManager);
    askOptions();
  });
}

function askOptions() {
  inquirer.prompt(options).then((response) => {
    switch (response.optionsList) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Finish":
        buildPage(myTeam);
        break;
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQ).then((response) => {
    let newEngineer = new Engineer(
      response.engineerName,
      response.engineerID,
      response.engineerEmail,
      response.engineerGitHub
    );
    myTeam.push(newEngineer);
    askOptions();
  });
}

function addIntern() {
  inquirer.prompt(internQ).then((response) => {
    let newIntern = new Intern(
      response.internName,
      response.internID,
      response.internEmail,
      response.internSchool
    );
    myTeam.push(newIntern);
    askOptions();
  });
}

function buildPage(myTeam) {
  fs.writeFile("myteam.html", pageTemplate(myTeam), (err) =>
    err ? console.log(err) : console.log("Succesfully created myteam.html!")
  );
}

init();
