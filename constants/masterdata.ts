export interface QuizWordsProps {
  word: string
  answer: string
  deciets: string[]
}

const quizWords: QuizWordsProps[] = [
  {
    word: 'atmosphere',
    answer: 'Surrouding Air',
    deciets: ['wizard', 'intention', 'gem']
  },
  {
    word: 'cat',
    answer: 'kitten',
    deciets: ['dog', 'bat', 'gen']
  },
  {
    word: 'cat1',
    answer: 'kitte1',
    deciets: ['dog1', 'bat1', 'gen1']
  }
]

export default quizWords
