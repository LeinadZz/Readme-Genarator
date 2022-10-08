function genarateTemplate(data) {
    const template = templateMarkdown(data);
    return formatText(template);
}

function templateMarkdown(data) {
    return `# ${data.title}

${getBadge(data.license)}

${data.description}

${getTable(data.contribution, data.instruction)}

${getSection('Installation', data.installation)}

${getSection('Guidelines', data.guideline)}

${getSection('License',`This project is licensed under the [${data.license}](${getLicenseLink(data.license)}).`)}

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

function getBadge(license) {
    return `[![${license}](https://img.shields.io/badge/License-${formatURLText(license)}-brightGreen)](${getLicenseLink(license)})`;
}

function formatURLText(text) {
    return text.replace(/ /g, '%20');
}

function formatText(text) {
    return text.split('\\n').join('\n');
}

function getLicenseLink(license) {
    switch (license) {
        case 'MIT License':
            return 'https://opensource.org/licenses/MIT'
        case 'ISC License':
            return 'https://opensource.org/licenses/ISC'
    }
}

module.exports = genarateTemplate;