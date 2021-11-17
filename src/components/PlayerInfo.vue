<template>
  <div class="hello">
    <form>
      <div>
        <input type="text" v-model="playerInput">
      </div>
    </form>
    <div>
      <button class="btn btn-primary" v-on:click="getData">Get playerdata</button>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="getWorshipers">Get Player Worshipers</button>
    </div>

    <p>{{ playerdata }}</p>
    <ul id="hello">
      <div class="cardflex">
        <a v-for="god in gods" :key="god.godName">
          <GodCard :god="god" :KDA="[god.kills, god.deaths, god.assists]" />
        </a>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import GodCard from './GodCards.vue'

export default {
  name: 'hello',
  components: {
      GodCard
  },
  data () {
    return {
      name: 'App',
      playerdata: '',
      playerInput: '',
      playerWorshipers: '',
      gods: []
    }
  },
  methods: {
    async getData() {
      try {
        const res = await axios
            .get('https://localhost:44329/API/GetPlayerStats?playerName=' + this.playerInput)
            .then((result) => {
              return result.data;
            });
        this.playerdata = res
      } catch (error){
        console.log(error)
      }
    },
    async getWorshipers() {
      try {
        const res = await axios
            .get('https://localhost:44329/API/GetPlayerWorshipers?playerName=' + this.playerInput)
            .then((result) => {
              this.gods = result.data
            //   return result.data;
            });
        this.playerWorshipers = res
      } catch (error){
        console.log(error)
      }
    },
    getImgUrl(godClass) {
      var images = require.context('../assets/ClassIcons', false, /\.png$/)
      return images('./' + godClass + ".png")
    }
  }
}
</script>

<style scoped>
a {
  color: #000000;
}
</style>