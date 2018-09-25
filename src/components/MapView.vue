<template>
  <v-flex md8>
    <v-layout row wrap>
      <v-flex md10>
        <h2 class=" text-sm-left">World map</h2>
      </v-flex>
      <v-flex md2>
        <v-select
          label="Standard"
          text-sm-right
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <GmapMap
          @click="getInfoEvent"
          :center="center"
          :zoom="2"
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


        }
      },
      methods:{
        getInfoEvent(e) {
          this.positions.push(e.latLng);
        }
      },
    }
</script>

<style scoped>

</style>
