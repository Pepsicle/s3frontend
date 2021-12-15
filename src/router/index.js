import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../components/HomePage'
import PlayerInfo from './../components/PlayerInfo'
import TournamentHomePage from './../components/TournamentHomePage'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/PlayerInfo",
      name: "PlayerInfo",
      component: PlayerInfo,
    },
    {
      path: "/Tournaments",
      name: "TournamentHomePage",
      component: TournamentHomePage,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;