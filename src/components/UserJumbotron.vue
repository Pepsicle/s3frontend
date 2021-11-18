<template>
    <div class="jumbotron col-md-10 offset-1 maindisplay">
        <h1 class="display-4">{{ this.playerStats.playerName}}</h1>
        <span v-if="this.userStatus.userStatusCode == 0" class="badge alert-secondary">Offline</span>
        <span v-if="this.userStatus.userStatusCode == 1" class="badge alert-primary">In Lobby</span>
        <span v-if="this.userStatus.userStatusCode == 2" class="badge alert-info">In God Selection</span>
        <span v-if="this.userStatus.userStatusCode == 3" class="badge alert-success">In-Game</span>
        <span v-if="this.userStatus.userStatusCode == 4" class="badge alert-primary">Online</span>
        <p class="lead">{{ this.playerStats.playerStatusMessage }}</p>
        <hr class="my-4">
        <p class="lead">Level: {{ this.playerStats.level }}</p>
        <p class="lead">Clan: {{ this.playerStats.clanName }}</p>
        <p class="lead">Hours played: {{ this.playerStats.hoursPlayed }}</p>
    </div>
</template>

<script>

export default {
    name: "UserJumbotron",
    components: {
    },
    props: {
        playerStats: {
            default: null,
        },
        userStatus: {
            default: null,
        }
    },
    methods: {
    },
    mounted() {
    },
    data:() => ({
        statusCodeStyle: {

        }
    }),
}
</script>

<style scoped>
.maindisplay {
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>