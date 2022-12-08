const questionsLib = [
  {
    questionText: 'What is the most important item in our party manifesto?',
    answerOptions: [
      { answerText: 'keeping social and economic stability', isCorrect: false },
      { answerText: 'protecting health and the environment', isCorrect: false },
      { answerText: 'guaranteeing social welfare and justice', isCorrect: false },
      { answerText: 'increasing individual and business freedom', isCorrect: true },
    ],
  },
  {
    questionText: 'What are the pillars of  your society?',
    answerOptions: [
      { answerText: 'Farmers and traditions', isCorrect: false },
      { answerText: 'Individuals and businesses', isCorrect: true },
      { answerText: 'The poor and workers', isCorrect: false },
      { answerText: 'Environment and the peole', isCorrect: false },
    ],
  },
  {
    questionText: 'What should the public spending be like',
    answerOptions: [
      { answerText: 'Remain reasonable', isCorrect: false },
      { answerText: 'Increase spending when neccessary', isCorrect: false },
      { answerText: 'No limit when protecting the environment', isCorrect: false },
      { answerText: 'Remain as low as possible', isCorrect: true },
    ],
  },
]
export default questionsLib;