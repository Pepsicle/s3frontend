<template>
  <button
    type="button"
    class="btn btn-primary activateModal"
    @click="modal.show()"
  >
    Sign up for {{ modalTournament.tournamentDescription }}
  </button>

  <div class="modal fade" ref="Component" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Signupform {{ modalTournament.tournamentDescription }}
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="modal.hide()"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5>Enter playername here:</h5>
          <br />
          <input type="text" v-model="userName" /><br />
          <div>
            <button class="btn btn-primary" v-on:click="AddUserToTournament">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Modal } from "bootstrap";

export default {
  name: "Modal",
  data: () => ({
    modal: null,
    componentcount: "",
    userName: "",
  }),
  props: {
    modalTournament: {
      default: null,
    },
    modalContent: {
      default: null,
      type: Array,
    },
    modalType: {
      default: null,
      type: String,
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.Component);
  },
  methods: {
    async AddUserToTournament() {
      console.log("adding user");
      try {
        const res = await axios
          .post(
            "https://localhost:44315/Tournament/AddPlayerToTournament?userName=" + this.userName + "&tournamentId=" + this.modalTournament.tournamentId
          )
          .then((result) => {
            return result.data;
          });
        if(res == 200) {
          console.log("Redirecting...")
          this.modal.hide()
          this.$router.push('Tournaments')
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error);
      }
      this.loaded = true;
    },
  },
};
</script>