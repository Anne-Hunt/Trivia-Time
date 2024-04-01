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
}

export const triviaService = new TriviaService()