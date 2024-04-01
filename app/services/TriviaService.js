import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";

class TriviaService {

  async getTrivia() {
    console.log('get exists')
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
    console.log('fetch fetched fetchingly')
    const questions = await response.json()
    console.log('Json ran away with all the stress', questions)
    const trivia = questions.results.map(question => new Trivia(question))
    console.log('trivia landed', trivia)
    AppState.trivia = trivia
  }

  setTrivia() {
    console.log(AppState.indices)
    let currentTrivia = AppState.currentTrivia
    let indexNum = AppState.indices
    currentTrivia = AppState.trivia[indexNum]
    console.log(AppState.currentTrivia)
    console.log(currentTrivia)
    let question = currentTrivia.Question
    let answers = currentTrivia.AllAnswers
    console.log(question, answers)
    AppState.currentQuestion = currentTrivia.Question
    AppState.currentChoices = currentTrivia.AllAnswers
    console.log(AppState.currentChoices, AppState.currentQuestion)
    AppState.indices++
  }
}

export const triviaService = new TriviaService()