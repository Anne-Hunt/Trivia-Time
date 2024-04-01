import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML } from "../utils/Writer.js"


export class TriviaController {
  constructor() {
    this.getTrivia()
  }

  getTrivia() {
    console.log('sending request for get to service')
    triviaService.getTrivia()
  }

  drawTrivia() {
    console.log('trivia ready to be drawn')
    const trivia = AppState.trivia
    let triviaDisplay = ''
    trivia.forEach(trivia => triviaDisplay += trivia.TriviaCard)
    setHTML('trivia-displayer', triviaDisplay)
  }


}
