<template>
<br>
    <div class="TournamentListContainer">
      <ul id="Tournamentcards">
        <div class="cardflex">
          <div class="tournamentcard card-deck" v-for="tournament in tournaments" :key="tournament.tournamentid">
            <TournamentCard :tournament="tournament"/>
          </div>
        </div>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import TournamentCard from './TournamentCard.vue'

export default {
    name: "TournamentHomePage",
    components: {
        TournamentCard
    },
    data () {
        return {
            tournaments: '',

        }
    },
    mounted() {
        this.GetAllTournaments();
    },
    methods: {
        async GetAllTournaments(){
            try {const res = await axios
                    .get('https://localhost:44315/Tournament/GetAllTournaments')
                    .then((result) => {
                    return result.data;
                    });
                this.tournaments = res
                this.loaded = true
            } catch (error){
                console.log(error)
            }
        }
    },

}
</script>