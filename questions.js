import inquirer from "inquirer";
export default async function calculateScore() {
    let score = 0;
    const response1 = await inquirer.prompt([
        {
            name: 'question1',
            type: 'input',
            message: 'What is the capital of Pakistan?\n',
        },
    ]);
    const answer1 = response1.question1;
    if (answer1.toLowerCase() === 'islamabad') {
        console.log("Question 1: Correct!");
        score++;
    }
    else {
        console.log("Question 1: Incorrect.");
    }
    const response2 = await inquirer.prompt([
        {
            name: 'question2',
            type: 'input',
            message: 'What is the capital of France?\n',
        },
    ]);
    const answer2 = response2.question2;
    if (answer2.toLowerCase() === 'paris') {
        console.log("Question 2: Correct!");
        score++;
    }
    else {
        console.log("Question 2: Incorrect.");
    }
    const response3 = await inquirer.prompt([{
            name: 'question3',
            type: 'input',
            message: 'There are how many months in a year? ',
        }]);
    const answer3 = response3.question3;
    if (answer3 == 12) {
        console.log("Question 3: Correct!");
        score++;
    }
    else {
        console.log("Question 3: Incorrect!");
    }
    console.log(`Your final score is: ${score} out of 3`);
}
