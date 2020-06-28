import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    track: {},
    isPlaying: false,
    showSettings: false,
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
    },
    SHOW_SETTINGS(state) {
      state.showSettings = !state.showSettings
    }
  },
  actions: {
  }
})
