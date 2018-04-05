<template>
  <div class="main" id="app">
    <ul>
      <li><router-link :to="{ name: 'index' }">GO TO MAP</router-link></li>
      <li><router-link :to="{ name: 'toe' }">GO TO TIC TAC</router-link></li>
    </ul>
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
  .main {
    background-color: #eef3f0;
    padding: 1.5rem;
    font: 1rem / 1 'Open Sans', sans-serif;
  }
  li {
    margin: 15px 0;
  }
  a {
    text-decoration: none;
    color: #151212;
    font-weight: bold;
  }
</style>
