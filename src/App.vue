<template>
  <div id="app">
    <v-app>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <router-view  />
        <accordion/>
      </v-layout>
    </v-container>
    </v-app>
  </div>
</template>

<script>
import MapView from "./components/MapView";
import Accordion from "./components/Accordion";
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {Accordion, MapView},
  methods: {
    ...mapActions({
      refreshData: 'map/refreshData',
    })
  },
  mounted(){
    // this.refreshData();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
