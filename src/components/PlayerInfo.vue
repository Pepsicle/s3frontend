<template>
  <div class="Playerinfo">
    <div v-if="!loaded" class="align-middle input_form">
      <h5>Enter playername here:</h5><br>
      <form>
        <input type="text" v-model="playerInput">
      </form><br>
      <div>
        <button class="btn btn-primary" v-on:click="getUser">Search for User</button>
      </div>
    </div>

    <div v-if="loaded" class="userJumbotron">
      <UserJumbotron :playerStats="user.playerStats" :userStatus="user.userStatus"></UserJumbotron>
    </div>
    <div class="godcardscontainer">
      <ul id="Godcards">
        <div>
          <button v-if="loaded" class="btn btn-primary" v-on:click="sortArray" disabled>Sort By Name</button>
        </div>
        <div class="cardflex">
          <div class="godcard card-deck" v-for="god in gods" :key="god.godName">
            <GodCard :god="god" :KDA="[god.kills, god.deaths, god.assists]" />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GodCard from './GodCards.vue'
import UserJumbotron from './UserJumbotron.vue'

export default {
  name: 'PlayerInfoPage',
  components: {
      GodCard,
      UserJumbotron,
  },
  data () {
    return {
      name: 'PlayerInfo',
      playerInput: '',
      user: '',
      gods: [],
      loaded: false,
    }
  },
  methods: {
    async getUser() {
      try {const res = await axios
            .get('https://localhost:44329/API/GetUser?playerName=' + this.playerInput)
            .then((result) => {
              return result.data;
            });
        this.user = res
        this.gods = res.godList.gods
        this.loaded = true
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

.input_form {
  align-content: center;
  text-align: center;
  margin-top: 10%;
}

.godcard {
  padding: 0.5%;
  text-align: center;
}

.cardflex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>