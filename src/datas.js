const datas = [
  {
    question: "What does CSS stand for?",
    id: "1",
    incorrectAnswers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    id: "2",
    incorrectAnswers: [
      "In the <body> section",
      "At the end of the document",
      "You can't refer to an external style sheet",
    ],
    correctAnswer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    id: "3",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    id: "4",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Which is the correct CSS syntax?",
    id: "5",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    id: "6",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question: "Which property is used to change the background color?",
    id: "7",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    id: "8",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
];

export default datas;
