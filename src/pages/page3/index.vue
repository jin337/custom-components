<template>
  <div>
    <canvas id="demo6"></canvas>
    <canvas id="demo5"></canvas>
    <canvas id="demo4"></canvas>
    <canvas id="demo3"></canvas>
    <canvas id="demo2"></canvas>
    <canvas id="demo1"></canvas>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const demo1 = document.getElementById('demo1')
      const ctx1 = demo1.getContext('2d')
      demo1.width = 150
      demo1.height = 150
      ctx1.beginPath()
      ctx1.arc(60, 60, 50, 0, Math.PI * 0.5, false)
      ctx1.strokeStyle = '#fff'
      ctx1.stroke()

      const demo2 = document.getElementById('demo2')
      const ctx2 = demo2.getContext('2d')
      demo2.width = 150
      demo2.height = 150
      ctx2.beginPath()
      ctx2.lineTo(40, 30)
      ctx2.lineTo(100, 80)
      ctx2.lineTo(40, 120)
      ctx2.strokeStyle = '#fff'
      ctx2.stroke()

      const demo3 = document.getElementById('demo3')
      const ctx3 = demo3.getContext('2d')
      demo3.width = 150
      demo3.height = 150
      ctx3.beginPath()
      ctx3.fillStyle = '#fff'
      ctx3.fillRect(20, 10, 50, 50)
      ctx3.strokeStyle = '#fff'
      ctx3.strokeRect(80, 10, 50, 50)

      const demo4 = document.getElementById('demo4')
      const ctx4 = demo4.getContext('2d')
      demo4.width = 150
      demo4.height = 150
      ctx4.beginPath()
      ctx4.arc(75, 75, 50, 0, Math.PI * 2, false)
      ctx4.fillStyle = '#fff'
      ctx4.shadowBlur = 20
      ctx4.shadowColor = '#fff'
      ctx4.fill()

      const demo5 = document.getElementById('demo5')
      const ctx5 = demo5.getContext('2d')
      demo5.width = 150
      demo5.height = 150
      const grd = ctx5.createLinearGradient(0, 0, 0, 130)
      grd.addColorStop(0, '#f00')
      grd.addColorStop(1, '#fff')
      ctx5.fillStyle = grd
      ctx5.fillRect(10, 10, 130, 130)

      // const demo6 = document.getElementById('demo6')
      // demo6.width = document.documentElement.clientWidth
      // demo6.height = document.documentElement.clientHeight
      // // const ctx6 = demo6.getContext('2d')
      // const RoundItem = (index, x, y) => {
      //   this.index = index
      //   this.x = x
      //   this.y = y
      //   this.r = Math.random() * 2 + 1
      //   const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
      //   this.color = 'rgba(255,255,255)' + alpha + ')'
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  background-color: #000;
  margin-left: 10px;
  margin-bottom: 10px;
}
#demo6{
  width: 100%;
  height: 400px;
}
</style>
