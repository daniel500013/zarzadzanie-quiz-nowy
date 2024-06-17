const questions = [
    {
        "question": "Kultura roli cechuje:",
        "answers": [
            {"text": "główny nacisk w tej kulturze jest położony na to by praca została wykonana", "correct": false},
            {"text": "decyzje są podejmowane raczej pod wpływem priorytetów liderów", "correct": false},
            {"text": "jest ukierunkowana na pracę zespołową na grupę osiągającą wspólny cel", "correct": false},
            {"text": "nadmierna biurokracja i to że sprawdza się w otoczeniu stabilnym", "correct": true}
        ]
    },
    {
        "question": "Które z przedstawionych zagadnień stanowiły ograniczenie nurtu klasycznego w zarządzaniu:",
        "answers": [
            {"text": "współczesne rezultaty badań często nie docierają do praktyków w zrozumiałej formie", "correct": false},
            {"text": "zaproponował uniwersalne wytyczne które nie pasują do każdej organizacji", "correct": true},
            {"text": "złożoność zachowania indywidualnego utrudnia jego trafne przewidywanie", "correct": false},
            {"text": "ten nurt bazował na słabości roli jednostki", "correct": true}
        ]
    },
    {
        "question": "Zestaw cech który prowadzi do doskonałości obejmuje:",
        "answers": [
            {"text": "utrzymanie złożonej struktury organizacyjnej", "correct": false},
            {"text": "szybkie rozwiązywanie problemów organizacyjnych", "correct": false},
            {"text": "popieranie autonomii i przedsiębiorczości", "correct": true},
            {"text": "wykorzystanie bezpośredniego podejścia do kierowania", "correct": true}
        ]
    },
    {
        "question": "Analiza luki strategicznej (dokończ zdanie/a):",
        "answers": [
            {"text": "jej celem jest określenie sytuacji konkurencyjnej firmy w sektorze", "correct": false},
            {"text": "odnosi się do zjawisk mierzalnych i powtarzalnych", "correct": true},
            {"text": "jest wykorzystywana do badania strategii dla poszczególnych produktów", "correct": false},
            {"text": "ilustruje dopasowanie strategii firmy do dynamiki zmian otoczenia", "correct": true}
        ]
    },
    {
        "question": "Do ograniczeń spojrzenia behawioralnego należy to że:",
        "answers": [
            {"text": "ludzie mimo szkoleń popełniają błędy w procesach produkcyjnych", "correct": false},
            {"text": "współczesne rezultaty badań z kierunku behawioralnego często nie docierają do praktyków w zrozumiałej formie", "correct": true},
            {"text": "wydajność pracy w przedsiębiorstwie zależy od kapitału ludzkiego", "correct": false},
            {"text": "złożoność zachowania indywidualnego utrudnia jego trafne przewidywanie", "correct": true}
        ]
    },
    {
        "question": "Zmiany w organizacji i zarządzaniu pod wpływem Reenginerringu polegają na tym że:",
        "answers": [
            {"text": "stanowiska z odpowiedzialnością i autonomią zastępowane są przez stanowiska kontrolowane", "correct": false},
            {"text": "Struktury spłaszczone stają się bardziej hierarchiczne", "correct": false},
            {"text": "tradycyjne komórki funkcjonalne są zastępowane zespołami odpowiedzialnymi za dany proces", "correct": true},
            {"text": "kryterium wynagrodzenia odnosi się w większym stopniu do efektów niż aktywności", "correct": true}
        ]
    },
    {
        "question": "Do barier w ustalaniu celów i planowaniu należy:",
        "answers": [
            {"text": "zbyt złożona struktura organizacyjna przedsiębiorstwa", "correct": false},
            {"text": "niewłaściwy system nagradzania", "correct": true},
            {"text": "brak rozwoju przedsiębiorstwa na rynku", "correct": false},
            {"text": "dynamiczne i złożone otoczenie", "correct": true}
        ]
    },
    {
        "question": "Które z wymienionych treści nie dotyczą nurtu naukowego zarządzania:",
        "answers": [
            {"text": "naukowe opracowanie każdego elementu pracy na danym stanowisku", "correct": false},
            {"text": "naukowe określenie postaw i zachowań pracowników", "correct": true},
            {"text": "naukowy dobór pracowników i przygotowanie ich (szkolenie) do wykonywania pracy", "correct": false},
            {"text": "naukowe rozpoznanie sposobów rozwiązywania konfliktów w miescach pracy", "correct": true}
        ]
    },
    {
        "question": "Jednym ze sposobów użycia władzy jest:",
        "answers": [
            {"text": "racjonalna perswazja – przekonanie że wykonanie zadania leży w interesie pracownika", "correct": true},
            {"text": "uwzględnienie opinii grupy ze względu na większą wiedzę", "correct": false},
            {"text": "szczegółowe opisywanie (wyjaśnienie) poleceń do wykonania na stanowisku pracy", "correct": false},
            {"text": "instrumentalne zastosowanie się w celu uzyskania nagrody", "correct": true}
        ]
    },
    {
        "question": "Która/e z wymienionych więzi organizacyjnych została/y źle zdefiniowana:",
        "answers": [
            {"text": "informacyjna – polega na wzajemnym informowaniu się w zakresie realizowanych zadań i podejmowaniu decyzji", "correct": false},
            {"text": "strukturalna – łączy stanowiska pracy w przedsiębiorstwie według rodzaju produktów i usług", "correct": true},
            {"text": "funkcjonalna – łączy stanowiska i grupy stanowisk pracy realizujące różne funkcje w organizacji", "correct": false},
            {"text": "służbowa (hierarhiczna) – łączy kierowników różnych szczebli zarządzania i z ich podwładnymi", "correct": false}
        ]
    },
    {
        "question": "Jednym z założeń teorii Y autorstwa Dauglasa McGregora jest następująca:",
        "answers": [
            {"text": "ludzie są przywiązanie do celów w stopniu odpowiadającym osobistym nagrodom jakie otrzymają za ich osiągniecie", "correct": true},
            {"text": "ludzie wolą by nimi kierowano pragną unikac odpowiedzialności pragną też bezpieczeństwa", "correct": false},
            {"text": "w skrajnych warunkach pracy ludzie dążą do odpowiedzialności oraz ją podejmują", "correct": false},
            {"text": "ludzie nie są zdolni do nowatorskiego podejścia do rozwiązywania problemów organizacji", "correct": false}
        ]
    },
    {
        "question": "Teorie wzmocnienia w procesie motywacji (wskaż prawidłowe wyjaśnienie):",
        "answers": [
            {"text": "głosza że głównym źródłem motywacji są nieuświadomione impulsy wewnętrzne głownie potrzeby", "correct": false},
            {"text": "sugerują że motywacja zależy od siły pragnienia i oczekiwanego prawdopodobieństwa jego zaspokojenia", "correct": false},
            {"text": "zajmują się tym jak skutki poprzedniego działania ludzie wpłyną na ich zachowania i przyszłości", "correct": true},
            {"text": "wyjaśniają dlaczego ludzie wybierają pewne warianty zachowań do zaspokajania swoich potrzeb", "correct": false}
        ]
    }
];

