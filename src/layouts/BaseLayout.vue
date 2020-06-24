<template>
  <v-app>
    <!-- barra de opciones o navegador horizontal -->
    <v-app-bar color="teal" dark flat app>
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

      <v-btn icon large>
        <v-avatar size="32px" item
          ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <!-- menu en escritorio -->
    <v-navigation-drawer permanent v-model="isOpen" v-if="!isMobile" app>
      <v-list dense>
        <v-list-item v-if="!isMobile">
          <v-icon class="mx-4" large>
            mdi-spotify
          </v-icon>
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">Spotify</span>
          </v-toolbar-title>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1 text-uppercase"
          >Popular</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img
                :src="
                  `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
                "
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
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
    </v-navigation-drawer>

    <!-- Contenido de la aplicación -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- vistas -->
      <slot />
    </v-main>

    <!-- Menu en dispositivos moviles -->
    <v-bottom-navigation v-model="bottomNav" color="teal" v-if="isMobile" app>
      <v-btn v-for="item in items" :key="item.icon" :value="item.value">
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'search',
      isMobile: false,
      isOpen: false,
      items: [
        { icon: 'mdi-home', value: 'home', text: 'Home' },
        { icon: 'mdi-magnify', value: 'search', text: 'Search' },
        { icon: 'mdi-heart', value: 'fav', text: 'Favorites' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }
  },
  beforeDestroy () {
    if (typeof window != 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 960
    }
  }
}
</script>
