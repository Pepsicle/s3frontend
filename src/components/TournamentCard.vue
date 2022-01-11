<template>
<div class="modal fade" ref="Component" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Notice:
          </h5>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to delete:  {{ tournament.tournamentDescription }}</p>
            <button class="btn btn-primary" v-on:click="DeleteTournament">
                Yes, Delete this Tournament
            </button>
            <button class="btn btn-secondary" v-on:click="modal.hide()">
                Cancel
            </button>
        </div>
      </div>
    </div>
  </div>
    <div class="card wholecard">
        <div class="card-header"> 
            <div class="row">
                <div class="col-md-10">
                    <h5 class="card-title">{{ this.tournament.tournamentDescription }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted">Organised by: {{ this.tournament.tournamentOrganisor }}</h6>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger" v-on:click="modal.show()" style="justify-content: right;">Delete Tournament</button>
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
import { Modal } from "bootstrap";

export default {
    name: "TournamentCard",
    components: {
        JoinTournamentModal
    },
    data () {
        return {
            modal: null,
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
        this.modal = new Modal(this.$refs.Component);
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
        },
        async DeleteTournament() {
            
        },
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