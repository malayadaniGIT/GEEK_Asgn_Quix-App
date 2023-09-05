import Quiz from "./Lifecycle-Hook/Quiz";


const App = () => {
 const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correct: 'Mars',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correct: 'William Shakespeare',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correct: 'Blue Whale',
  },
  {
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correct: 'Carbon Dioxide',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'South Korea', 'Japan', 'Vietnam'],
    correct: 'Japan',
  },
  {
    question: 'What is the chemical symbol for the element gold?',
    options: ['Au', 'Ag', 'Fe', 'Cu'],
    correct: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correct: 'Leonardo da Vinci',
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Heart', 'Brain', 'Liver', 'Skin'],
    correct: 'Skin',
  },
  {
    question: 'Which continent is the least populated?',
    options: ['Africa', 'Asia', 'Australia', 'Antarctica'],
    correct: 'Antarctica',
  },
];


  return (
    <div className="App">
      <Quiz questionsData={questionsData} />
    </div>
  );
};

export default App;
