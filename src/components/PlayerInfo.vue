<template>
  <div class="hello">
    <form>
      <div>
        <input type="text" v-model="playerInput">
      </div>
      <div>
        <button class="btn btn-primary" v-on:click="getData">Get playerdata</button>
      </div>
    </form>
      <div>
        <button class="btn btn-primary" v-on:click="getWorshipers">Get Player Worshipers</button>
      </div>

    <p>{{ playerdata }}</p>
    <ul id="hello">
      <div class="cardflex">
        <a v-for="god in gods" :key="god.godName">
            <GodCard :god="god" />
            <!-- <div class="col-md-12 card">
              <div class="card-header"> {{ god.godName }} 
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-9">
                    <div class="container col-md-12">
                      <div class="row">
                        <div class="col-md-6">
                          <a>Kills: {{ god.kills }}</a><br>
                          <a>Deaths: {{ god.deaths }}</a><br>
                          <a>Assists: {{ god.assists }}</a><br>
                          <a>Minion Kills: {{ god.minionKills }}</a>
                        </div>
                        <div class="col-md-6">
                          <a>Mastery rank: {{ god.rank }}</a><br>
                          <a>Worshippers: {{ god.worshippers }}</a><br>
                          <a>Wins: {{ god.wins }}</a><br>
                          <a>Losses: {{ god.losses }}</a>
                        </div>
                    </div>
                  </div>
                </div>
                  <div class="col-md-3">
                    <img :src="getImgUrl(god.godClass)" class="classImage"><br>
                    <a> {{ god.godClass }} </a>
                  </div>
                </div>
              </div>
            </div>
          <br> -->
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
      console.log("starting API call");
      try {
        console.log("calling API")
        const res = await axios
            .get('https://localhost:44329/API/GetPlayerStats?playerName=' + this.playerInput)
            .then((result) => {
              return result.data;
            });
        console.log("API called")
        console.log(res)
        this.playerdata = res
      } catch (error){
        console.log("error")
        console.log(error)
      }
    },
    async getWorshipers() {
      console.log("starting API call");
      try {
        console.log("calling API")
        const res = await axios
            .get('https://localhost:44329/API/GetPlayerWorshipers?playerName=' + this.playerInput)
            .then((result) => {
              this.gods = result.data
            //   return result.data;
            });
        console.log("API called")
        console.log(res)
        this.playerWorshipers = res
      } catch (error){
        console.log("error")
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