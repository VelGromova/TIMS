<template>
  <div id="app">
    <!--<map-component></map-component>-->
    <!--<tic-tac-toe></tic-tac-toe>-->
    <router-view/>
  </div>
</template>

<script>
import MapComponent from './components/Map';
import TicTacToe from './components/TicTacToe';

export default {
  name: 'App',
  components: {
    MapComponent,
    TicTacToe,
  },
};
</script>

<style>

</style>
