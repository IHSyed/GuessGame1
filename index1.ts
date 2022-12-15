#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Console } from "console";

const sleep = () => {
    return new Promise ((res) => {
        setTimeout(res, 5000)
    })
}

async function welcome() {

    let title = chalkAnimation.neon ("This is a simple Guessing Game, based on Randomly Generated Numbers, designed by Iqbal Hussain Syed, Section F, Islamabad");
    await sleep();
    title.stop();
    
}

welcome();

//We Start the Main Functionality here.

var count = 5;

async function askQuestion() {
    console.log(`You have a total of ${count} chances to guess the correct Number`);

let rNum = Math.ceil(Math.random() * 10 + 1);

do {
    
    count--;
    console.log(`Number of Guesses left ${count + 1}.`);

let ans = await inquirer
    .prompt([
    {
        type: "number",
        name: "input",
        message: ("Enter any Number between 1 and 10, both inclusive :"),
    }
    
]);

if (ans.input<1 || ans.input >10) {
console.log(chalk.red(" Please Enter a Valid Number between 1 and 10"));
}

else if (rNum === ans.input) {
console.log(chalk.greenBright("Bingo. You guessed the Correct Number, which is :" + " " + ans.input));
console.log(chalk.bgBlueBright("You won. GAME OVER"));
return;
}

else if(rNum < ans.input){
console.log (chalk.yellowBright(`Sorry! Your Guessed number ${ans.input} is Higher than the Randomly generated Number..`));
}

else if(rNum > ans.input) {
console.log(chalk.magentaBright(`Sorry! Your guessed no.${ans.input} is Lower than the Randomly generated Number..` ));
}

}
while (count > 0)

if (count == 0 ) {
console.log(chalk.bgCyanBright("GAME OVER"));
}
}

//askQuestion();

async function startAgain() {
    do {
        count = 5;
        console.clear();
        await welcome();
        await askQuestion();
        var again = await inquirer
            .prompt([
                {
                type: "input",
                name: "restart",
                message: "DO YOU WANT TO CONTINUE WITH THE GUESSING GAME ??. Press Y or N !! "
                }
    ])
    }


while (again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES");
}

startAgain();







