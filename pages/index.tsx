import { useEffect, useState } from 'react';
import { Question } from '../types/question';
import { generateQuestions } from '../utils/generateQuestions';

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(generateQuestions());
  }, []);

  const handleAnswer = (choice: number) => {
    if (choice === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const playAgain = () => {
    setQuestions(generateQuestions());
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  if (finished) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Quiz Selesai!</h2>
        <p>Skor Anda: {score} / {questions.length} ({(score / questions.length) * 100}%)</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Soal {current + 1} / {questions.length}</h2>
      <p>{q.question}</p>
      <div>
        {q.choices.map((c, i) => (
          <button key={i} onClick={() => handleAnswer(c)} style={{ margin: 10 }}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
