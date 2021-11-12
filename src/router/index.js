import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../components/HomePage'
import PlayerInfo from './../components/PlayerInfo'

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
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;