document.getElementById('start-btn').addEventListener('click', startQuiz);

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];

function startQuiz() {
    shuffleArray(questions);
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('counters').style.display = 'flex';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('results-container').classList.add('d-none');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    shuffleArray(question.answers);

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2 class="question font-weight-bold">${question.question}</h2>
        <div class="answers">
            ${question.answers.map(answer => `
                <div class="form-check answer">
                    <input type="checkbox" class="form-check-input" id="answer${currentQuestionIndex}-${answer.text}" value="${answer.correct}">
                    <label class="form-check-label" for="answer${currentQuestionIndex}-${answer.text}">${answer.text}</label>
                </div>
            `).join('')}
        </div>
        <div>
            <button class="btn btn-success d-block" onclick="checkAnswer()">Następne</button>
        </div>
        <br/>
        <div>
            <button class="btn btn-primary d-block" onclick="showResults()">Przejdź do podsumowania</button>
        </div>
    `;

    document.getElementById('question-counter').innerText = `Pytanie ${currentQuestionIndex + 1}/${questions.length}`;
}

function checkAnswer() {
    const answers = document.querySelectorAll('.answer input');
    let isCorrect = true;
    let userAnswerText = '';

    answers.forEach(answer => {
        if (answer.checked) {
            userAnswerText = answer.parentNode.textContent.trim();
            if (answer.value === 'false') {
                isCorrect = false;
            }
        } else if (answer.value === 'true') {
            isCorrect = false;
        }
    });

    userAnswers.push(userAnswerText);

    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    document.getElementById('correct-answers').innerText = `Poprawne: ${correctAnswers}`;
    document.getElementById('incorrect-answers').innerText = `Błedne: ${incorrectAnswers}`;

    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById('quiz-container').classList.add('d-none');
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.remove('d-none');

    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = questions.map((question, index) => `
        <tr>
            <td>${question.question}</td>
            <td style="color: ${isAnswerCorrect(question, userAnswers[index]) ? 'green' : 'red'}">
                ${userAnswers[index]}
            </td>
            <td>${getCorrectAnswer(question)}</td>
        </tr>
    `).join('');
}

function isAnswerCorrect(question, userAnswer) {
    const correctAnswer = getCorrectAnswer(question);
    return userAnswer === correctAnswer;
}

function getUserAnswer(question, index) {
    return userAnswers[index];
}

function getCorrectAnswer(question) {
    return question.answers.find(answer => answer.correct).text;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    userAnswers = [];
    document.getElementById('correct-answers').innerText = 'Poprawne: 0';
    document.getElementById('incorrect-answers').innerText = 'Błędne: 0';
    document.getElementById('quiz-container').innerHTML = '<h2>Kliknij start aby rozpocząć test [Zarządzanie V2]</h2><button id="start-btn" class="btn btn-success">Start</button>';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('counters').style.display = 'none';
    document.getElementById('results-container').classList.add('d-none');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}