<template>
  <GmapMarker


    :position="markerPos"

  />
</template>

<script>
    export default {
        name: "MarkerView",
      props: {
        markerPos: Object,
      }
    }
</script>

<style scoped>

</style>
