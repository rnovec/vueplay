<template>
  <v-card outlined>
    <!-- <v-card-title>
      <div>
        <v-icon>mdi-spotify</v-icon>
        Spotify
      </div>
    </v-card-title> -->
    <v-img :src="track.album.images[0].url" height="200px"></v-img>
    <v-list-item three-line>
      <v-list-item-avatar tile size="50" color="grey">
        <img :src="track.album.images[0].url" alt="" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ track.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ track.artists[0].name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn small icon @click="addFavorite()">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>

      <v-btn small v-if="track.preview_url" @click="setTrack()" icon>
        <v-icon>mdi-play</v-icon></v-btn
      >

      <v-menu light offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small icon v-on="on" v-bind="attrs">
            <v-icon>mdi-share</v-icon></v-btn
          >
        </template>
        <v-list dense>
          <v-list-item v-for="(item, index) in items" :key="index" @click="">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

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
