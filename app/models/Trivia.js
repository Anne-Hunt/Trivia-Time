
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
    <div class="row text-center text-dark bg-light border rounded p-3 border border-5 border-warning shadow">
      <h2>${this.question}</h2>
    </div>
    `
  }

  get Answers() {
    let AnswersArray = []
    let fixedArray = []
    let answersHTML = ''
    let correctAnswer = `<div class="col-6 py-3 g-3"><button id="correct" onclick="app.TriviaController.correctAnswer()" class="p-4 bg-light text-dark border border-warning border-3 rounded btn w-50 shadow">${this.answer}</button></div>`

    for (let i = 0; i < this.wrong.length; i++) {
      const key = "key"
      fixedArray.push({ [key]: this.wrong[i] })
      let wrongAnswerDiv = `<div class="col-6 py-3 g-3"> <button id="wrong" onclick="app.TriviaController.wrongAnswer()" class="p-4 bg-light text-dark border border-warning border-3 rounded btn w-50 shadow">${fixedArray[i].key}</button></div>`
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