<template>
  <div id="app">
    <v-container fluid>
      <v-layout row wrap>
        <map-view/>
        <accordion/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MapView from "./components/MapView";
import Accordion from "./components/Accordion";
export default {
  name: 'App',
  components: {Accordion, MapView}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
