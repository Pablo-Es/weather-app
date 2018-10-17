<template>
  <GmapMarker
    @click="isOpen = true"

    :position="{lat:location.coord.lat,lng:location.coord.lon}"
    >
    <gmap-info-window
      :opened="isOpen"
      @closeclick="isOpen = false"
    >
      <div>

          <header class="info-window__header">
            <h3>Current weather for {{location.name}}</h3>
          </header>
          <div>
            <p>{{mainData}} {{location.main.mainData}}</p>

          </div>



        </div>


    </gmap-info-window>
  </GmapMarker>
</template>

<script>

    export default {
        name: "MarkerView",
      data(){
        return {
          currentTemp:'',
          cityName:'',
          isOpen: false,


        }
      },
      mounted() {


      },
      props: {
        location: Object,
        mainData: String,
      }
    }
</script>

<style scoped>

</style>
