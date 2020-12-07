<template>
  <div>
    <drag-item v-model="list">
      <div class="box" v-for="li in list" :key="li.label">{{li.label}}</div>
    </drag-item>
  </div>
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
  }
}
</script>

<style lang="scss" scoped>
.box{
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
