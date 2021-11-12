<template>
  <div class="hello">
    <form>
      <div>
        <input type="text" v-model="playerInput">
      </div>
      <div>
        <button class="btn btn-primary" v-on:click="getData">Get playerdata</button>
      </div>
      <div>
        <button class="btn btn-primary" v-on:click="getWorshipers">Get Player Worshipers</button>
      </div>
    </form>

    <p>{{ playerdata }}</p>
    <ul id="hello">
      <div class="cardflex">
        <a v-for="god in gods" :key="god.godName">
          <!-- <div class="row"> -->

            <div class="col-md-12 card">
              <div class="card-header"> {{ god.godName }} 
                <!-- <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active"> {{ this.playerInput }} </a>
                  </li>
                </ul> -->
              </div>
              <div class="card-body">
  <!--               
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul> -->
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

            <!-- <div class="col-md-5 godlist-container card">
              <p class="godName">{{ god.godName }}</p>
              <hr>
              <div class="row">
                <div class="col-md-10">
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
                <div class="col-md-2">
                  <img :src="getImgUrl(god.godClass)" class="classImage"><br>
                  <a> {{ god.godClass }} </a>
                </div>
              </div>

            </div> -->
          <!-- </div> -->
          <br>
        </a>
      </div>
    </ul>
    <!-- <p>{{ playerWorshipers }}</p> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
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
      window.location.href = 'https://localhost:8080/?#/';
      console.log("starting API call");
      try {
        console.log("calling API")
        const res = await axios
            .get('https://localhost:44329/API/GetPlayerWorshipers?playerName=' + this.playerInput)
            .then((result) => {
              this.gods = result.data
              return result.data;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #000000;
}
img {
  max-width: 90%;
}

.cardflex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>