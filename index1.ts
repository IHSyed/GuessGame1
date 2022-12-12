#! usr/bin/env node

export{};

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise ((res) => {
        setTimeout(res, 5000)
    })
}

async function welcome() {

    let title = chalkAnimation.neon ("This is a simple Guessing Game, based on Randomly Generated Numbers");
    await sleep();
    title.stop();
    
}
welcome()

//We Start the Main Functionality here.

let rNum = Math.ceil(Math.random() * 10);

async function askQuestion() {
    
    let ans = await inquirer
        .prompt([
        {
            type: "number",
            name: "input",
            message: ("Enter any Number between 1 and 10, both inclusive :"),
        },
        
    ]);

if (ans.input<1 || ans.input >10) {
    console.log(chalk.red(" Please Enter a Valid Number between 1 and 10"));

}

else if (rNum === ans.input) {
    console.log(chalk.greenBright("Bingo. You guessed the Correct Number. Which is :" + " " + ans.input));
}

else if(rNum < ans.input){

    console.log (chalk.yellowBright("Sorry! Your Guess is Higher than the Randomly generated Number"));

}

else if(rNum > ans.input) {
    console.log(chalk.magentaBright( "Sorry! Your guess is Lower than the Randomly generated Number.." ))
}

}

askQuestion()

async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "DO YOU WANT TO CONTINUE WITH THE GUESSING GAME ??. Press y or n. "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES");
}

startAgain();


