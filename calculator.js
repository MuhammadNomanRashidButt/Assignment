import inquirer from "inquirer";
import add from "./add.js";
import sub from "./sub.js";
import mul from "./mul.js";
import div from "./div.js";
async function calculator() {
    const num1Ans = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter 1st Number : ",
        }
    ]);
    const num2Ans = await inquirer.prompt([{
            name: "num2",
            type: "number",
            message: "Enter 2nd number : ",
        }]);
    const operatorAnswer = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "Choose the operator(+,-,*,/) : ",
            choices: ["+", "-", "*", "/"],
        }]);
    const num1 = num1Ans.num1;
    const num2 = num2Ans.num2;
    const operator = operatorAnswer.operator;
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "*":
            result = mul(num1, num2);
            break;
        case "/":
            result = div(num1, num2);
            break;
        default:
            console.log("Invalid Operator !");
            return;
    }
    console.log("Result is : " + result);
}
calculator();
