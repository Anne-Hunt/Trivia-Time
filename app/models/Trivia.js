
//**@params {{category, question, answer, wrong, type, difficulty}} */

import { AppState } from "../AppState.js"

export class Trivia {
  constructor(data) {
    this.category = data.category
    this.question = data.question
    this.answer = data.correct_answer
    this.wrong = data.incorrect_answers || []
    this.type = data.type
    this.difficulty = data.difficulty
  }

  get Question() {
    return `
    <div class="row text-center text-dark bg-light border rounded">
      <h2>${this.question}</h2>
    </div>
    `
  }

  get Answers() {
    let AnswersArray = []
    let fixedArray = []
    let answersHTML = ''
    let correctAnswer = `<div id="correct" onclick="app.TriviaController.correctAnswer()" class="col-6 bg-light text-dark border rounded">${this.answer}</div>`

    for (let i = 0; i < this.wrong.length; i++) {
      const key = "key"
      fixedArray.push({ [key]: this.wrong[i] })
      let wrongAnswerDiv = `<div id="wrong" onclick="app.TriviaController.wrongAnswer()" class="col-6 bg-light text-dark border rounded">${fixedArray[i].key}</div>`
      AnswersArray.push(wrongAnswerDiv)
    }
    AnswersArray.push(correctAnswer)
    console.log(AnswersArray)
    const shuffledArray = AnswersArray.sort((a, b) => 0.5 - Math.random())
    shuffledArray.forEach(answer => answersHTML += answer)
    return answersHTML
  }

  static get Points() {
    return `${AppState.playerPoints}`
  }

  static get QtyQuestions() {
    return `${AppState.questionsAnswered}`
  }
}