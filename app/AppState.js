import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Trivia.js').Trivia[]} */
  trivia = []
}

export const AppState = createObservableProxy(new ObservableAppState())