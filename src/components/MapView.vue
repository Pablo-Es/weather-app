<template>
  <v-flex md8>
    <v-layout row wrap>
      <v-flex md10>
        <h2 class=" text-sm-left">World map</h2>
      </v-flex>
      <v-flex md2 d-flex>
        <select name="data-category">

          <option :key="category.id" v-for="category in selectProperties" :value="category">{{category}}</option>

        </select>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <GmapMap
          @click="getInfoEvent"
          :center="center"
          :zoom="3"
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


  </v-flex>
</template>

<script>
    import MarkerView from "./MarkerView";
    import {AxiosInstance as axios} from "axios";
    export default {
      name: "MapView",
      components: {MarkerView},
      data() {
        return {
          center: {
            lat: 31.7603389,
            lng: 29.6303935
          },
          positions: [],
          currentTemp: '',
          selectProperties: ['temperature', 'humidity', 'pressure']



        }
      },
      methods:{
        getInfoEvent(e) {
          const {latLng: {lat, lng}} = e;
          let pos = {
            lat: lat(),
            lng: lng()
          };

          this.positions.push(pos);
          console.log(pos);
          console.log(this.positions);

        },

      },
    }
</script>

<style scoped>

</style>
