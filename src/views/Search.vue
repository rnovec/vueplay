<template>
  <v-container :class="{ 'fill-height': !isLoading }" fluid>
    <!-- vistas -->
    <v-row align="center" justify="center">
      <v-col cols="12" :sm="8" :lg="6">
        <v-text-field
          filled
          v-model="query"
          @input="search()"
          hide-details
          append-icon="mdi-magnify"
          label="Search songs..."
          rounded
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="isLoading">
      <v-col v-for="i in 20" cols="12" :xs="12" :md="6" :lg="4" :key="i">
        <v-skeleton-loader class="mx-auto" type="article"> </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-if="tracks.length">
      <v-col
        v-for="track in tracks"
        cols="12"
        :xs="12"
        :md="6"
        :lg="4"
        :key="track.id"
      >
        <component
          :is="$vuetify.breakpoint.mobile ? 'TrackDetail' : 'TrackCard'"
          :track="track"
        ></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TrackCard from '@/components/TrackCard'
import TrackDetail from '@/components/TrackDetail'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TrackDetail,
    TrackCard
  },
  data: () => ({
    query: 'rock',
    isLoading: false
  }),

  computed: {
    ...mapState(['tracks'])
  },

  created () {
    this.search()
  },

  methods: {
    async search () {
      this.isLoading = true
      await this.$store.dispatch('searchTracks', this.query)
      this.isLoading = false
    }
  }
}
</script>
