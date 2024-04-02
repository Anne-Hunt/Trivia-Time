
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

  get Question() {
    return `
    <div class="row text-center text-dark bg-light border rounded">
      <h2>${this.question}</h2>
    </div>
    `
  }

  get Answers() {
    let choices = ''
    let string = ''
    let wrongAnswers = '`<div onclick="app.TriviaController.wrongAnswer()" class="col-6 bg-light text-dark border rounded">${this.wrong}</div>`'
    let correctAnswer = `<div id="correct" onclick="app.TriviaController.correctAnswer()" class="col-6 bg-light text-dark border rounded">${this.answer}</div>`
    this.wrong.forEach(wrong => choices += wrongAnswers)
    string.concat(choices)
    return string

    let answersHTML = ''
    let answers = this.WrongAnswers
    let answerarray = answers.split(',')
    answerarray.sort()
    answerarray.push(this.CorrectAnswer)
    answerarray.sort()
    answerarray.forEach(answer => answersHTML += answer)
    return answersHTML
  }

}