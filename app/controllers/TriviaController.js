import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML } from "../utils/Writer.js"


export class TriviaController {
  constructor() {
    this.getTrivia()
    AppState.on('trivia', this.setQuestion)
    AppState.on('indices', this.drawQuestion)
  }

  getTrivia() {
    console.log('sending request for get to service')
    triviaService.getTrivia()
  }

  setQuestion() {
    console.log('sending to service for question selection')
    triviaService.setTrivia()
  }

  correctAnswer() {
    triviaService.correctAnswer()
    this.drawPoints()
  }

  wrongAnswer() {
    triviaService.wrongAnswer()
    this.drawPoints()
  }

  drawPoints() {

  }

  drawQuestion() {
    console.log('question en route')
    let triviaDisplay = ''
    triviaDisplay = AppState.currentQuestion
    setHTML('trivia-displayer', triviaDisplay)
    console.log('trivia ready to be drawn')
    let choiceDisplay = ''
    choiceDisplay = AppState.currentChoices
    setHTML('choices', choiceDisplay)
  }


}
