// These are the requirements - inquirer for prompts and others for their data
const inquirer = require("inquirer");
const fs = require("fs");
// const MarkDown = require("./dist/index.html");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// Team member data
const myTeam = [];

// These are the prompts for the user
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

init();

function engPrompt() {
    return inquirer.prompt(engineerPrompt);
}

function mngPrompt() {
    return inquirer.prompt(managerPrompt);
}

function intPrompt() {
    return inquirer.prompt(internPrompt);
}

  // This is the function for applying the data received to the new html file and the template to apply it to

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

  function generateCards() {
    let generatedCards = "";
    for (i = 0; i<myTeam.length; i++) {
        const employee = myTeam[i];
        const role = employee.getRole();
        if (role === "Engineer") {
            generatedCards += `<section class="engineer" id="engineer">
            <h2>${employee.name}<br>Engineer</h2><br>
            <p>ID: ${employee.id}</p><br>
            <p>Email: ${employee.email}</p><br>
            <p>GitHub: ${employee.github}</p>
          </section>`
        }
        if (role === "Intern") {
            generatedCards += `<section class="intern" id="intern">
            <h2>${employee.name}<br>Intern</h2><br>
            <p>ID: ${employee.id}</p><br>
            <p>Email: ${employee.email}</p><br>
            <p>School: ${employee.school}</p>
          </section>`
        }
        if (role === "Manager") {
            generatedCards += `<section class="manager" id="manager">
            <h2>${employee.name}<br>Manager</h2><br>
            <p>ID: ${employee.id}</p><br>
            <p>Email: ${employee.email}</p><br>
            <p>Office: ${employee.officeNumber}</p>
          </section>`
        }
    }
    return generatedCards;
  }

// AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML // THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username // THEN that GitHub profile opens in a new tab
// WHEN I start the application // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team // THEN I exit the application, and the HTML is generated
