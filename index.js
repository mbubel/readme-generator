const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);
};

const generateREADME = (answers) =>
  `${answers.name}`;

// Bonus using async/await and try/catch
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
