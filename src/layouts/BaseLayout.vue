<template>
  <v-app>
    <!-- barra de opciones o navegador horizontal -->
    <v-app-bar color="teal" dense dark flat app>
      <!-- <v-btn v-if="!isMobile" icon>
        <v-icon @click="isOpen = !isOpen">
          mdi-chevron-{{ isOpen ? 'left' : 'right' }}
        </v-icon>
      </v-btn> -->
      <v-btn v-if="!isMobile" icon>
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <v-btn v-if="!isMobile" icon>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>

      <template v-if="isMobile"
        ><v-icon class="mx-4" large>
          mdi-spotify
        </v-icon>
        <v-toolbar-title class="mr-12 align-center">
          <span class="title">Spotify</span>
        </v-toolbar-title>
      </template>

      <!-- <v-text-field
        filled
        rounded
        dense
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down ml-10"
      ></v-text-field> -->

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-progress-circular
        v-if="!isPlaying && track.name"
        :rotate="360"
        :width="15"
        :value="50"
        color="teal"
      >
        <v-btn @click="showPlayer()" icon>
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-progress-circular>

      <v-btn icon @click="showSettings()" large>
        <v-avatar size="32px" item
          ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <!-- menu en escritorio -->
    <v-navigation-drawer permanent v-model="isOpen" v-if="!isMobile" app>
      <v-list dense>
        <v-list-item class="mb-3" v-if="!isMobile">
          <v-icon class="mx-4" large>
            mdi-spotify
          </v-icon>
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">Spotify</span>
          </v-toolbar-title>
        </v-list-item>

        <v-list-item
          v-for="item in items"
          :to="item.path"
          :key="item.path"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1 text-uppercase"
          >Popular</v-subheader
        >
        <v-list>
          <v-list-item link>
            <v-list-item-avatar>
              <img
                src="https://randomuser.me/api/portraits/men/28.jpg"
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title>Joseph</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block text>
            <v-icon class="mx-2">mdi-coffee</v-icon>buy me a coffee</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Contenido de la aplicación -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- vistas -->
      <router-view></router-view>
      <UserSettings />
      <Player />
    </v-main>

    <!-- Menu en dispositivos moviles -->
    <v-bottom-navigation active-class color="teal" v-if="isMobile" app>
      <v-btn
        v-for="item in items"
        :to="item.path"
        :key="item.meta.icon"
        :value="item.path"
      >
        <span>{{ item.name }}</span>
        <v-icon>{{ item.meta.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script>
import items from '@/router/menu'
import Player from '@/components/Player'
import UserSettings from '@/components/UserSettings'
import userMixin from '@/mixins/user'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      isOpen: false,
      items
    }
  },
  components: {
    Player,
    UserSettings
  },
  mixins: [userMixin],
  methods: {
    showPlayer () {
      this.$store.commit('SHOW_PLAYER')
    }
  },
  computed: {
    ...mapState(['track', 'isPlaying']),
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
