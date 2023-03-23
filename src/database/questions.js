export const questions = [
    {
        id: "1",
        question: "O que é React?",
        answers: [
            { text: "Uma linguagem de programação", correct: false },
            { text: "Uma biblioteca JavaScript para criação de interfaces de usuário em páginas web", correct: true },
            { text: "Um banco de dados relacional", correct: false },
            { text: "Um software de edição de texto", correct: false },
        ],
    },
    {
        id: "2",
        question: "Qual dos seguintes não é um recurso do React?",
        answers: [
            { text: "Virtual DOM", correct: false },
            { text: "Props", correct: false },
            { text: "CSS", correct: true },
            { text: "State", correct: false },
        ],
    },
    {
        id: "3",
        question: "Como se chama a sintaxe que permite a composição de componentes em React?",
        answers: [
            { text: "JSX", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "Babel", correct: false },
        ],
    },
    {
        id: "4",
        question: "Qual das seguintes declarações no React é verdadeira?",
        answers: [
            { text: "Os componentes funcionais são mais poderosos do que os componentes de classe.", correct: false },
            { text: "Os componentes de classe são mais poderosos do que os componentes funcionais.", correct: false },
            { text: "Os componentes funcionais e de classe têm a mesma funcionalidade.", correct: true },
            { text: "Não é possível criar componentes funcionais em React.", correct: false },
        ],
    },
    {
        id: "5",
        question: "Qual é o hook do React utilizado para gerenciar o estado de um componente?",
        answers: [
            { text: "useState", correct: true },
            { text: "useEffect", correct: false },
            { text: "useRef", correct: false },
            { text: "useContext", correct: false },
        ],
    },
    {
        id: "6",
        question: "Qual é o hook do React utilizado para executar efeitos colaterais ou manipular o ciclo de vida de um componente?",
        answers: [
            { text: "useState", correct: false },
            { text: "useEffect", correct: true },
            { text: "useRef", correct: false },
            { text: "useContext", correct: false },
        ],
    },
    {
        id: "7",
        question: "Qual é o hook do React utilizado para referenciar elementos da DOM?",
        answers: [
            { text: "useState", correct: false },
            { text: "useEffect", correct: false },
            { text: "useRef", correct: true },
            { text: "useContext", correct: false },
        ],
    },
    {
        id: "8",
        question: "Qual é o hook do React utilizado para compartilhar dados entre componentes?",
        answers: [
            { text: "useState", correct: false },
            { text: "useEffect", correct: false },
            { text: "useRef", correct: false },
            { text: "useContext", correct: true },
        ],
    },
    {
        id: "9",
        question: "Qual é o hook do React utilizado para lidar com animações?",
        answers: [
            { text: "useState", correct: false },
            { text: "useEffect", correct: false },
            { text: "useRef", correct: false },
            { text: "useSpring", correct: true },
        ],
    },
    {
        id: "10",
        question: "Qual é a principal diferença entre o useState e o useEffect?",
        answers: [
            { text: "O useState é usado para criar estados em um componente, enquanto o useEffect é usado para lidar com efeitos colaterais em um componente", correct: true },
            { text: "O useState é usado para lidar com efeitos colaterais em um componente, enquanto o useEffect é usado para criar estados em um componente", correct: false },
            { text: "O useState é uma função de ordem superior, enquanto o useEffect é uma função comum", correct: false },
            { text: "Não há diferença entre os dois hooks", correct: false },
        ],
    },
];

// Função para embaralhar as questões
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}