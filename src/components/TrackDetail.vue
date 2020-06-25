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

      <v-btn small icon> <v-icon>mdi-play</v-icon></v-btn>

      <v-spacer></v-spacer>

      <v-btn small icon><v-icon>mdi-open-in-new</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['track']
}
</script>