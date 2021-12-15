<template>
  <div class="Playerinfo">
    <div v-if="loaded" class="searchOtherPlayer">
      <div class="">
        <p>Search other player:</p>
        <input type="text" v-model="playerInput" style="max-width-200px">
        <button class="btn btn-primary" v-on:click="getUser">Search for User</button>
      </div>
    </div>
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
      <UserJumbotron :playerStats="user.playerStats" :userStatus="user.userStatus"/>
    </div>

    <div class="container col-md-10 offset-2">
      <div v-if="loaded" class="sortMenu row">
        <div class="searcher col">
          <form>
            <input type="text" v-model="searchTerm" @change="filterByTerm()" placeholder="Search God"/>
          </form>
        </div>
        <div class="sorter col">Sort By: 
          <select v-model="sortType" @change="sortGods">
            <option value="godName">Name</option>
            <option value="worshippers">Worshippers</option>
            <option value="wins" disabled>Winrate</option>
            <option value="godClass">Class</option>
          </select>
          <select v-model="sortDirection" @change="sortGods">
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
        </div>
      </div>
    </div>
    <div class="godcardscontainer">
      <ul id="Godcards">
        <div class="cardflex">
          <div class="godcard card-deck" v-for="god in filterByTerm" :key="god.godName">
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
      sortDirection: 'DESC',
      sortType: 'worshippers',
      searchTerm: '',
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
    },
    sortGods(){
      this.gods.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a[this.sortType] == b[this.sortType] ) ? 0 : ( ( a[this.sortType] > b[this.sortType] ) ? 1 : -1 ) );
        }

        if( this.sortDirection == 'DESC' ){
          return ( ( a[this.sortType] == b[this.sortType] ) ? 0 : ( ( a[this.sortType] < b[this.sortType] ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
  },
  computed: {
    filterByTerm() {
      return this.gods.filter(god => {
        return god.godName.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
.Playerinfo {
  overflow-x: hidden;
}

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

.searchOtherPlayer {
  position: absolute;
  right: 5px;
  margin-right: 2%;
  margin-top: 1%;
}

.searchOtherPlayer input {
  max-width: 200px;
}

.searchOtherPlayer button {
  max-width: 200px;
}

.sorter {
  display: flex;
  align-items: center;
  justify-content: right;
}

.searcher {
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>