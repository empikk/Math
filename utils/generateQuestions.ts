import { Question } from '../types/question';

export function generateQuestions(): Question[] {
  const questions: Question[] = [];

  // Soal mudah
  for (let i = 1; i <= 10; i++) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const answer = a + b;
    const choices = shuffleChoices([answer, answer + 1, answer - 1, answer + 2]);
    questions.push({ question: `${a} + ${b} = ?`, choices, answer });
  }

  // Soal sulit
  for (let i = 11; i <= 20; i++) {
    const a = Math.floor(Math.random() * 50 + 10);
    const b = Math.floor(Math.random() * 10 + 1);
    const answer = a * b;
    const choices = shuffleChoices([answer, answer + 5, answer - 5, answer + 10]);
    questions.push({ question: `${a} × ${b} = ?`, choices, answer });
  }

  return questions;
}

function shuffleChoices(choices: number[]): number[] {
  return choices.sort(() => Math.random() - 0.5);
}
