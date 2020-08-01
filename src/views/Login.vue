<template>
  <v-list class="text-center">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >Let's get started</v-list-item-title
        >
        <v-list-item-subtitle
          >Sign up or lo in to see what's happing near you</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-form>
          <v-text-field label="Email" type="email" required> </v-text-field>
          <v-text-field
            label="Password"
            type="password"
            append-icon="mdi-eye"
            required
          >
          </v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-btn to="/" depressed block color="teal">
        <v-icon left>mdi-play</v-icon> Get Started
      </v-btn>
    </v-list-item>
    <v-list-item-subtitle class="font-weight-thin">OR</v-list-item-subtitle>

    <v-list-item>
      <v-btn depressed block color="success">
        <v-icon left>mdi-spotify</v-icon> Continue with Spotify
      </v-btn>
    </v-list-item>
    <small>
      <p class="px-5 mt-5 font-weight-thin">
        Al hacer registrarte aceptas los Términos del Servicio.
      </p>
    </small>
  </v-list>
</template>
