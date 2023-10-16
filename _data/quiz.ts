export type Quiz = {
    name: string;
    questions: Question[];
}

export type Question = {
    question: string;
    options: string[];
    correct_answer: string;
};

export const getQuiz = () => quiz_1;

export const quiz_0: Quiz = {
    name: "test quiz",
    questions: [
                {
            "question": "What is the Cree word for 'hello'?",
            "options": ["Tansi", "Niya", "Ekosi", "Kihci"],
            "correct_answer": "Tansi"
        },
        {
            "question": "Which Cree dialect is most widely spoken in Canada?",
            "options": ["Cree", "Nehiyaw", "Innu", "Atikamekw"],
            "correct_answer": "Nehiyaw"
        },
        {
            "question": "How do you say 'thank you' in Cree?",
            "options": ["Kisâkihin", "Miyo-wîcêhtowin", "Ekwa", "Kahkiyaw"],
            "correct_answer": "Kisâkihin"
        },
        {
            "question": "What does 'pimâcihowin' mean in Cree?",
            "options": ["Food", "Water", "Sun", "Life"],
            "correct_answer": "Life"
        },
        {
            "question": "Which syllabics character represents the 'ka' sound in Cree?",
            "options": ["ᑲ", "ᐃ", "ᐅ", "ᑎ"],
            "correct_answer": "ᑲ"
        },
        {
            "question": "In Cree, how do you say 'my name is John'?",
            "options": ["Nikawiy John", "Nîso John", "Nistam John", "Niskim John"],
            "correct_answer": "Nistam John"
        },
        {
            "question": "What is the word for 'wolf' in Cree?",
            "options": ["Wâpos", "Môswa", "Asini", "Mîciw"],
            "correct_answer": "Mîciw"
        },
        {
            "question": "In Cree, 'iyiniw' means:",
            "options": ["Man", "Woman", "Child", "Elder"],
            "correct_answer": "Man"
        },
        {
            "question": "What is the Cree word for 'water'?",
            "options": ["Nipiy", "Misko", "Kisiskâciwan", "Nahani"],
            "correct_answer": "Nipiy"
        },
        {
            "question": "Which season is 'pipon' in Cree?",
            "options": ["Summer", "Winter", "Spring", "Fall"],
            "correct_answer": "Fall"
        },
        {
            "question": "What is the Cree word for 'dog'?",
            "options": ["Mîciw", "Môswa", "Wâpos", "Asini"],
            "correct_answer": "Asini"
        },
        {
            "question": "What is the Cree word for 'cat'?",
            "options": ["Mîciw", "Môswa", "Wâpos", "Asini"],
            "correct_answer": "Mîciw"
        },
        {
            "question": "What is the Cree word for 'rabbit'?",
            "options": ["Mîciw", "Môswa", "Wâpos", "Asini"],
            "correct_answer": "Wâpos"
        },
        {
            "question": "What is the Cree word for 'bear'?",
            "options": ["Mîciw", "Môswa", "Wâpos", "Asini"],
            "correct_answer": "Môswa"
        },
    ]
}

export const quiz_1: Quiz = {
    name: "test quiz words",
    questions: [
        {
            question: "wapanohk",
            options: ["north", "east", "south", "west"],
            correct_answer: "east",
        },
        {
            question: "atim",
            options: ["dog", "cat", "mouse", "rat"],
            correct_answer: "dog",
        },
        {
            question: "ciman",
            options: ["dog", "cat", "mouse", "boat"],
            correct_answer: "boat",
        },
        {
            question: "awasis",
            options: ["dog", "cat", "child", "baby"],
            correct_answer: "child",
        },
        {
            question: "wapaki",
            options: ["friday", "tomorrow", "yesterday", "next year"],
            correct_answer: "tomorrow",
        },
        {
            question: "kisik",
            options: ["sun", "moon", "star", "planet"],
            correct_answer: "moon",
        },
        {
            question: "kisikaw",
            options: ["sun", "moon", "star", "planet"],
            correct_answer: "stars",
        },
        {
            question: "kisikohk",
            options: ["sun", "moon", "star", "planet"],
            correct_answer: "sun",
        },
        {
            question: "kisikohk",
            options: ["sun", "moon", "star", "planet"],
            correct_answer: "sun",
        },
        {
            question: "tansi",
            options: ["hello", "goodbye", "good day", "good night"],
            correct_answer: "sun",
        },
        //generate more questions that help with cree comprehension
        {
            question: "wapanohk",
            options: ["north", "east", "south", "west"],
            correct_answer: "east",
        },
    ]
}
