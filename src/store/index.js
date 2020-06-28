import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    track: {},
    isPlaying: false,
    favorites: []
  },
  mutations: {
    SET_TRACK(state, track) {
      console.log(track)
      state.track = track
      state.isPlaying = true
    },
    SHOW_PLAYER(state) {
      state.isPlaying = true
    }
  },
  actions: {
  }
})
