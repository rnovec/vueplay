<template>
  <v-app>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" >
          <v-layout justify-center align-center>
            <v-flex shrink>
              <template>
               <router-view></router-view>
              </template>
            </v-flex>
          </v-layout>
        </v-col>

        <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
          <v-img contain aspect-ratio="1.5" src="/mello.svg"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
