export default {
  methods: {
    setTrack () {
      this.$store.commit('SET_TRACK', this.track)
    }
  }
}
