<template>
  <v-flex md4>
    <h2>Locations</h2>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="location in allLocations"
         :key="location.id">
      >
        <div slot="header">{{location.name}}</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
        name: "Accordion",
      mounted() {
        console.log(this.locationData, 'location');
      },
    computed: {
      ...mapState({
        allLocations: (state) => state.map.allLocations,
      }),


    },

    }
</script>

<style scoped>
h2  {
  margin-bottom: 51px;
}
</style>
