export default {
  data () {
    return {
      sheet: false,
      items: [
        { icon: 'mdi-facebook', text: 'Facebook' },
        { icon: 'mdi-whatsapp', text: 'WhatsApp' },
        { icon: 'mdi-twitter', text: 'Twitter' }
      ]
    }
  },
  methods: {
    setTrack () {
      this.$store.commit('SET_TRACK', this.track)
    }
  }
}
