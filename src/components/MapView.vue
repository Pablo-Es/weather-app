<template>
  <v-flex md8>
    <v-layout row wrap>
      <v-flex md10>
        <h2 class=" text-sm-left">World map</h2>
      </v-flex>
      <v-flex md2 d-flex>
        <v-select
          :items="dataCategories"
          label="Data category"
        ></v-select>
      </v-flex>

    </v-layout>
    <v-layout>
      <v-flex xs12>
        <GmapMap
          @click="getInfoEvent"
          :center="center"
          :zoom="zoom"
          style="width: 100%; height: 80vh"
        >
          <marker-view
            :key="position.id"
            v-for="position in positions"
          :markerPos="position"
          />
        </GmapMap>
      </v-flex>
    </v-layout>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Use Google's location service?</v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

  </v-flex>
</template>

<script>
import MarkerView from './MarkerView'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'MapView',
  components: {MarkerView},
  data() {
    return {
      dialog: false,
      center: {
        lat: 49.0795316,
        lng: 9.1522207
      },
      zoom: 5,
      positions: [],
      currentTemp: '',
      dataCategories: ['temperature', 'humidity', 'pressure']

    }
  },
  methods: {
    ...mapActions({
      setCord: 'map/setCord',
      fetchAll: 'map/fetchAll'
    }),
    getInfoEvent(e) {
      const {latLng: {lat, lng}} = e
      let pos = {
        lat: lat(),
        lng: lng()
      }

      this.positions.push(pos)
      this.dialog = true
      this.setCord(pos)
      this.fetchAll(pos)

    }

  },
  computed: {
    ...mapState({
      coords: (state) => state.map.cords,
    }),
  }
}
</script>

<style scoped>

</style>
