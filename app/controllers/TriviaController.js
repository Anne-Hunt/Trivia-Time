import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML } from "../utils/Writer.js"


export class TriviaController {
  constructor() {
    this.getTrivia()
    AppState.on('trivia', this.setQuestion)
    AppState.on('indices', this.drawQuestion)
    AppState.on('playerPoints', this.setQuestion)
    AppState.on('playerPoints', triviaService.saveLocal)
    triviaService.loadLocal()
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
    let pointsContent = AppState.playerPoints
    let questionsQty = AppState.questionsAnswered
    setHTML('points', pointsContent)
    setHTML('question-qty', questionsQty)
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
