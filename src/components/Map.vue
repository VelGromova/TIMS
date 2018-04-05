<template>
  <div>
    <gmap-map
      class="map__wrapper"
      :center="center"
      :zoom="9"
    >
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
      <!--<gmap-circle-->
      <!--v-for="m in markers"-->
      <!--:center="m.position"-->
      <!--:clickable="true"-->
      <!--:radius="1000"-->
      <!--:options="{-->
      <!--fillColor: 'red',-->
      <!--fillOpacity: .2,-->
      <!--strokeColor: '#FF0000',-->
      <!--strokeOpacity: 0.8,-->
      <!--strokeWeight: 2-->
      <!--}"-->
      <!--&gt;</gmap-circle>-->
    </gmap-map>
  </div>
</template>

<script>
import axios from 'axios';
import converter from 'xml-js';

export default {
  name: 'Map',

  data() {
    return {
      center: {
       lat: 51.509865,
       lng: -0.118092,
      },
      markers: [],
    };
  },

  computed: {

  },

  methods: {

  },

  created() {
    axios
      .get('https://data.tfl.gov.uk/tfl/syndication/feeds/tims_feed.xml')
      .then((response) => {
        let convertedData = converter.xml2js(response.data, {
          compact: true,
          ignoreDoctype: true,
          ignoreAttributes: true,
          ignoreDeclaration: true,
        })

        convertedData.Root.Disruptions.Disruption.forEach((disruption) => {
          let coordinates = disruption.CauseArea.DisplayPoint.Point.coordinatesLL._text

          this.markers.push({
            position: {
              lng: parseFloat(coordinates.split(',')[0]),
              lat: parseFloat(coordinates.split(',')[1]),
            },
          });
        });
      });
  },
};
</script>

<style>
  .map__wrapper {
    width: 100%;
    height: 500px;
  }
</style>
