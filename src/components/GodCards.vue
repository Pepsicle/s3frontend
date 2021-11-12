<template>
    <div class="cardflex">
        <div class="col-md-12 card">
            <div class="card-header"> {{ this.god.godName }} 
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="container col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <a>Kills: {{ this.god.kills }}</a><br>
                                    <a>Deaths: {{ this.god.deaths }}</a><br>
                                    <a>Assists: {{ this.god.assists }}</a><br>
                                    <a>Minion Kills: {{ this.god.minionKills }}</a>
                                </div>
                                <div class="col-md-6">
                                    <a>Mastery rank: {{ this.god.rank }}</a><br>
                                    <a>Worshippers: {{ this.god.worshippers }}</a><br>
                                    <a>Wins: {{ this.god.wins }}</a><br>
                                    <a>Losses: {{ this.god.losses }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <img :src="getImgUrl(this.god.godClass)" class="classImage"><br>
                        <a> {{ this.god.godClass }} </a>
                        <RadarChart />
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
import RadarChart from './Charts/RadarChart.vue'

export default {
    name: "GodCard",
    components: {
        RadarChart,
    },
    props: {
        god: {
            default: null
        },
    },
    methods: {
        getImgUrl(godClass) {
            var images = require.context('../assets/ClassIcons', false, /\.png$/)
            return images('./' + godClass + ".png")
        }
    }
}
</script>

<style>
img {
  max-width: 90%;
}

.cardflex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>