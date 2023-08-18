import inquirer from "inquirer";
export default async function qs2() {
    const response2 = await inquirer.prompt([{
            name: 'question2',
            type: 'input2',
            message: 'What is the capital of France \n',
        }]);
    const answer2 = response2.question2;
    if (answer2 === 'Paris') {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
