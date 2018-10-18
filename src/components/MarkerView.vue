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
            <p>{{mainData}} {{getWeatherParam()}}</p>

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
      methods:{
          getWeatherParam() {
            if(this.mainData === 'temp') {
              return this.location.main.temp;
            } else if(this.mainData === 'humidity'){
              return this.location.main.humidity
            } else if(this.mainData === 'pressure'){
              return this.location.main.pressure;
            }
          }
      },
      mounted() {
          let dataParam = this.mainData;
        console.log(this.location);
        console.log(dataParam)

      },
      props: {
        location: Object,
        mainData: String,
      }
    }
</script>

<style scoped>

</style>
