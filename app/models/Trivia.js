
//**@params {{category, question, answer, wrong, type, difficulty}} */

export class Trivia {
  constructor(data) {
    this.category = data.category
    this.question = data.question
    this.answer = data.correct_answer
    this.wrong = data.incorrect_answers || []
    this.type = data.type
    this.difficulty = data.difficulty
  }

  get TriviaCard() {
    return ``
  }
}