<template>
  <div class="mapArea" v-if="coords.length > 0">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "YandexMap",
  props: {
    coords: Array,
  },
  mounted() {
    ymaps.ready(this.init);
  },
  methods: {
    init(){
      let myMap = new ymaps.Map("map", {
        center: this.coords,
        zoom: 16,
      });
      let myPlacemark = new ymaps.Placemark(this.coords, {}, {
        preset: 'islands#redIcon'
      });
      myMap.geoObjects.add(myPlacemark);
    }
  }
}
</script>


<style scoped>
#map {
  width: 900px;
  height: 600px;
  margin: 60px auto;
  border: 2px solid gray;
  border-radius: 2px;
}
</style>
