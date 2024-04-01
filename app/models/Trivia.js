
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
    <div id="choices" class="row justify-content-center align-items-center text-center g-2">
    </div>
</div>
    `
  }

  get WrongAnswers() {
    let choices = ''
    let string = ''
    this.wrong.forEach(wrong => choices = `<div class="col-6 bg-light text-dark border rounded">${this.wrong}</div>`)
    string.concat(choices)
    return string
  }

  get CorrectAnswer() {
    return `
    <div id="correct" class="col-6 bg-light text-dark border rounded">${this.answer}</div>
    `
  }

  get AllAnswers() {
    let answersHTML = ''
    let answers = this.WrongAnswers
    answers.concat(this.CorrectAnswer)
    let answerarray = answers.split(',')
    answerarray.sort()
    answerarray.forEach(answer => answersHTML += answer)
    return answersHTML
  }


}