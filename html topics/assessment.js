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
        question: "What is the purpose of using headings in HTML?",
        choices: ["To make text bold and larger", "To structure and organize content", "To add decorative elements to the page", "To align text within a webpage"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following is the correct HTML tag for the largest heading?",
        choices: ["<h1>", "<h2>", "<h3>", "<h4>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to define a paragraph?",
        choices: ["<div>", "<para>", "<p>", "<paragraph>"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "What is the default alignment of text within a paragraph in HTML?",
        choices: ["Left-aligned", "Center-aligned", "Right-aligned", "Justified"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML attribute is used to specify the URL of the linked page?",
        choices: ["href", "src", "link", "url"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<a>", "<link>", "<url>", "<href>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to insert an image?",
        choices: ["<img>", "<image>", "<picture>", "<img src='' ''>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the URL of the image in the <img> tag?",
        choices: ["url", "src", "link", "href"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        choices: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the starting number of an ordered list?",
        choices: ["type", "start", "value", "list"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML attribute is used to specify an alternate text for an image?",
        choices: ["alt", "title", "src", "href"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to provide additional information about an element, often shown as a tooltip when hovering over the element?",
        choices: ["alt", "title", "src", "href"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to emphasize text?",
        choices: ["<strong>", "<b>", "<em>", "<i>"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to make text bold?",
        choices: ["<strong>", "<b>", "<em>", "<i>"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to define a table?",
        choices: ["<table>", "<tr>", "<td>", "<th>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to define a table row?",
        choices: ["<table>", "<tr>", "<td>", "<th>"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML tag is used to create a form?",
        choices: ["<form>", "<input>", "<button>", "<label>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the HTTP method used when submitting the form?",
        choices: ["method", "action", "type", "target"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to create a text input field?",
        choices: ["<input type=''text''>", "<textarea>", "<input type=''textarea''>", "<textinput>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the maximum length of characters allowed in a text input field?",
        choices: ["minlength", "maxlength", "length", "size"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to create a password input field?",
        choices: ["<input type=''password''>", "<password>", "<input type=''text''>", "<passwordinput>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the minimum length of characters allowed in a password input field?",
        choices: ["length", "maxlength", "size", "minlength"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to create a radio button?",
        choices: ["<input type=''radio''>", "<radio>", "<input type=''checkbox''>", "<input type=''button''>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to group radio buttons together?",
        choices: ["group", "name", "value", "checked"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to create a checkbox?",
        choices: ["<input type=''checkbox''>", "<checkbox>", "<input type=''radio''>", "<input type=''button''>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the value of a checkbox?",
        choices: ["value", "checked", "name", "type"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to create a submit button?",
        choices: ["<input type=''submit''>", "<button type=''submit''>", "<submit>", "<button>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the text displayed on a submit button?",
        choices: ["text", "value", "submit", "label"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to display an image?",
        choices: ["<img>", "<image>", "<picture>", "<img src=''''>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the URL of the image in the <img> tag?",
        choices: ["url", "src", "link", "href"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to embed a video?",
        choices: ["<video>", "<embed>", "<source>", "<media>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the URL of the video file in the <video> tag?",
        choices: ["src", "url", "href", "link"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML element is used to embed audio content?",
        choices: ["<audio>", "<sound>", "<music>", "<mp3>"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the URL of the audio file in the &lt;audio&gt; tag?",
        choices: ["src", "url", "file", "path"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which method is commonly used to integrate HTML code into another HTML document?",
        choices: ["Using the <iframe> element", "Using the <embed> element", "Using the <script> element", "Using the <link> element"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which attribute is used to specify the URL or location of the external HTML file to be integrated?",
        choices: ["source", "href", "url", "link"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML5 element is used to define a section of a document?",
        choices: ["<div>", "<section>", "<article>", "<header>"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which HTML5 element is used to define the footer of a document or a section?",
        choices: ["<footer>", "<section>", "<aside>", "<nav>"],
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
        }, 1000);
    }
});
