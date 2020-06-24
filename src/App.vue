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
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  <v-icon>mdi-spotify</v-icon>
                  Spotify
                </div>
                <v-list-item-title class="headline mb-1">{{
                  track.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  track.artists[0].name
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="100" color="grey">
                <img :src="track.album.images[0].url" alt="" />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>

              <v-btn small icon> <v-icon>mdi-play</v-icon></v-btn>

              <v-spacer></v-spacer>

              <v-btn small icon><v-icon>mdi-open-in-new</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import { searchTrack } from '@/api/tracks'

export default {
  name: 'App',
  components: {
    BaseLayout
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
