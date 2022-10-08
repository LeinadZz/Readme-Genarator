// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const genarateTemplate = require('./utility/template.js')

// Inquirer Questions
const questions = [
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
            message : "Please add installation intructions:",
            name : "installation",
        },
        {
            type : 'input',
            message : "Did anyone contribute to this project? If yes, please enter names:",
            name : "contribution",
        },
        {
            type : 'input',
            message : "Please add any guidelines:",
            name : "guideline",
        },
        {
            type : 'input',
            message : "Please add test instructions:",
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
    ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('Template was Generated !');
    });
}

async function init() {
    const answers = await inquirer.prompt(questions);
    const template = genarateTemplate(answers);
    writeToFile('./exported/exported_README.md', template);
}

init();