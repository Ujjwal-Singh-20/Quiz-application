document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            answer: "Albert Einstein"
        },
        {
            question: "What is the only mammal capable of true flight?",
            options: ["Flying squirrel", "Bat", "Ostrich", "Penguin"],
            answer: "Bat"
        },
        {
            question: "Which element is a liquid at room temperature?",
            options: ["Mercury", "Iron", "Gold", "Sodium"],
            answer: "Mercury"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
            answer: "Mitochondria"
        },
        {
            question: "Which country is both in Europe and Asia?",
            options: ["Russia", "Turkey", "Greece", "Ukraine"],
            answer: "Turkey"
        },
        {
            question: "What is the longest bone in the human body?",
            options: ["Femur", "Tibia", "Humerus", "Fibula"],
            answer: "Femur"
        },
        {
            question: "Which organ is responsible for pumping blood throughout the body?",
            options: ["Lungs", "Liver", "Kidneys", "Heart"],
            answer: "Heart"
        },
        {
            question: "Which ocean is the largest by surface area?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific"
        },
        {
            question: "Which element is known for its use in pencils?",
            options: ["Lead", "Carbon", "Graphite", "Silicon"],
            answer: "Graphite"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            answer: "Diamond"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "Japan"
        },
        {
            question: "What is the largest internal organ in the human body?",
            options: ["Heart", "Liver", "Lung", "Kidney"],
            answer: "Liver"
        },
        {
            question: "Which planet is closest to the sun?",
            options: ["Earth", "Venus", "Mercury", "Mars"],
            answer: "Mercury"
        },
        {
            question: "What is the rarest blood type?",
            options: ["A", "B", "AB", "O"],
            answer: "AB"
        },
        {
            question: "Which continent has the most countries?",
            options: ["Asia", "Africa", "Europe", "South America"],
            answer: "Africa"
        },
        {
            question: "Which gas is most abundant in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
            answer: "Nitrogen"
        },
        {
            question: "Which famous ship sank on its maiden voyage in 1912?",
            options: ["Lusitania", "Titanic", "Bismarck", "Queen Mary"],
            answer: "Titanic"
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Venus", "Mars", "Saturn", "Neptune"],
            answer: "Saturn"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
            answer: "Harper Lee"
        },
        {
            question: "What is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            answer: "2"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "HO2"],
            answer: "H2O"
        },
        {
            question: "In what year did the Titanic sink?",
            options: ["1912", "1905", "1915", "1920"],
            answer: "1912"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            answer: "Hydrogen"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            answer: "Diamond"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Earth", "Mars", "Mercury"],
            answer: "Mars"
        },
        {
            question: "What is the main language spoken in Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            answer: "Portuguese"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Ringgit"],
            answer: "Yen"
        },
        {
            question: "Who is known as the 'Father of Computers'?",
            options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
            answer: "Charles Babbage"
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "What is the capital city of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            answer: "Ottawa"
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest"
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1989", "1990", "1987", "1991"],
            answer: "1989"
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            answer: "Au"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
            answer: "Alexander Fleming"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: "Canberra"
        },
        {
            question: "Which famous scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
            answer: "Albert Einstein"
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

