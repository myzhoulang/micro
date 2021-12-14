import Vuex from 'vuex'
import {changeState} from './actions'



const initStore = (state) => new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.age++
      changeState({age: state.age})
    }
  }
})

export default initStore