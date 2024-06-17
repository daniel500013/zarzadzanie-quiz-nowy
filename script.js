const questions = [
    {
        "question": "Która/e z wymienionych cech nie są charakterystyczne dla liberalnego stylu przewodzenia:",
        "answers": [
            {"text": "kierownik niechętnie przyjmuje przejawy inicjatywy ze strony podwładnych", "correct": false},
            {"text": "kierownik stara się nie podejmować żadnych decyzji i nie uczestniczy w pracach grupy", "correct": false},
            {"text": "kierownik pozostawia pracownikom samodzielność w realizacji ich zadań", "correct": false},
            {"text": "jako środki wpływu na grupę kierownik stosuje: przekonywanie i dyskusję grupową", "correct": true}
        ]
    },
    {
        "question": "Kontrola angażująca pracowników:",
        "answers": [
            {"text": "jest nastawiona na wyniki przekraczające poziom minimalny", "correct": true},
            {"text": "jest charakterystyczna dla wysmukłych struktur i odgórnego oddziaływania", "correct": false},
            {"text": "system nagradzania jest w niej ukierunkowany na wyniki grupowe", "correct": true},
            {"text": "obejmuje współuczestnictwo ograniczone i formalne", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawdziwe zdanie/a:",
        "answers": [
            {"text": "mapa grup strategicznych zakłada, że konkurencja toczy się między przedsiębiorstwami wewnątrz grupy strategicznej", "correct": true},
            {"text": "metody scenariuszowe pozwalają firmie na porównanie własnych możliwości i szans z najbliższymi konkurentami", "correct": false},
            {"text": "macierz BCG jest stosowana w badaniach zmian nieciągłych na rynku", "correct": false},
            {"text": "celem analizy \"5 sił Portera\" jest określenie sytuacji konkurencyjnej firmy w sektorze oraz możliwości osiągania zysku", "correct": true}
        ]
    },
    {
        "question": "Szkoła planistyczna w zarządzaniu strategicznym:",
        "answers": [
            {"text": "preferuje sformalizowany system planowania oraz analizę SWOT", "correct": true},
            {"text": "zakłada, że budowa strategii jest racjonalnym procesem", "correct": true},
            {"text": "poszukuje metod osiągnięcia przewagi konkurencyjnej", "correct": false},
            {"text": "silnie akcentuje kompleksowość podejścia badawczego", "correct": false}
        ]
    },
    {
        "question": "Które zachowanie organizacji jest zgodne z nazwą:",
        "answers": [
            {"text": "adaptacyjne - organizacja usiłuje oddziaływać na stan otoczenia, wywołuje w nim określone zdarzenia", "correct": false},
            {"text": "reaktywne - organizacja respektuje (przyjmuje) oddziaływanie otoczenia w najprostszy sposób", "correct": true},
            {"text": "kreatywne - organizacja podejmuje próby działań dostosowawczych do otoczenia", "correct": false},
            {"text": "ignorujące - organizacja nie śledzi otoczenia, nie respektuje jego oddziaływania", "correct": true}
        ]
    },
    {
        "question": "Do zalet struktury liniowej zalicza się:",
        "answers": [
            {"text": "wysoka centralizacja, uniemożliwiająca pełne wykorzystanie zdolności indywidualnych wykonawców", "correct": false},
            {"text": "brak możliwości pogłębiania specjalizacji w zakresie wszystkich aspektów zarządzania daną komórką", "correct": false},
            {"text": "możliwość bezpośrednich kontaktów ze specjalistami, którymi są przełożeni funkcjonalni", "correct": false},
            {"text": "stworzenie warunków do szybkiego podejmowania decyzji i egzekwowania ich realizacji", "correct": true}
        ]
    },
    {
        "question": "Do metod stymulowania konfliktu należy:",
        "answers": [
            {"text": "postępowanie wbrew regułom - pozbawienie lub udostępnienie określonym osobom lub grupom informacji", "correct": true},
            {"text": "konfrontacja - strony przedstawiają poglądy, rozważają przyczyny konfliktu i poszukują sposobów jego rozwiązania", "correct": false},
            {"text": "odniesienie do przepisów - strony godzą się na rozstrzygnięcie zgodnie z literą prawa", "correct": false},
            {"text": "zmiana struktury organizacji - zmiana składu i reorganizacja zespołów roboczych", "correct": true}
        ]
    },
    {
        "question": "Kultura roli cechuje:",
        "answers": [
            {"text": "główny nacisk w tej kulturze jest położony na to, by praca została wykonana", "correct": false},
            {"text": "decyzje są podejmowane raczej pod wpływem priorytetów liderów", "correct": false},
            {"text": "jest ukierunkowana na pracę zespołową, na grupę osiągającą wspólny cel", "correct": false},
            {"text": "nadmierna biurokracja i to, że sprawdza się w otoczeniu stabilnym", "correct": true}
        ]
    },
    {
        "question": "Które z przedstawionych zagadnień stanowiły ograniczenie nurtu klasycznego w zarządzaniu:",
        "answers": [
            {"text": "współczesne rezultaty badań często nie docierają do praktyków w zrozumiałej formie", "correct": false},
            {"text": "zaproponował uniwersalne wytyczne, które nie pasują do każdej organizacji", "correct": true},
            {"text": "złożoność zachowania indywidualnego utrudnia jego trafne przewidywanie", "correct": false},
            {"text": "ten nurt bazował na słabości roli jednostki", "correct": true}
        ]
    },
    {
        "question": "Zestaw cech, który prowadzi do doskonałości obejmuje:",
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
        "question": "Do ograniczeń spojrzenia behawioralnego należy to, że:",
        "answers": [
            {"text": "ludzie, mimo szkoleń popełniają błędy w procesach produkcyjnych", "correct": false},
            {"text": "współczesne rezultaty badań z kierunku behawioralnego często nie docierają do praktyków w zrozumiałej formie", "correct": true},
            {"text": "wydajność pracy w przedsiębiorstwie zależy od kapitału ludzkiego", "correct": false},
            {"text": "złożoność zachowania indywidualnego utrudnia jego trafne przewidywanie", "correct": true}
        ]
    },
    {
        "question": "Zmiany w organizacji i zarządzaniu pod wpływem Reengineeringu polegają na tym że:",
        "answers": [
            {"text": "stanowiska z odpowiedzialnością i autonomią zastępowane są przez stanowiska kontrolowane", "correct": false},
            {"text": "struktury spłaszczone stają się bardziej hierarchiczne", "correct": false},
            {"text": "tradycyjne komórki funkcjonalne są zastępowane zespołami odpowiedzialnymi za dany proces", "correct": true},
            {"text": "kryterium wynagrodzeń opiera się w większym stopniu do efektów niż do aktywności", "correct": true}
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
            {"text": "naukowe określenie postaw i zachowań pracowników oraz procesów grupowych", "correct": true},
            {"text": "naukowy dobór pracowników i przygotowanie ich (szkolenie) do wykonywania pracy", "correct": false},
            {"text": "naukowe rozpoznanie sposobów rozwiązywania konfliktów w miejscach pracy", "correct": true}
        ]
    },
    {
        "question": "Jednym ze sposobów użycia władzy jest:",
        "answers": [
            {"text": "racjonalna perswazja - przekonanie, że wykonanie zadania leży w interesie pracownika", "correct": true},
            {"text": "wzbudzenie opinii grupy, że wynagrodzenie za wykonanie zadania jest adekwatne", "correct": false},
            {"text": "szczegółowe opisywanie (wyjaśnianie) poleceń do wykonania na stanowisku pracy", "correct": false},
            {"text": "instrumentalne zastosowanie się w celu uzyskania nagrody", "correct": true}
        ]
    },
    {
        "question": "Która/e z wymienionych więzi organizacyjnych została/y źle zdefiniowana:",
        "answers": [
            {"text": "informacyjna – polega na wzajemnym informowaniu się w zakresie realizowanych zadań i podejmowanych decyzji", "correct": false},
            {"text": "strukturalna – łączy stanowiska pracy w przedsiębiorstwie według rodzaju produktów i usług.", "correct": true},
            {"text": "funkcjonalna – łączy stanowiska i grupy stanowisk pracy realizujące różne funkcje w organizacji", "correct": false},
            {"text": "służbowa (hierarchiczna) – łączy kierowników różnych szczebli rządzenia z ich podwładnymi", "correct": false}
        ]
    },
    {
        "question": "Jednym z założeń teorii Y autorstwa Douglasa McGregora jest następująca:",
        "answers": [
            {"text": "ludzie są przywiązani do pracy w stopniu odpowiadającym osobistym nagrodom, jakie otrzymują za ich osiągnięcie", "correct": true},
            {"text": "ludzie wolą, by nimi kierowano, pragną unikać odpowiedzialności, pragną też bezpieczeństwa", "correct": false},
            {"text": "w skrajnych warunkach pracy ludzie dążą do odpowiedzialności oraz i podejmują", "correct": false},
            {"text": "ludzie nie są zdolni do nowatorskiego podejścia do rozwiązywania problemów organizacji", "correct": false}
        ]
    },
    {
        "question": "Teorie wzmocnienia w procesie motywacji (wskaż prawidłowe wyjaśnienie/a):",
        "answers": [
            {"text": "głoszą, że głównym źródłem motywacji są mniej skomplikowane impulsy wewnętrzne, głównie potrzeby", "correct": false},
            {"text": "sugerują, że motywacja zależy od siły pragnienia i oczekiwanego prawdopodobieństwa jego zaspokojenia", "correct": false},
            {"text": "zajmują się tym, jak skutki poprzedniego działania ludzi wpłyną na ich zachowania w przyszłości.", "correct": true},
            {"text": "wyjaśniają, dlaczego ludzie wybierają pewne warianty zachowań do zaspokojenia swoich potrzeb", "correct": false}
        ]
    },
    {
        "question": "Do przyczyn niepowodzeń w planowaniu należy:",
        "answers": [
            {"text": "przygotowywanie planów przez grupę odrębną, nie uczestniczą w zarządzaniu firmą", "correct": true},
            {"text": "opracowywanie zbyt prostych planów podatnych na zmiany w otoczeniu", "correct": false},
            {"text": "przyjmowanie zmian koniunkturalnych na rynku za pewnik i na tej podstawie opracowywanie kolejnych planów", "correct": false},
            {"text": "nacisk na zmienne ilościowe i istniejące trendy, nie do końca wiarygodne", "correct": true}
        ]
    },
    {
        "question": "Problem, żeby mógł być problemem decyzyjnym musi spełniać następujące warunki:",
        "answers": [
            {"text": "liczba rozwiązań problemu musi być duża lub nieokreślona", "correct": true},
            {"text": "rozwiązania danego problemu dostarczają korzyści finansowych", "correct": false},
            {"text": "nie wszystkie warianty rozwiązania danego problemu są możliwe i realne.", "correct": true},
            {"text": "wybór wariantu najlepszego rozwiązania danego problemu jest łatwym procesem", "correct": false}
        ]
    },
    {
        "question": "Do wad struktury liniowo-sztabowej należy:",
        "answers": [
            {"text": "konflikty między kierownikami liniowymi a kierownikami komórek sztabowych i sztabowcami", "correct": true},
            {"text": "korzystanie przez kierowników liniowych z metod ilościowych w zarządzaniu poszczególnymi procesami", "correct": false},
            {"text": "przestrzeganie zasady jednoosobowego kierownictwa, zachowując jasny układ władzy", "correct": false},
            {"text": "tendencje do utożsamiania się komórek sztabowych z kierownictwem sztabowym", "correct": true}
        ]
    },
    {
        "question": "W erze gospodarki postindustrialnej (wskaż prawidłowe zdanie/a):",
        "answers": [
            {"text": "zwiększa się znaczenie tradycyjnych dziedzin przemysłu a maleje potęga sektora usług", "correct": false},
            {"text": "wysokiej jakości towary i usługi dostarczane są dla indywidualnych klientów", "correct": true},
            {"text": "stopniowo zwycięża pogląd, że zysk jest środkiem, a nie celem działania", "correct": true},
            {"text": "nowoczesne firmy rezygnują ze struktur spłaszczonych na rzecz scentralizowanych", "correct": false}
        ]
    },
    {
        "question": "Do czynników wpływających na rozpiętość i zasięg kierowania należą:",
        "answers": [
            {"text": "zakres występowania standardowych procedur w przedsiębiorstwie", "correct": true},
            {"text": "rodzaj występujących więzi organizacyjnych", "correct": false},
            {"text": "kompetencje przełożonych i podwładnych w zakresie realizowanych prac", "correct": true},
            {"text": "zainteresowania zawodowe pracowników i kierowników", "correct": false}
        ]
    },
    {
        "question": "Wskaż prawidłowe zdanie/a:",
        "answers": [
            {"text": "kolejność nurtów w zarządzaniu była następująca: klasyczny, integrujący, behawioralny, ilościowy", "correct": false},
            {"text": "wg teorii ERG Clayton P. Alderfer potrzeby dzieli się na: egzystencji, kontaktów społecznych i przynależności", "correct": false},
            {"text": "jednostkowe potrzeby motywacji wg D. McClellanda dzieli się na: władzy, afiliacji, osiągnięć", "correct": true},
            {"text": "kultura organizacyjna pełni funkcję: integracyjną, percepcyjną i adaptacyjną.", "correct": true}
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