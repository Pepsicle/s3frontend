<template>
    <div class="card w-100 wholecard">
        <div class="card-header"> 
            <p class="card-title">{{ this.god.godName }} </p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-9">
                    <div class="container col-md-12">
                        <div class="row">
                            <div class="col-md-6 lefthalf">
                                <a>Kills: {{ this.god.kills }}</a><br>
                                <a>Deaths: {{ this.god.deaths }}</a><br>
                                <a>Assists: {{ this.god.assists }}</a><br>
                                <a>KD: </a>
                                <a v-if="this.KD >= 1" style="color:green; font-weight: bold">{{ this.KD }}</a>
                                <a v-if="this.KD < 1" style="color:red; font-weight: bold">{{ this.KD }}</a><br/>
                                <RadarChart :chartName="this.god.godName.replaceAll(' ', '-')" :chartdata="this.chartData" />
                                <!-- <a>Minion Kills: {{ this.god.minionKills }}</a> -->
                            </div>
                            <div class="col-md-6 middlehalf">
                                <a>Mastery rank: {{ this.god.rank }}</a><br>
                                <a>Worshippers: {{ this.god.worshippers }}</a><br><br>
                                <a>Wins: {{ this.god.wins }}</a><br>
                                <a>Losses: {{ this.god.losses }}</a><br><br>
                                <a>Winrate: </a>
                                <a v-if="this.winrateint > 50" style="color:green; font-weight: bold">{{ this.winrate }}</a>
                                <a v-if="this.winrateint == 50" style="font-weight: bold">{{ this.winrate }}</a>
                                <a v-if="this.winrateint < 50" style="color:red; font-weight: bold">{{ this.winrate }}</a>
                                <div v-if="loaded" class="progress">
                                    <div v-bind:style="winPercentageStyle" class="progress-bar bg-success" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"/>
                                    <div v-bind:style="lossPercentageStyle" class="progress-bar bg-danger" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <img :src="getImgUrl(this.god.godClass)" class="classImage"><br>
                    <a> {{ this.god.godClass }} </a>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
import RadarChart from './Charts/RadarChart.vue'

export default {
    name: "GodCard",
    components: {
        RadarChart,
    },
    data:() => ({
        KD: '',
        winrate: '',
        winrateint: '',
        winPercentageStyle: '',
        lossPercentageStyle: '',
        loaded: false,
    }),
    props: {
        god: {
            default: null
        },
        KDA: {
            type: Array,
        }
    },
    mounted() {
        this.KD = this.getKd()
        this.winrate = this.getWinrate()
        this.setWinratePercentages()
        this.loaded = true
    },
    methods: {
        getImgUrl(godClass) {
            var images = require.context('../assets/ClassIcons', false, /\.png$/)
            return images('./' + godClass + ".png")
        },
        getKd() {
            var KD = this.god.kills/this.god.deaths
            return KD.toFixed(2)
        },
        getWinrate() {
            var totalGames = this.god.wins + this.god.losses
            var winrate = (this.god.wins/totalGames)*100 
            return winrate.toFixed(2) + "%"
        },
        setWinratePercentages() {
            var totalWins = this.god.wins + this.god.losses
            var winPercentage = this.god.wins/totalWins*100
            var lossPercentage = this.god.losses/totalWins*100
            this.winrateint = winPercentage
            this.winPercentageStyle = "width: " + winPercentage.toString() + "%"
            this.lossPercentageStyle = "width: " + lossPercentage.toString() + "%"
        }
    },
    computed: {
        chartData() {
            return {
                labels: [
                    'Kills',
                    'Deaths',
                    'Assists'
                ],
                datasets: [{
                    label: "KDA",
                    data: this.KDA,
                    fill: true,
                    backgroundColor: 'rgba(65, 87, 168, 0.2)',
                    borderColor: 'rgb(65, 87, 168)',
                    pointBackgroundColor: 'rgb(65, 87, 168)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(65, 87, 168)'
                }]
            }
        }
    }
}
</script>

<style scoped>
img {
  max-width: 90%;
}

.middlehalf {
    width: 160px;
}

.lefthalf {
    width: 180px;
}
</style>