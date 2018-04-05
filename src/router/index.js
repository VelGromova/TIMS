import Vue from 'vue';
import Router from 'vue-router';
import MapComponent from '@/components/Map'
import TicTacToe from '@/components/TicTacToe'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: MapComponent,
    },
    {
      path: '/tic-tac-toe',
      component: TicTacToe,
    },
  ],
});
