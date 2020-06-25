<template>
  <BaseLayout>
    <v-container class="fill-height" fluid>
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
      <v-row v-if="tracks.length">
        <v-col
          v-for="track in tracks"
          cols="12"
          :xs="12"
          :md="6"
          :lg="4"
          :key="track.id"
        >
          <TrackDetail :track="track" />
        </v-col>
      </v-row>
    </v-container>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import TrackDetail from '@/components/TrackDetail'
import { searchTrack } from '@/api/tracks'

export default {
  name: 'App',
  components: {
    BaseLayout,
    TrackDetail
  },
  data: () => ({
    query: '',
    tracks: [],
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  }),

  created () {
    // this.search()
  },

  methods: {
    async search () {
      const res = await searchTrack(this.query)
      this.tracks = res.data.tracks.items
    }
  }
}
</script>
