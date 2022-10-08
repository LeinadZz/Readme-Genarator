// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer Questions
inquirer.prompt(
    [
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return 'Please insert project title'
                }
            }
        },
        {
            type : 'input',
            message : "Write a brief description of your project.",
            name : "description",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return 'Please write a description'
                }
            }
        },
        {
            type : 'input',
            message : "Please add installation intructions",
            name : "installation",
        },
        {
            type : 'input',
            message : "Did anyone contribute to this project? If yes, please enter names",
            name : "contribution",
        },
        {
            type : 'input',
            message : "Please add any guidelines",
            name : "guideline",
        },
        {
            type : 'input',
            message : "Please add test instructions",
            name : "instruction",
        },
        {
            type : 'list',
            message : "What license did you use for this project?",
            name : "license",
            choices: [
                'MIT License',
                'ISC License',
            ]
        },
        {
            type : 'input',
            message : "What is your GitHub username?",
            name : "username",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return 'Please enter your username'
                }
            }
        },
        {
            type : 'input',
            message : "What is your email?",
            name : "email",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return 'Please enter your email'
                }
            }
        }
    ]
)

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('Template was Generated !');
    });
}

function templateMarkdown(data) {
    return `# ${data.title}

    ${getBadge(data.license)}

    ${data.description}

    ${getTable(data.contribution, data.instruction)}

    ${getSection('Installation', data.installation)}

    ${getSection('Guidelines', data.guideline)}

    ${getSection('License', `This project is licensed under the [${data.license}](${getLicenseLink(data.license)}).`)}

    ${getSection('Contributing', data.contribution)}

    ${getSection('Instructions', data.instruction)}

    ${getSection('Questions', `For additional questions, feel free to [send me an email](mailto:${data.email}). You can also find more information on [my GitHub](https://guthub.com/${data.username}). `)}
    `
}

function getTable(contribution, instruction) {
    return `## Table of Contents
    
    - [Installation](#installation)
    - [Guidelines](#guideline)
    - [License](#license)
    - [Contributing](#contribution)
    - [Instructions](#instruction)
    - [Questions](#Questions)`;
}

function getSection(title, body) {
    return `## ${title}
    ${body}`;
}

function getLicenseLink(license) {
    switch (license) {
        case 'MIT License':
            return 'https://opensource.org/licenses/MIT'
        case 'ISC License':
            return 'https://opensource.org/licenses/ISC'
    }
}

async function init() {
    const answers = await inquirer.prompt(questions);
    const template = templateMarkdown(answers);
    writeToFile('./exported/exported_README.md', template);
}

init();