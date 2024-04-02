import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Trivia } from './models/Trivia.js'

class ObservableAppState extends EventEmitter {

  /**@type {Trivia[]} */

  trivia = []


  currentTrivia = null
  currentQuestion = ''
  currentChoices = null

  indices = 0

  playerPoints = 0
}

export const AppState = createObservableProxy(new ObservableAppState())