<template>
  <div>{{ tims }}</div>
</template>

<script>
import axios from 'axios';
import converter from 'xml-js';

export default {
  name: 'Map',

  data() {
    return {
      tims: {},
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
        this.tims = converter.xml2json(response.data, {
          compact: true,
          ignoreDoctype: true,
          ignoreAttributes: true,
          ignoreDeclaration: true,
        });
      });
  },
};
</script>

<style></style>
