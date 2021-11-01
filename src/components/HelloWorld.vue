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
      <a v-for="god in gods" :key="god.godName">

        <div class="col-md-12 border-primary godlist-container">
          <a>{{ god.godName }}</a><br>
          <div class="col-md-7">
            <a>test</a>
          </div>
          <div class="col-md-5">
            <a>test2</a>
          </div>
        </div>

        <a>{{ god.godName }}</a><br>
        <a>Rank: {{ god.rank }}</a><br>
        <a>Worshippers: {{ god.worshippers}}</a><br>
        <a>Wins: {{ god.wins}}</a><br>
        <a>Losses: {{ god.losses}}</a><br>
        <a>Kills: {{ god.kills}}</a><br>
        <a>Deaths: {{ god.deaths}}</a><br>
        <a>Assists: {{ god.assists}}</a><br>
        <a>Minion Kills: {{ god.minionKills}}</a><br>
        <a>Class: {{god.godClass }}</a><br>
        <img :src="getImgUrl(god.godClass)">
        <br><br>


        <div class="col-md-12 index-divider"></div>

            <div class="col-md-12 index-god">
                <div class="index-post-title">
                    
                </div>
                <div class="row">
                    <div class="col-md-7 index-post-image">
                        <div></div>
                        <img :src="getImgUrl(god.godClass)">
                        <div></div>
                    </div>
                    <div class="col-md-3 index-post-upvotes">
                        <p></p>
                        <h><span id="txtHint"></span></h>
                        <br>
                        <div class="col-md-12 index-post-commentbox">
                            <p>Most recent comment:</p>
                            <div class="col-md-12 index-post-comment">
                                <h1><a href='userpage.php?name=".$comment->commentuser."'></a></h1>
                                <h2></h2>
                            </div>
                        </div><br>
                        <a href="postpage.php?id=<?php echo $post->postid;?>">View post</a>
                    </div>
                </div>
            </div>


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
</style>
