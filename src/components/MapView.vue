<template>
  <v-flex md8>
    <v-layout row wrap>
      <v-flex md10>
        <h2 class=" text-sm-left">World map</h2>
      </v-flex>
      <v-flex md2>
        <v-select
          :items="items"
          label="Standard"
          text-sm-right
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 80vh"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      </v-flex>
    </v-layout>


  </v-flex>
</template>

<script>
    export default {
      name: "MapView",
      data() {
        return {
          center: {
            lat: 10.0,
            lng: 10.0
          },
          markers: [{
            position: {
              lat: 10.0,
              lng: 10.0
            }
          }, {
            position: {
              lat: 11.0,
              lng: 11.0
            }
          }]

        }
      }
    }
</script>

<style scoped>

</style>
