<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div>
          <v-icon>mdi-spotify</v-icon>
          Spotify
        </div>
        <v-list-item-title class="font-weight-bold mb-1">{{
          track.name
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ track.artists[0].name }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="100" color="grey">
        <img :src="track.album.images[0].url" alt="" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>

      <v-btn small v-if="track.preview_url" @click="setTrack()" icon>
        <v-icon>mdi-play</v-icon></v-btn
      >

      <v-bottom-sheet light v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn small icon v-on="on" v-bind="attrs">
            <v-icon>mdi-share</v-icon></v-btn
          >
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>

      <v-spacer></v-spacer>
      <v-btn link target="_blank" :href="track.external_urls.spotify" small icon
        ><v-icon>mdi-open-in-new</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import TrackMixin from '@/mixins/track'
export default {
  props: ['track'],
  mixins: [TrackMixin]
}
</script>
