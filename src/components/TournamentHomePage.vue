<template>
<br>
<div class="col-md-6 offset-3 createtournament">
    <h5>Create a tournament!</h5>
    <input type="text" v-model="tournamentUsername" placeholder="Enter your username" /><br /><br />
    <input type="text" v-model="tournamentDescription" placeholder="Enter a description" /><br /><br />
    <div>
    <button class="btn btn-primary" v-on:click="CreateTournament">
        Create Tournament
    </button>
    </div><br />
</div>
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
            tournamentUsername: '',
            tournamentDescription: '',
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
        },
        async CreateTournament(){
            try {const res = await axios
                    .post("https://localhost:44315/Tournament/CreateTournament?organisor=" + this.tournamentUsername + "&tournamentDescription=" + this.tournamentDescription)
                    .then((result) => {
                    return result.data;
                    });
                this.createdTournament = res
                this.loaded = true
            } catch (error){
                console.log(error)
            }
        }
    },

}
</script>

<style scoped>
.createtournament {
    width: 40%;
    justify-content: center;
    text-align: center;
}
</style>