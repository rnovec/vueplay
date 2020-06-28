import Vue from 'vue'
import Vuex from 'vuex'
import { searchTrack } from '@/api/tracks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    track: {},
    tracks: [],
    favorites: [],
    isPlaying: false,
    showSettings: false,
    favorites: []
  },
  mutations: {
    SET_TRACK (state, track) {
      console.log(track)
      state.track = track
      state.isPlaying = true
    },
    SET_TRACKS (state, tracks) {
      state.tracks = tracks
    },
    ADD_FAV (state, track) {
      state.favorites.push(track)
    },
    SHOW_PLAYER (state) {
      state.isPlaying = true
    },
    SHOW_SETTINGS (state) {
      state.showSettings = !state.showSettings
    }
  },
  actions: {
    searchTracks ({ commit }, q) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await searchTrack(q)
          commit('SET_TRACKS', res.data.tracks.items)
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    }
  }
})
