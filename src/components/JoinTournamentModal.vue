<template>
  <button type="button" class="btn btn-primary activateModal" @click="modal.show()">Sign up for {{modalTournament.tournamentDescription}}</button>

  <div class="modal fade" ref="Component" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Signupform {{modalTournament.tournamentDescription}}</h5>
          <button
            type="button"
            class="btn-close"
            @click="modal.hide()"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5>Enter playername here:</h5><br>
          <form>
            <input type="text" v-model="userName">
          </form><br>
          <div>
            <button class="btn btn-primary" v-on:click="AddUserToTournament">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Modal } from "bootstrap";

export default {
  name: "Modal",
  data: () => ({
    modal: null,
    componentcount: '',
    userName: '',
  }),
  props: {
    modalTournament: {
      default: null,
    },
    modalContent: {
      default: null,
      type: Array
    },
    modalType: {
      default: null,
      type: String
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.Component);
  },
  methods: {
    async AddUserToTournament() {
        try {const res = await axios
                    .get('https://localhost:44315/Tournament/GetTournamentUsers?userName=' + this.userName + '&tournamentId=' + this.modalTournament.tournamentId)
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
  }
};
</script>