<template>
    <div class="card wholecard">
        <div class="card-header"> 
            <div class="row">
                <div class="col-md-10">
                    <h5 class="card-title">{{ this.tournament.tournamentDescription }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted">Organised by: {{ this.tournament.tournamentOrganisor }}</h6>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger disabled" style="justify-content: right;">Delete Tournament</button>
                </div>
            </div>
        </div>
        <div v-if="loaded" class="card-body">
            <JoinTournamentModal :modalTitle="'Join: ' + this.tournament.tournamentDescription" :modalTournament="this.tournament"/>
            <p>Participating members:</p>
            <li v-for="user in tournamentUsers" :key="user.userId" class="userList">
                <p class="card-title">{{ user.userName }}</p>
            </li>
        </div>
    </div>
    <br>
</template>

<script>
import axios from 'axios'
import JoinTournamentModal from './JoinTournamentModal.vue'

export default {
    name: "TournamentCard",
    components: {
        JoinTournamentModal
    },
    data () {
        return {
            user: '',
            tournamentUsers: [],
            loaded: false,
        }
    },
    props: {
        tournament: {
            default: null
        }
    },
    mounted() {
        this.GetTournamentPlayers();
    },
    methods: {
        async GetTournamentPlayers(){
            try {const res = await axios
                    .get('https://localhost:44315/Tournament/GetTournamentUsers?tournamentId=' + this.tournament.tournamentId)
                    .then((result) => {
                    return result.data;
                    });
                this.tournamentUsers = res
                this.loaded = true
            } catch (error){
                console.log(error)
            }
            this.loaded = true;
        }
    },

}
</script>

<style scoped>
.userList {
    margin-left: 2%;
}

.wholecard {
    width: 90%;
}
</style>