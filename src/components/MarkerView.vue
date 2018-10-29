<template>
  <GmapMarker
    @click="isOpen = true"

    :position="{lat:location.data.coord.lat,lng:location.data.coord.lon}"
    >
    <gmap-info-window
      :opened="isOpen"
      @closeclick="isOpen = false"
    >
      <div>

          <header class="info-window__header">
            <h3>Current weather for {{location.data.name}}</h3>
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
            if(this.mainData === 'temperature') {
              return `${this.location.data.main.temp.toFixed(1)} °C`;
            } else if(this.mainData === 'humidity'){
              return `${this.location.data.main.humidity} %`;
            } else if(this.mainData === 'pressure'){
              return `${this.location.data.main.pressure} hPa`;
            }
          }

      },

      props: {
        location: Object,
        mainData: String,
      }
    }
</script>

<style scoped>

</style>
