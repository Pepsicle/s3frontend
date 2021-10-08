<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div>
      <ul>
        <li v-for="user in users" v-bind:key="user.firstname" >
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <input type="text" v-model="input_val">
    </div>
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <hr />
    <div>
      <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
    </div>
    <br>
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
      <a v-for="god in gods" :key="god.godName">
        <a>{{ god.godName }}</a><br>
        <a>Rank: {{ god.rank }}</a><br>
        <a>Worshippers: {{ god.worshippers}}</a><br>
        <a>Wins: {{ god.wins}}</a><br>
        <a>Losses: {{ god.losses}}</a><br>
        <a>Kills: {{ god.kills}}</a><br>
        <a>Deaths: {{ god.deaths}}</a><br>
        <a>Assists: {{ god.assists}}</a><br>
        <a>Minion Kills: {{ god.minionKills}}</a><br>
        <br><br>
      </a>
    </ul>
    <p>{{ playerWorshipers }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      input_val: '',
      counter: 0,
      posts: [],
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
              return result.data;
            });
        console.log("API called")
        console.log(res)
        this.playerWorshipers = res
      } catch (error){
        console.log("error")
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
</style>
