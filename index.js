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
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        {
            type : 'input',
            message : "What is your Project title?",
            name : "title",
            validate: (value) =>{
                if(value) {
                    return true
                } else {
                    return ''
                }
            }
        },
        
    ]
)