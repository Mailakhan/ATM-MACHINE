#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    },
]);
//console.log(pinAnswer);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code, login successfully!");
    //console.log(`Current account balaance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select your option",
            type: "list",
            choices: ["Withdraw", "Check balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount here",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
