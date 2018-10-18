<template>
  <v-flex md8>
    <v-layout row wrap>
      <v-flex md10>
        <h2 class=" text-sm-left">World map</h2>
      </v-flex>
      <v-flex md2 d-flex>
        <v-select
          v-model="selected"
          :items="dataCategories"
          label="Data category"
        ></v-select>
      </v-flex>

    </v-layout>
    <v-layout>
      <v-flex xs12>
        <GmapMap
          @click="getLocation"
          :center="center"
          :zoom="zoom"
          style="width: 100%; height: 80vh"
        >
          <marker-view
            :key="location.id"
            v-for="location in allLocations"
          :location="location"
            :mainData="selected"
          />
        </GmapMap>
      </v-flex>
    </v-layout>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="350">
          <v-card>
            <v-card-title class="headline" v-if="one">Add location {{one.name}} ?</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel</v-btn>
              <v-btn color="green darken-1" flat @click.native="addLocation">Add</v-btn>
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
      confirmLocation: false,
      center: {
        lat: 51.8822522,
        lng: 19.8022063
      },
      selected:'temp',
      zoom: 5,
      positions: [],
      currentTemp: '',
      dataCategories: ['temp', 'humidity', 'pressure']

    }
  },
  watch: {

  },
  methods: {
    ...mapActions({
      setCord: 'map/setCord',
      fetchOne: 'map/fetchOne',
      addToAll: 'map/addToAll',
    }),
    getLocation(e) {
      const {latLng: {lat, lng}} = e
      let pos = {
        lat: lat(),
        lng: lng()
      }

      this.dialog = true
      this.setCord(pos)
      this.fetchOne(pos)

    },
    addLocation() {

      this.addToAll();
this.dialog = false;

},

  },
  computed: {
    ...mapState({
      allLocations: (state) => state.map.all,
      one: (state) => state.map.one,
    }),


    },

}
</script>

<style scoped>

</style>
