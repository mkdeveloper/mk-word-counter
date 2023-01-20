#! /usr/bin/env node
import inquirer from "inquirer";
import welcome from "./helper/welcome.js";
import { exit } from "process";
let msg = `
*******************************
   Welcom to Mk Word Counter
*******************************
    `;
await welcome(msg);
async function main() {
    const { sentence } = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: "Please enter a sentence to count its words: ",
        validate: (input) => {
            if (input) {
                return true;
            }
            else {
                return "Worng Entry";
            }
        },
    });
    const wordsArray = sentence.trim().split(" ");
    console.log(`The number of words in the given sentence are: ${wordsArray.length}`);
    const { restart } = await inquirer.prompt({
        name: "restart",
        type: "list",
        choices: ["Yes", "No"],
        message: "Do you want to continue: ",
    });
    if (restart === "Yes") {
        await main();
    }
    else {
        msg = `
*****************************************
   Thank you for using Mk Word Counter
*****************************************
    `;
        await welcome(msg);
        exit(0);
    }
}
main();
