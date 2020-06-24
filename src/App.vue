<template>
  <BaseLayout>
    <v-container class="fill-height" fluid>
      <!-- vistas -->
      <v-row align="center" justify="center">
        <v-col cols="12" :xs="10" :md="6">
          <v-text-field
            filled
            hide-details
            append-icon="mdi-magnify"
            label="Search songs..."
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <!-- Responsive rows y cols -->
    <!-- 
    <v-subheader>Recently played</v-subheader>
    <v-row>
      <v-col cols="12" :xs="12" :md="6" :lg="4">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn small text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        :xs="12"
        :md="6"
        :lg="4"
      >
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-subheader>Songs for you</v-subheader>

    <v-row>
      <v-col cols="12" :xs="12" :md="6" :lg="4">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn small text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        :xs="12"
        :md="6"
        :lg="4"
      >
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-subheader>May be interested</v-subheader>

    <v-row>
      <v-col cols="12" :xs="12" :md="6" :lg="4">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn small text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        :xs="12"
        :md="6"
        :lg="4"
      >
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row> -->
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
export default {
  name: 'App',
  components: {
    BaseLayout
  },
  data: () => ({
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

  methods: {
    getImage () {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
