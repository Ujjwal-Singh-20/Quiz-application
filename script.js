document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "The Earth is flat.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the square root of 16?",
            type: "multiple-choice",
            options: ["2", "4", "6", "8"],
            answer: "4"
        },
        {
            question: "Water freezes at 0 degrees Celsius.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "The chemical symbol for gold is Au.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Which planet is known as the Red Planet?",
            type: "multiple-choice",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Humans have four lungs.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the capital of Australia?",
            type: "multiple-choice",
            options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
            answer: "Canberra"
        },
        {
            question: "Light travels faster than sound.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Which planet has the most moons?",
            type: "multiple-choice",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "The Great Wall of China is visible from space.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            type: "multiple-choice",
            options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
            answer: "Harper Lee"
        },
        {
            question: "Bananas grow on trees.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the chemical symbol for water?",
            type: "multiple-choice",
            options: ["O2", "H2O", "CO2", "HO2"],
            answer: "H2O"
        },
        {
            question: "The Eiffel Tower is located in London.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            type: "multiple-choice",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            answer: "Diamond"
        },
        {
            question: "The sun is a star.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the largest ocean on Earth?",
            type: "multiple-choice",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific"
        },
        {
            question: "Venus is the hottest planet in our solar system.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the capital of Japan?",
            type: "multiple-choice",
            options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
            answer: "Tokyo"
        },
        {
            question: "Sharks are mammals.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the smallest prime number?",
            type: "multiple-choice",
            options: ["1", "2", "3", "5"],
            answer: "2"
        },
        {
            question: "The chemical symbol for iron is Fe.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Who painted the Mona Lisa?",
            type: "multiple-choice",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "The human body has four kidneys.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "What is the longest river in the world?",
            type: "multiple-choice",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
        },
        {
            question: "Birds are the only animals with feathers.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the smallest country in the world?",
            type: "multiple-choice",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City"
        },
        {
            question: "The atomic number of carbon is 6.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Who was the first president of the United States?",
            type: "multiple-choice",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            answer: "George Washington"
        },
        {
            question: "The boiling point of water is 100 degrees Celsius.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "What is the capital of Canada?",
            type: "multiple-choice",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            answer: "Ottawa"
        },
        {
            question: "Lightning never strikes the same place twice.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Which organ is responsible for pumping blood throughout the body?",
            type: "multiple-choice",
            options: ["Lungs", "Liver", "Kidneys", "Heart"],
            answer: "Heart"
        },
        {
            question: "The Great Wall of China is over 13,000 miles long.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            type: "multiple-choice",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "Japan"
        },
        {
            question: "The speed of light is faster than the speed of sound.",
            type: "true-false",
            options: ["True", "False"],
            answer: "True"
        },
        {
            question: "Which country is the largest by area?",
            type: "multiple-choice",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia"
        },
        {
            question: "Humans and dinosaurs lived at the same time.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        },
        {
            question: "Which planet is closest to the sun?",
            type: "multiple-choice",
            options: ["Earth", "Venus", "Mercury", "Mars"],
            answer: "Mercury"
        },
        {
            question: "Bats are blind.",
            type: "true-false",
            options: ["True", "False"],
            answer: "False"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.getElementById('submit-quiz');
    submitButton.addEventListener('click', function() {
        let score = 0;
        quizData.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        const resultsContainer = document.getElementById('results');
        resultsContainer.textContent = `You scored ${score} out of ${quizData.length}`;
        localStorage.setItem('quizScore', score);
    });

    const resetButton = document.getElementById('reset-quiz');
    resetButton.addEventListener('click', function() {
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });
        const resultsContainer = document.getElementById('results');
        resultsContainer.textContent = '';
        localStorage.removeItem('quizScore');
    });

    // Load previous score if available
    const previousScore = localStorage.getItem('quizScore');
    if (previousScore) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.textContent = `You scored ${previousScore} out of ${quizData.length}`;
    }
});
