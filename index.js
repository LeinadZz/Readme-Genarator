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
        }, 
    ]
)