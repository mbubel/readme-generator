const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// README prompts
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the README?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe what this project will accomplish",
    },
    {
      type: "input",
      name: "install",
      message: "How do you install this?",
    },
    {
      type: "input",
      name: "usage",
      message: "What are the uses for this project?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide a link to the test",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Account name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your Email?",
    },
  ]);
};

// README generator
const generateREADME = (answers) =>
`TITLE:
${answers.title}

DESCRIPTION:
${answers.description}

Table of Contents:
-Description
-Installation
-Usage
-Contribution
-License
-Title

Installation:
${answers.install}
    
Usage:
${answers.usage}

 Contribution:
${answers.contribution}

Test:
${answers.test}
https://www.awesomescreenshot.com/video/1877199?key=af9577f5b099f0aaaf2ee2b2f82d2a1c

License:

License MIT License Copyright (c) 2020 Michael Bubel. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
Questions?
Github: ${answers.github}
Email: ${answers.email}
  
  
  `;

const init = async () => {
  console.log("README");
  try {
    const answers = await promptUser();

    const readme = generateREADME(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote to README");
  } catch (err) {
    console.log(err);
  }
};

init();
