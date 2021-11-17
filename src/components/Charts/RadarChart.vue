<template>
  <div  :class="this.chartName">
    <canvas></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'LineChartContainer',
  methods: {
    initiateChart(chartData, chartOptions, chartName) {
      const chartElement = document.querySelector(`.${chartName} canvas`);
      const chart = new Chart(chartElement, {
        name: chartName,
        type: 'radar',
        data: chartData,
        options: chartOptions,
      });
      return chart;
    }
  },
  props: {
    chartdata: {
        default: null
    },
    options: {
      type: Object,
      default(){
        return {
            responsive: true,
            maintainAspectRatio: false,
            gridLines: {
                display: false
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                }
            },
            legend: {
                display: false
            },
        }
      }
    },
    chartName: {
      type: String,
      default: "null"
    }
  },
  mounted() {
    this.loaded = false
    // console.log(this.chartName)
    try {
      this.loaded = true
      this.initiateChart(this.chartdata, this.options, this.chartName)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>