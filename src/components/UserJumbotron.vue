<template>
    <div class="jumbotron col-md-10 offset-1 maindisplay">
        <h1 class="display-4">{{ this.playerStats.playerName}}</h1>
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
    }),
}
</script>

<style scoped>
.maindisplay {
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>