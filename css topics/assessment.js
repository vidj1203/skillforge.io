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
        question: "What CSS property is used to control the spacing between characters in a text?",
        choices: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to set the style of text decoration like underline, overline, and line-through?",
        choices: ["text-decoration-style", "text-style", "decoration-style", "text-decoration"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS property is used to align text horizontally within its container?",
        choices: ["text-align", "text-decoration", "line-height", "vertical-align"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to remove the underline from a hyperlink?",
        choices: ["text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following CSS color representations is used to define colors using hexadecimal values?",
        choices: ["RGB", "HSL", "Hex", "Name"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "What does the RGB color model stand for in CSS?",
        choices: ["Red, Green, Blue", "Random, Gradient, Brightness", " Real, Gradient, Brightness", "Red, Gradient, Blue"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS property is used to specify the background color of an element?",
        choices: ["color", "background-color", "background-image", "background"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to specify a background image for an element?",
        choices: ["image", "background-url", "background-image", "image-url"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS property is used to change the size of an element's font?",
        choices: ["font-size", "text-size", "font-style", "text-style"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to add space between the borders of an element and its content?",
        choices: ["margin", "padding", "border-space", "spacing"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What type of value does the 'font-family' property in CSS usually accept to specify the font to be used for text?",
        choices: ["String", "Number", "Color", "Boolean"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property can accept values such as solid, dashed, and dotted to define the style of a border?",
        choices: ["border-color", "border-style", "border-width", "border"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What type of CSS selector targets an element based on its unique identifier?",
        choices: [" Class selector", " Element selector", "ID selector", "Attribute selector"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS selector targets all elements of a specific type?",
        choices: [" Class selector", "Universal selector", "Descendant selector", "Grouping selector"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What is a declaration in CSS?",
        choices: ["A rule that defines the style of an element", " A statement that assigns a value to a property", " A function that manipulates the layout of a webpage", "A tag used to create new elements in HTML"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which symbol separates a CSS property from its value within a declaration?",
        choices: ["Colon (:)", " Semicolon (;)", "Period (.)", "Comma (,)"],
        answer: 1 // Index of correct choice (starts from 0)
    }, 
    {
        question: "What CSS property is used to specify the type of rendering box used for an element?",
        choices: ["position", "display", "float", "visibility"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which value of the display property makes an element behave like an inline-level element but still respects margin and padding?",
        choices: ["block", "inline", "inline-block", "flex"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS property is used to specify the positioning method of an element?",
        choices: ["position", "top", "left", "display"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which value of the position property positions an element relative to its normal position in the document flow?",
        choices: ["static", "relative", "absolute", "fixed"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What is CSS Grid Layout?",
        choices: [" A method for creating responsive designs using flexible grids", "A technique for vertically centering elements on a webpage", "A framework for building animations and transitions in CSS", "A way to organize elements into rows and columns for layout purposes"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to define the number of columns in a CSS grid?",
        choices: ["grid-column", "grid-template-columns", "grid-row", "grid-template-rows"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What is a primary advantage of using CSS Grid Layout for creating layouts?",
        choices: [" It only supports a fixed number of columns and rows", "It is only suitable for simple, one-dimensional layouts", "It provides precise control over the placement and alignment of elements", "It requires extensive use of media queries for responsiveness"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to specify the size of the gutters between grid items in a CSS grid layout?",
        choices: ["grid-gap", "grid-column-gap", "grid-row-gap", "gap"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "What is the term used in CSS to describe the area that surrounds the content of an element, including padding, borders, and margins?",
        choices: ["Inner space", "Content area", "Box model", "Border space"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to add space inside an element's border, between the content and the border itself?        ",
        choices: ["margin", "border", "padding", "spacing"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "In CSS, what layout model provides a more efficient way to layout, align, and distribute space among items in a container, even when their size is unknown or dynamic?",
        choices: ["Grid Layout", "Flexbox", "Float Layout", "Table Layout"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to specify how flex items are aligned in the flex container along the cross-axis?",
        choices: ["justify-content", "align-items", "flex-direction", "align-content"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS property is used to align flex items along the main axis of the flex container?",
        choices: ["justify-content", "align-items", "flex-direction", "align-content"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "Which value of the justify-content property in CSS aligns flex items to the end of the flex container along the main axis?",
        choices: ["flex-start", "flex-end", "center", "space-between"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What feature in CSS allows for the gradual change of property values over a specified duration?",
        choices: ["Animations", "Transitions", "Transformations", "Keyframes"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to define the CSS property or properties to which a transition effect should be applied?",
        choices: ["transition-duration", "transition-property", "transition-timing-function", "transition-delay"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS at-rule is used to define animations by gradually changing from one set of CSS styles to another?",
        choices: ["@transition", "@animation", "@transform", "@keyframes"],
        answer: 4 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is used to specify the name of the keyframes animation that should be applied to an element?",
        choices: ["animation-name", "animation-duration", "animation-timing-function", "animation-delay"],
        answer: 1 // Index of correct choice (starts from 0)
    },
    {
        question: "What does it mean for a web design to be ''responsive''?",
        choices: ["It means the design is visually appealing", " It means the design adjusts and adapts to different screen sizes and devices", "It means the design is interactive", "It means the design has smooth animations"],
        answer: 2 // Index of correct choice (starts from 0)
    },
    {
        question: "Which CSS property is commonly used to create responsive layouts by specifying the size of elements relative to the viewport width?",
        choices: ["width", "height", "max-width", "viewport-width"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "What CSS feature allows you to apply different styles based on characteristics of the device such as its screen width, height, or orientation?",
        choices: ["CSS Filters", "Flexbox", "Media Queries", "CSS Transitions"],
        answer: 3 // Index of correct choice (starts from 0)
    },
    {
        question: "Which of the following media features targets the width of the viewport?",
        choices: ["max-height", "min-width", "device-width", "orientation"],
        answer: 3 // Index of correct choice (starts from 0)
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
