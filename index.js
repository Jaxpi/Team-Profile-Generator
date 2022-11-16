// These are the requirements - inquirer for prompts, fs for accessing and altering the file system (creating/altering files and folders), and others for their data (example: the constructor and functions for engineers are defined in Engineer.js, then exported, and imported here to be used so I on;y have to type the word Engineer to reference that file's entire content)
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// This is the array that gets populated by the results of the inquirer functions
const myTeam = [];

// These are the prompts for the user to interact with, they are defined here so I only have to include the const name when I want to reference all this information - type is the type of prompt, name is whatever I want to call that particular prompt, and message is what the user will see
const employeePrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter Employee Name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Employee ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee Email Address",
  },
];
  
const engineerPrompt = [
  {
    type: "input",
    name: "github",
    message: "Enter Employee GitHub Profile Username",
  },
];
  
const internPrompt = [
  {
    type: "input",
    name: "school",
    message: "Enter Employee School Name",
  },
];

const managerPrompt = [
  {
    type: "input",
    name: "office",
    message: "Enter Employee Office Number",
  },
];

// This is the first function to run when the init function is called which starts the program. Inquirer begins and runs that prompt, then based on the response to that prompt the function checks if "role" choice was not "Finished" and if it wasn't then it will insert the response into the empData function and run that function. If the response was "Finished" then it will instead run the generateHtml function
function init() {
inquirer
  .prompt([
    {
      type: "list",
      name: "role",
      message: "Choose Employee Role",
      choices: ["Engineer", "Intern", "Manager", "Finished"],
    },
  ])
  .then(function ({role}) {
    console.log(role);
    if (role != "Finished") {
        empData(role);
    } else {
        //write html with team data
        console.log(myTeam);
        generateHtml()
    }
  })
}

// When the user selects a role other than "Finished" that role is entered into this function and it is run. Inquirer begins the employeePrompts which were defined above the functions. Then it takes the responses to the prompts and waits for the last piece of information for the employee which differs for each role. If the role is Engineer it runs the engPrompt function which returns a github profile name (the other 2 are similar with their own unique prompt), then adds that to the data and creates a new employee of that role type with the provided data, and these are added to the array. After that it runs the init function again (until "Finished" is selected)
function empData(role) {
    inquirer.prompt(employeePrompts)
    .then (async function({name, id, email}) {
        if (role === "Engineer") {
          const {github} = await engPrompt();
          const newEng = new Engineer(name, id, email, github);
          myTeam.push(newEng)
        } else if (role === "Intern") {
            const {school} = await intPrompt();
            const newInt = new Intern(name, id, email, school);
            myTeam.push(newInt)
        } else {
            const {office} = await mngPrompt();
            const newMng = new Manager(name, id, email, office);
            myTeam.push(newMng)
        }
        init();
    })
}

// This starts the program
init();

// These are the functions to run the role-specific prompts that are defined above the functions
function engPrompt() {
    return inquirer.prompt(engineerPrompt);
}

function mngPrompt() {
    return inquirer.prompt(managerPrompt);
}

function intPrompt() {
    return inquirer.prompt(internPrompt);
}

  // This is the function for applying the data received to the new html file and the template to apply it to that runs if Finished is selected in the init function prompt - the newDoc is the content that will populate the file, the index.html is the path/file to be created or updated, and the err is what to alert the user with if something isn't working correctly
function generateHtml() {
  const newDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="dist/style.css">
          <title>Team Profile</title>
      </head>
      
      <body>
          <header>
              <h1>My Team</h1>
          </header>
        
          <main class="teamCards">
              ${generateCards()}                
          </main>
      
          <script src="script.js"></script>
      </body>
      </html>
  `;
  fs.writeFile("index.html", newDoc, (err) => {
      if (err) {
          console.log("Error");
        } else {
          console.log("New html file available to open in browser");
        }
      }
  )
}

// This is the function for creating the individual team members' id cards in the html file, the for loop allows the program to run through all of the objects created in the array and for each of them it creates html codes with their specific data points included (getRole function is defined in the individual js files in the lib folder). The email code contains an href with mailto functionality so when clicked it is added to the "to" section of the user's email program, and the github code contains the url starter for a github profile so when the employee github profile name is added it can be clicked on and direct the user to the appropriate github page. When cards have been created for all the employees in the array then the generated cards are ready to be included in the generateHtml function
function generateCards() {
  let generatedCards = "";
  for (i = 0; i < myTeam.length; i++) {
      const employee = myTeam[i];
      const role = employee.getRole();
      if (role === "Engineer") {
          generatedCards += `<section class="engineer" id="engineer">
          <h2>${employee.name}<br>Engineer</h2><br>
          <p>ID: ${employee.id}</p><br>
          <p>Email: <a href="mailto:${employee.email}" >${employee.email}</a></p><br>
          <p>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
        </section>`
      }
      if (role === "Intern") {
          generatedCards += `<section class="intern" id="intern">
          <h2>${employee.name}<br>Intern</h2><br>
          <p>ID: ${employee.id}</p><br>
          <p>Email: <a href="mailto:${employee.email}" >${employee.email}</a></p><br>
          <p>School: ${employee.school}</p>
        </section>`
      }
      if (role === "Manager") {
          generatedCards += `<section class="manager" id="manager">
          <h2>${employee.name}<br>Manager</h2><br>
          <p>ID: ${employee.id}</p><br>
          <p>Email: <a href="mailto:${employee.email}" >${employee.email}</a> </p><br>
          <p>Office: ${employee.officeNumber}</p>
        </section>`
      }
  }
  return generatedCards;
}