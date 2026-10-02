document.addEventListener("DOMContentLoaded", () => {

    const wheel = document.getElementById("wheel");
    const spinButton = document.getElementById("spinButton");
    const resultBox = document.getElementById("result");
    const scoreEl = document.getElementById("score");

    const emailCard = document.getElementById("emailCard");
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("emailInput");
    const emailMessage = document.getElementById("emailMessage");

    const gameContent = document.getElementById("gameContent");
    const intro = document.getElementById("intro");
    const wheelZone = document.getElementById("wheelZone");

    const attemptsUsedEl = document.getElementById("attemptsUsed");
    const remainingEl = document.getElementById("remaining");

    const blockedCard = document.getElementById("blockedCard");
    const countdown = document.getElementById("countdown");
    const chosenGiftText = document.getElementById("chosenGiftText");

    const quiz = document.getElementById("quiz");
    const quizCategory = document.getElementById("quizCategory");
    const questionEl = document.getElementById("question");
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
    const questionTime = document.getElementById("questionTime");

    const choixElements = [
        document.getElementById("choix0"),
        document.getElementById("choix1"),
        document.getElementById("choix2"),
        document.getElementById("choix3")
    ];

    const specialCard = document.getElementById("specialCard");
    const specialTitle = document.getElementById("specialTitle");
    const specialText = document.getElementById("specialText");
    const specialButton = document.getElementById("specialButton");

    const riskChoice = document.getElementById("riskChoice");
    const acceptRisk = document.getElementById("acceptRisk");
    const refuseRisk = document.getElementById("refuseRisk");

    const giftShop = document.getElementById("giftShop");
    const giftList = document.getElementById("giftList");
    const finalScore = document.getElementById("finalScore");
    const giftMessage = document.getElementById("giftMessage");

    const questions = {

        code: [
            {
                question: "En JavaScript, que retourne typeof null ?",
                choix: ["null", "undefined", "object", "boolean"],
                bonneReponse: 2
            },
            {
                question: 'Que retourne 2 + "2" ?',
                choix: ["4", "22", '"4"', "Une erreur"],
                bonneReponse: 1
            },
            {
                question: "À quoi sert === ?",
                choix: [
                    "Comparer uniquement les valeurs",
                    "Comparer uniquement les types",
                    "Comparer la valeur et le type",
                    "Affecter une valeur"
                ],
                bonneReponse: 2
            },
            {
                question: "Quelle méthode transforme du JSON en objet JavaScript ?",
                choix: [
                    "JSON.stringify()",
                    "JSON.parse()",
                    "JSON.object()",
                    "JSON.convert()"
                ],
                bonneReponse: 1
            }
        ],

        creatif: [
            {
                question: "Que signifie UX ?",
                choix: [
                    "User Experience",
                    "User Extension",
                    "Universal Experience",
                    "User Export"
                ],
                bonneReponse: 0
            },
            {
                question: "Que signifie UI ?",
                choix: [
                    "User Internet",
                    "User Interface",
                    "Universal Interface",
                    "User Interaction"
                ],
                bonneReponse: 1
            },
            {
                question: "Quel format est adapté à un logo vectoriel ?",
                choix: ["JPG", "PNG", "SVG", "GIF"],
                bonneReponse: 2
            },
            {
                question: "Quel outil est utilisé pour concevoir des interfaces web ?",
                choix: ["Figma", "Git", "MySQL", "Node.js"],
                bonneReponse: 0
            }
        ],

        ia: [
            {
                question: "Que signifie LLM ?",
                choix: [
                    "Large Language Model",
                    "Logical Learning Machine",
                    "Language Logic Manager",
                    "Large Learning Machine"
                ],
                bonneReponse: 0
            },
            {
                question: "Qu'est-ce qu'un prompt ?",
                choix: [
                    "Une instruction donnée à une IA",
                    "Une base de données",
                    "Un langage de programmation",
                    "Un serveur"
                ],
                bonneReponse: 0
            },
            {
                question: "Qu'est-ce qu'une hallucination d'une IA ?",
                choix: [
                    "Une panne",
                    "Une réponse inventée ou incorrecte mais plausible",
                    "Une image générée",
                    "Une erreur de connexion"
                ],
                bonneReponse: 1
            },
            {
                question: "Une IA générative peut notamment :",
                choix: [
                    "Générer du texte",
                    "Générer des images",
                    "Générer du code",
                    "Toutes les réponses précédentes"
                ],
                bonneReponse: 3
            }
        ],

        marketing: [
            {
                question: "Que signifie SEO ?",
                choix: [
                    "Search Engine Optimization",
                    "Social Engine Online",
                    "Search Email Optimization",
                    "System Engine Optimization"
                ],
                bonneReponse: 0
            },
            {
                question: "Quel est l'objectif principal du SEO ?",
                choix: [
                    "Améliorer la visibilité dans les moteurs de recherche",
                    "Créer des logos",
                    "Envoyer des SMS",
                    "Héberger un site"
                ],
                bonneReponse: 0
            },
            {
                question: "Que signifie CTA ?",
                choix: [
                    "Click To Access",
                    "Call To Action",
                    "Content To Advertise",
                    "Create Target Audience"
                ],
                bonneReponse: 1
            },
            {
                question: "Qu'est-ce qu'une cible marketing ?",
                choix: [
                    "Le groupe que l'entreprise souhaite atteindre",
                    "Une publicité",
                    "Un logo",
                    "Un moteur de recherche"
                ],
                bonneReponse: 0
            }
        ],

        nws: [
            {
                question: "Quel est le niveau du titre Chef de projets digitaux ?",
                choix: [
                    "Niveau 5 - Bac+2",
                    "Niveau 6 - Bac+3",
                    "Niveau 7 - Bac+5",
                    "Niveau 8 - Bac+8"
                ],
                bonneReponse: 1
            },
            {
                question: "Quelle spécialisation ne fait pas partie des Bachelor présentés ?",
                choix: [
                    "Communication graphique",
                    "Marketing et Communication",
                    "Développement Web",
                    "Cybersécurité"
                ],
                bonneReponse: 3
            },
            {
                question: "Pour intégrer une formation Bac+3 en alternance, quel niveau faut-il généralement ?",
                choix: [
                    "Brevet",
                    "Bac uniquement",
                    "Bac ou Bac+2",
                    "Bac+5"
                ],
                bonneReponse: 2
            },
            {
                question: "L'admission est-elle obligatoirement liée à Parcoursup ?",
                choix: [
                    "Oui",
                    "Non, la NWS possède sa propre procédure",
                    "Oui uniquement en alternance",
                    "Oui uniquement après Bac+3"
                ],
                bonneReponse: 1
            }
        ],

        risques: [
            {
                question: "Quelle est la capitale de la France ?",
                choix: ["Lyon", "Paris", "Marseille", "Bordeaux"],
                bonneReponse: 1
            },
            {
                question: "Quelles sont les couleurs du drapeau français ?",
                choix: [
                    "Bleu, blanc, rouge",
                    "Vert, blanc, rouge",
                    "Rouge, jaune, bleu",
                    "Bleu, jaune, rouge"
                ],
                bonneReponse: 0
            },
            {
                question: "Quelle est la devise de la République française ?",
                choix: [
                    "Travail, Famille, Patrie",
                    "Liberté, Égalité, Fraternité",
                    "Unité, Liberté, Justice",
                    "Honneur et Patrie"
                ],
                bonneReponse: 1
            },
            {
                question: "Quel fleuve traverse Paris ?",
                choix: [
                    "La Loire",
                    "Le Rhône",
                    "La Seine",
                    "La Garonne"
                ],
                bonneReponse: 2
            }
        ]
    };

    const segments = [
        { id: "code", label: "Défi code" },
        { id: "creatif", label: "Défi créatif" },
        { id: "ia", label: "Défi IA" },
        { id: "marketing", label: "Défi Marketing" },
        { id: "nws", label: "Quiz NWS" },
        { id: "bonus", label: "Bonus" },
        { id: "risques", label: "Risques" }
    ];

    const gifts = [
        { name: "Sticker NWS", price: 100 },
        { name: "Stylo NWS", price: 200 },
        { name: "Café", price: 200 },
        { name: "Bloc-notes NWS", price: 300 },
        { name: "Tote bag NWS", price: 400 },
        { name: "Gobelet NWS", price: 500 },
        { name: "T-shirt NWS", price: 600 },
        { name: "Gros lot NWS", price: 700 }
    ];

    const segmentAngle = 360 / segments.length;
    const MAX_ATTEMPTS = 3;
    const WAIT_TIME = 24 * 60 * 60 * 1000;

    let currentRotation = 0;
    let score = 0;
    let isSpinning = false;
    let currentQuestion = null;
    let currentCategory = null;
    let questionAnswered = false;
    let currentEmail = null;
    let questionTimer = null;

    function getStorageKey(email) {
        return "roueNWS_" + email.trim().toLowerCase();
    }

    function getPlayerData(email) {

        const key = getStorageKey(email);
        const data = localStorage.getItem(key);

        if (!data) {
            return {
                email: email,
                attempts: 0,
                score: 0,
                blockedUntil: 0,
                selectedGift: null
            };
        }

        try {

            const parsed = JSON.parse(data);

            if (parsed.selectedGift === undefined) {
                parsed.selectedGift = null;
            }

            if (
                parsed.blockedUntil &&
                Date.now() >= parsed.blockedUntil
            ) {

                parsed.attempts = 0;
                parsed.score = 0;
                parsed.blockedUntil = 0;
                parsed.selectedGift = null;

                savePlayerData(email, parsed);
            }

            return parsed;

        } catch {

            return {
                email: email,
                attempts: 0,
                score: 0,
                blockedUntil: 0,
                selectedGift: null
            };
        }
    }

    function savePlayerData(email, data) {
        localStorage.setItem(
            getStorageKey(email),
            JSON.stringify(data)
        );
    }

    emailForm.addEventListener("submit", event => {

        event.preventDefault();

        const email = emailInput.value.trim().toLowerCase();

        if (!emailInput.checkValidity()) {

            emailMessage.textContent =
                "Entre une adresse email valide.";

            emailMessage.style.color = "#ef4b35";

            return;
        }

        currentEmail = email;

        const data = getPlayerData(email);

        score = data.score;

        updateScore();

        emailCard.classList.add("hidden");
        gameContent.classList.remove("hidden");

        updateAttemptsUI(data);

        if (
            data.attempts >= MAX_ATTEMPTS &&
            Date.now() < data.blockedUntil
        ) {
            showGiftShop();
            return;
        }

        showGame();
    });

    function updateScore() {

        scoreEl.textContent = score;

        if (!currentEmail) {
            return;
        }

        const data = getPlayerData(currentEmail);

        data.score = score;

        savePlayerData(currentEmail, data);
    }

    function updateAttemptsUI(data) {

        attemptsUsedEl.textContent = data.attempts;

        const remaining =
            MAX_ATTEMPTS - data.attempts;

        if (remaining <= 0) {
            remainingEl.textContent =
                "Tes 3 tours sont terminés.";
        } else {
            remainingEl.textContent =
                `Il te reste ${remaining} tour${remaining > 1 ? "s" : ""}.`;
        }
    }

    function consumeAttempt() {

        const data = getPlayerData(currentEmail);

        data.attempts++;

        if (data.attempts >= MAX_ATTEMPTS) {
            data.blockedUntil =
                Date.now() + WAIT_TIME;
        }

        savePlayerData(currentEmail, data);

        updateAttemptsUI(data);
    }

    function canSpin() {

        const data = getPlayerData(currentEmail);

        if (data.attempts >= MAX_ATTEMPTS) {

            if (Date.now() < data.blockedUntil) {
                showGiftShop();
                return false;
            }

            data.attempts = 0;
            data.score = 0;
            data.blockedUntil = 0;
            data.selectedGift = null;

            savePlayerData(currentEmail, data);

            score = 0;

            updateScore();
            updateAttemptsUI(data);
            showGame();
        }

        return true;
    }

    function showGame() {

        intro.style.display = "block";
        wheelZone.style.display = "flex";
        giftShop.style.display = "none";
        blockedCard.style.display = "none";

        hideGameCards();

        const data = getPlayerData(currentEmail);

        updateAttemptsUI(data);

        spinButton.disabled = false;
    }

    function hideGameCards() {

        stopQuestionTimer();

        quiz.style.display = "none";
        specialCard.style.display = "none";
        riskChoice.style.display = "none";

        quizResult.textContent = "";
    }

    function getRandomQuestion(category) {

        const list = questions[category];

        if (!list || list.length === 0) {
            return null;
        }

        return list[
            Math.floor(Math.random() * list.length)
        ];
    }

    function stopQuestionTimer() {

        if (questionTimer) {
            clearInterval(questionTimer);
            questionTimer = null;
        }
    }

    function startQuestionTimer() {

        stopQuestionTimer();

        let timeLeft = 10;

        questionTime.textContent = timeLeft;

        questionTimer = setInterval(() => {

            timeLeft--;

            questionTime.textContent = timeLeft;

            if (timeLeft <= 0) {

                stopQuestionTimer();

                if (questionAnswered) {
                    return;
                }

                questionAnswered = true;

                document
                    .querySelectorAll(
                        'input[name="reponse"]'
                    )
                    .forEach(radio => {
                        radio.disabled = true;
                    });

                const validateButton =
                    document.querySelector(
                        ".validate-button"
                    );

                validateButton.disabled = true;

                quizResult.textContent =
                    "Temps écoulé ! 0 point.";

                quizResult.style.color =
                    "#ef4b35";

                setTimeout(() => {

                    quiz.style.display = "none";
                    quizResult.textContent = "";

                    finishTurn();

                }, 1500);
            }

        }, 1000);
    }

    function showQuestion(category) {

        hideGameCards();

        currentCategory = category;
        currentQuestion =
            getRandomQuestion(category);

        if (!currentQuestion) {
            finishTurn();
            return;
        }

        questionAnswered = false;

        const segment =
            segments.find(
                item => item.id === category
            );

        quizCategory.textContent =
            segment.label.toUpperCase();

        questionEl.textContent =
            currentQuestion.question;

        choixElements.forEach(
            (element, index) => {
                element.textContent =
                    currentQuestion.choix[index];
            }
        );

        document
            .querySelectorAll(
                'input[name="reponse"]'
            )
            .forEach(radio => {
                radio.checked = false;
                radio.disabled = false;
            });

        document.querySelector(
            ".validate-button"
        ).disabled = false;

        quizResult.textContent = "";

        quiz.style.display = "block";

        startQuestionTimer();

        setTimeout(() => {

            quiz.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);
    }

    spinButton.addEventListener("click", () => {

        if (isSpinning) {
            return;
        }

        if (!canSpin()) {
            return;
        }

        consumeAttempt();

        isSpinning = true;
        spinButton.disabled = true;

        hideGameCards();

        resultBox.textContent =
            "La roue tourne...";

        const winnerIndex =
            Math.floor(
                Math.random() *
                segments.length
            );

        const offset =
            (Math.random() - 0.5) *
            segmentAngle *
            0.8;

        const center =
            winnerIndex *
            segmentAngle +
            segmentAngle / 2;

        const target =
            360 - (center + offset);

        const turns =
            (
                5 +
                Math.floor(Math.random() * 4)
            ) * 360;

        const mod =
            (
                currentRotation % 360 +
                360
            ) % 360;

        currentRotation +=
            turns +
            (
                target -
                mod +
                360
            ) % 360;

        wheel.style.transform =
            `rotate(${currentRotation}deg)`;

        setTimeout(() => {

            const segment =
                segments[winnerIndex];

            resultBox.textContent =
                "Tu es tombé sur : " +
                segment.label;

            handleCategory(segment.id);

            isSpinning = false;

        }, 4600);
    });

    function handleCategory(category) {

        if (category === "bonus") {
            showBonus();
            return;
        }

        if (category === "risques") {
            showRisk();
            return;
        }

        showQuestion(category);
    }

    quizForm.addEventListener("submit", event => {

        event.preventDefault();

        if (questionAnswered) {
            return;
        }

        const selected =
            document.querySelector(
                'input[name="reponse"]:checked'
            );

        if (!selected) {

            quizResult.textContent =
                "Choisis une réponse.";

            quizResult.style.color =
                "#ef4b35";

            return;
        }

        questionAnswered = true;

        stopQuestionTimer();

        const answer =
            Number(selected.value);

        document
            .querySelectorAll(
                'input[name="reponse"]'
            )
            .forEach(radio => {
                radio.disabled = true;
            });

        document.querySelector(
            ".validate-button"
        ).disabled = true;

        const isCorrect =
            answer ===
            currentQuestion.bonneReponse;

        if (isCorrect) {

            if (currentCategory === "risques") {

                score += 300;

                quizResult.textContent =
                    "Bonne réponse ! +300 points.";

            } else {

                score += 100;

                quizResult.textContent =
                    "Bonne réponse ! +100 points.";
            }

            updateScore();

            quizResult.style.color =
                "#00a5a5";

        } else {

            const bonneReponse =
                currentQuestion.choix[
                    currentQuestion.bonneReponse
                ];

            if (currentCategory === "risques") {

                score -= 100;

                updateScore();

                quizResult.textContent =
                    "Mauvaise réponse. -100 points. La bonne réponse était : " +
                    bonneReponse;

            } else {

                quizResult.textContent =
                    "Mauvaise réponse. La bonne réponse était : " +
                    bonneReponse;
            }

            quizResult.style.color =
                "#ef4b35";
        }

        setTimeout(() => {

            quiz.style.display = "none";
            quizResult.textContent = "";

            finishTurn();

        }, 2000);
    });

    function showBonus() {

        hideGameCards();

        specialTitle.textContent = "BONUS";

        specialText.textContent =
            "Coup de chance ! Tu gagnes 100 points.";

        specialCard.style.display =
            "block";
    }

    specialButton.addEventListener("click", () => {

        score += 100;

        updateScore();

        specialCard.style.display = "none";

        resultBox.textContent =
            "Bonus obtenu ! +100 points.";

        finishTurn();
    });

    function showRisk() {

        hideGameCards();

        riskChoice.style.display =
            "block";
    }

    acceptRisk.addEventListener("click", () => {

        riskChoice.style.display = "none";

        resultBox.textContent =
            "Risque accepté.";

        showQuestion("risques");
    });

    refuseRisk.addEventListener("click", () => {

        riskChoice.style.display = "none";

        resultBox.textContent =
            "Risque refusé. Ton score ne change pas.";

        finishTurn();
    });

    function finishTurn() {

        stopQuestionTimer();

        const data =
            getPlayerData(currentEmail);

        updateAttemptsUI(data);

        if (data.attempts >= MAX_ATTEMPTS) {

            spinButton.disabled = true;

            remainingEl.textContent =
                "Tes 3 tours sont terminés.";

            setTimeout(() => {
                showGiftShop();
            }, 500);

            return;
        }

        spinButton.disabled = false;

        resultBox.textContent =
            "Tu peux tourner la roue pour ton prochain tour.";
    }

    function showGiftShop() {

        hideGameCards();

        const data =
            getPlayerData(currentEmail);

        score = data.score;

        scoreEl.textContent = score;
        finalScore.textContent = score;

        intro.style.display = "none";
        wheelZone.style.display = "none";
        blockedCard.style.display = "none";
        giftShop.style.display = "block";

        giftList.innerHTML = "";
        giftMessage.innerHTML = "";
        giftMessage.style.display = "none";

        if (data.selectedGift) {

            giftMessage.innerHTML = `
                <strong>BRAVO ! Tu as gagné un ${data.selectedGift} !</strong>
                <br>
                Présente cet écran à un membre de la NWS pour récupérer ton cadeau.
            `;

            giftMessage.style.display =
                "block";
        }

        gifts.forEach(gift => {

            const giftCard =
                document.createElement("div");

            giftCard.classList.add("gift");

            const title =
                document.createElement("h3");

            title.textContent = gift.name;

            const price =
                document.createElement("p");

            price.textContent =
                gift.price + " points";

            const button =
                document.createElement("button");

            const affordable =
                score >= gift.price;

            if (!affordable) {

                giftCard.classList.add(
                    "unavailable"
                );

                button.disabled = true;

                button.textContent =
                    "PAS ASSEZ DE POINTS";

            } else if (data.selectedGift) {

                button.disabled = true;

                if (
                    data.selectedGift ===
                    gift.name
                ) {

                    giftCard.classList.add(
                        "selected"
                    );

                    button.textContent =
                        "CADEAU CHOISI";

                } else {

                    button.textContent =
                        "INDISPONIBLE";
                }

            } else {

                button.textContent =
                    "CHOISIR CE CADEAU";
            }

            button.addEventListener(
                "click",
                () => {
                    selectGift(gift);
                }
            );

            giftCard.appendChild(title);
            giftCard.appendChild(price);
            giftCard.appendChild(button);

            giftList.appendChild(giftCard);
        });

        if (
            !data.selectedGift &&
            score < gifts[0].price
        ) {

            giftMessage.textContent =
                "Ton score ne permet pas de choisir un cadeau.";

            giftMessage.style.display =
                "block";

            giftMessage.style.borderColor =
                "#ef4b35";

            giftMessage.style.background =
                "#fff5f4";

            giftMessage.style.color =
                "#ef4b35";

        } else {

            giftMessage.style.borderColor =
                "#00a5a5";

            giftMessage.style.background =
                "#edffff";

            giftMessage.style.color =
                "#111";
        }

        giftShop.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function selectGift(gift) {

        const data =
            getPlayerData(currentEmail);

        if (data.selectedGift) {
            return;
        }

        if (score < gift.price) {
            return;
        }

        data.selectedGift =
            gift.name;

        savePlayerData(
            currentEmail,
            data
        );

        showGiftShop();
    }

    function showBlocked() {

        const data =
            getPlayerData(currentEmail);

        hideGameCards();

        intro.style.display = "none";
        wheelZone.style.display = "none";
        giftShop.style.display = "none";
        blockedCard.style.display = "block";

        if (data.selectedGift) {
            chosenGiftText.textContent =
                "Ton cadeau : " +
                data.selectedGift;
        }

        updateCountdown(
            data.blockedUntil
        );
    }

    function updateCountdown(timestamp) {

        const difference =
            timestamp - Date.now();

        if (difference <= 0) {

            if (window.countdownInterval) {
                clearInterval(
                    window.countdownInterval
                );
            }

            const data =
                getPlayerData(currentEmail);

            data.attempts = 0;
            data.score = 0;
            data.blockedUntil = 0;
            data.selectedGift = null;

            savePlayerData(
                currentEmail,
                data
            );

            score = 0;

            updateScore();
            updateAttemptsUI(data);
            showGame();

            return;
        }

        const hours =
            Math.floor(
                difference /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (
                    difference %
                    (1000 * 60)
                ) /
                1000
            );

        countdown.textContent =
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }

});