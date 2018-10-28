<template>
  <v-flex md4>
    <h2>Locations</h2>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="location in allLocations"
         :key="location.id"
      >
        <div slot="header">{{location.name}}</div>
        <v-card>
          <v-card-text>
            <h3>Curretnt Weather</h3>
            <p>Temperature: {{location.main.temp.toFixed(1)}} °C</p>
            <p>Pressure: {{location.main.pressure}} hPa</p>
            <p>Humidity: {{location.main.humidity}} %</p>
          </v-card-text>
          <v-card-text>
            <v-textarea
              name="notes"
              label="notes"
              value=""
              hint="Hint text"
            ></v-textarea>
          </v-card-text>

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
