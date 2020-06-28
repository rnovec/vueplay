<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        class="fill-height"
        v-for="track in favorites"
        cols="12"
        :xs="12"
        :md="6"
        :lg="4"
        :key="track.id"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card outlined>
            <v-list dense>
              <v-list-item>
                <v-list-item-avatar tile size="50" color="grey">
                  <v-img
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    :src="track.album.images[0].url"
                    alt=""
                  >
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                          large
                          icon
                        >
                          <v-icon
                            size="50"
                            :class="{ 'show-btns': hover }"
                            color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ track.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    track.artists[0].name
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-img {
  transition: opacity 0.4s ease-in-out;
}

.v-img:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: { ...mapState(['favorites']) },
  data: () => ({
    icons: ['mdi-play'],
    items: [
      {
        title: 'New Releases',
        text: "It's New Release Friday",
        subtext: 'Newly released songs. Updated daily.',
        img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg'
      },
      {
        title: 'Rock',
        text: 'Greatest Rock Hits',
        subtext: 'Lose yourself in rock tunes.',
        img:
          'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
      },
      {
        title: 'Mellow Moods',
        text: 'Ambient Bass',
        subtext: 'Chill beats to mellow you out.',
        img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg'
      }
    ],
    transparent: 'rgba(255, 255, 255, 0)'
  })
}
</script>
