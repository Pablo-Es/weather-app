<template>
  <GmapMarker
    @click="isOpen = true"

    :position="markerPos"
    >
    <gmap-info-window
      :opened="isOpen"
      @closeclick="isOpen = false"
    >
      <div>

          <header class="info-window__header">
            <h3>Current weather for {{cityName}}</h3>
          </header>
          <div>
            <p>temperatura {{currentTemp}}</p>

          </div>



        </div>


    </gmap-info-window>
  </GmapMarker>
</template>

<script>
  import axios from 'axios'
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
          let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.markerPos.lat}&lon=${this.markerPos.lng}&units=metric&APPID=ba74e775820c1854af18db066eb9d76e`;
          axios
            .get(url)
            .then(response => {
              this.currentTemp = response.data.main.temp;
              this.cityName = response.data.name;


            })
            .catch(error => {
              console.log(error);
            });
          console.log(this.currentTemp);

      },
      props: {
        markerPos: Object,
      }
    }
</script>

<style scoped>

</style>
