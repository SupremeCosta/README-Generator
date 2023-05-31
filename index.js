const inquirer = require('inquirer');
const fs = require('fs');

const licenses = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
};

/* Pass the questions to the user */
inquirer
  .prompt([
    { type: 'input', name: 'title', message: 'What is the project title?' },
    { type: 'input', name: 'description', message: 'Enter a description:' },
    { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
    { type: 'input', name: 'usage', message: 'Enter usage information:' },
    { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Enter test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license:', choices: Object.keys(licenses) },
    { type: 'input', name: 'username', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });