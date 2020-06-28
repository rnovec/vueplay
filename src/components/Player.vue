<template>
  <v-bottom-sheet v-if="track.preview_url" v-model="$store.state.isPlaying" inset>
    <v-card tile>
      <v-progress-linear
        :value="currentTime"
        class="my-0"
        height="3"
      ></v-progress-linear>

      <!-- HTML5 Audio Player -->
      <audio
        @timeupdate="onTimeUpdate"
        ref="audioElm"
        autoplay
        :src="track.preview_url"
      ></audio>
      <!--  -->

      <v-list>
        <v-list-item>
          <v-list-item-avatar tile size="50" color="grey">
            <img :src="track.album.images[0].url" alt="" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ track.name }}</v-list-item-title>
            <v-list-item-subtitle>{{
              track.artists[0].name
            }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer></v-spacer>

          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn @click="play()" icon>
              <v-icon v-text="!playing ? 'mdi-play' : 'mdi-pause'"></v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn icon>
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  data () {
    return {
      sheet: false,
      playing: true,
      time: 0
    }
  },
  computed: {
    currentTime () {
      return (this.time * 100) / 30
    },
    track() {
      return this.$store.state.track
    }
  },
  methods: {
    onTimeUpdate () {
      this.time = this.$refs.audioElm.currentTime
    },

    play (event) {
      var a = this.$refs.audioElm
      if (a.paused) {
        this.playing = true
        a.play()
      } else {
        this.playing = false
        a.pause()
      }
    }
  }
}
</script>
