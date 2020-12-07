<template>
  <drag-box :data="list" @on-change="changeCard">
    <div class="box" slot-scope="{data}">{{data.label}}</div>
  </drag-box>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      list: [
        {
          label: 'box1'
        },
        {
          label: 'box2'
        },
        {
          label: 'box3'
        }
      ]
    }
  },
  methods: {
    changeCard (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 50px;
  height: 50px;
  background-color: #fc0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #fff;
}
</style>
