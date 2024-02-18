const question = document.getElementById('question');
const choices = document.querySelectorAll('input[name="choice"]');
const labels = document.querySelectorAll('label');
const nextBtn = document.getElementById('next-btn');

// Sample questions and choices
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const questions = [
 
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "let", "const", " All of the above"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        choices: ["Array", "Object", "String", "Function"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following is NOT an arithmetic operator in JavaScript?",
        choices: ["+", "/", "%", ":"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following is a comparison operator in JavaScript?",
        choices: ["++", "+=", "==", "*"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following is a logical operator in JavaScript?",
        choices: ["+", "&&", "/", "=="],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to start an ''else if'' block in JavaScript?",
        choices: ["if", "else", "else if", "then"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to create a loop that repeats a block of code while a specified condition is true in JavaScript?",
        choices: ["for", "while", "loop", "repeat"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        choices: ["func", "define", "function", "def"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to specify parameters in a JavaScript function definition?",
        choices: ["arguments", "parameters", "vars", "params"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is used to add elements to the end of an array in JavaScript?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which array method is used to add one or more elements to the beginning of an array and returns the new length of the array?",
        choices: ["push()", "unshift()", "pop()", "shift()"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which syntax is used to access a property of an object in JavaScript?",
        choices: ["object.property", "object[property]", "object->property", "object::property"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to define a method within an object in JavaScript?",
        choices: ["method", "func", "function", "def"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is commonly used to attach an event listener to an HTML element in JavaScript?",
        choices: ["getElementById()", "addEventListener()", "onClick()", "querySelector()"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is commonly used to attach an event listener to an HTML element in JavaScript?",
        choices: ["getElementById()", "addEventListener()", "onClick()", "querySelector()"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is commonly used to select an HTML element by its ID in JavaScript?",
        choices: ["getElementById()", "querySelector()", "getElementsByClassName()", "getElementByTagName()"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is commonly used to create a new HTML element in JavaScript?",
        choices: ["createElement()", "appendChild()", "removeChild()", "innerHTML()"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to define a function as an asynchronous function in JavaScript?",
        choices: ["async", "function", "await", "callback"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "What keyword is used to define an asynchronous function in JavaScript?",
        choices: ["async", "function", "await", "callback"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which keyword is used to catch exceptions in JavaScript?",
        choices: ["try", "catch", "throw", "error"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which built-in function is commonly used for printing debugging messages to the browser console in JavaScript?",
        choices: ["console.log()", "alert()", "debug()", "print()"],
        answer: 1 // Index of correct choice (starts from 0)
    },
   
    
    // Add more questions here if needed
];
shuffleArray(questions);

let currentQuestionIndex = 0;

// Function to load a question
function loadQuestion(index) {
    const currentQuestion = questions[index];
    question.textContent = currentQuestion.question;
    for (let i = 0; i < choices.length; i++) {
        labels[i].textContent = currentQuestion.choices[i];
    }
}

// Initial question loading
loadQuestion(currentQuestionIndex);
// Event listener for next button
let score = 0;
nextBtn.addEventListener('click', () => {
    // Check if a choice is selected
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        alert("Please select an answer.");
        return;
    }
    // Check answer
    const selectedAnswer = parseInt(selectedChoice.value);
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        // You can handle correct answer feedback here
        score++;
    } 

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        loadQuestion(currentQuestionIndex);
    } else {
        alert("End of questions. Score = " + score);
        // You can redirect or do something else when all questions are answered
        setTimeout(() => {
            window.location.href = "../homepage.html"; // Replace "your_homepage_url_here" with your actual homepage URL
        }, 3000);
    }
});
