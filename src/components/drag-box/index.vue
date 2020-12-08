<template>
  <div class="drag-wrap">
    <div class="drag-item" v-for="li in dragList" :key="li.label">
      <slot :data="li"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag-box',
  props: {
    data: {
      type: Array,
      rerquired: true
    }
  },
  data () {
    return {
      dragWrap: null,
      type: false
    }
  },
  computed: {
    dragList: {
      get () {
        return JSON.parse(JSON.stringify(this.data))
      },
      set () { }
    }
  },
  mounted () {
    this.dragMove()
  },
  methods: {
    dragMove () {
      const parentNode = this.$el
      const child = parentNode.childNodes
      let minLine = 1000
      let minIndex = 0
      for (let i = 0; i < child.length; i++) {
        child[i].onmousedown = (element) => {
          const dragItem = child[i]
          const x = element.offsetX
          const y = element.offsetY
          // 克隆新节点
          const cloneNode = dragItem.cloneNode(true)
          parentNode.replaceChild(cloneNode, dragItem)

          dragItem.style.position = 'absolute'
          dragItem.style.top = cloneNode.offsetTop + 'px'
          dragItem.style.left = cloneNode.offsetLeft + 'px'
          parentNode.appendChild(dragItem)
          // 隐藏当前元素
          cloneNode.style.opacity = 0

          // 拖动
          document.onmousemove = (value) => {
            // 计算拖动元素的定位坐标
            const left = value.clientX - x - parentNode.offsetLeft
            const top = value.clientY - y - parentNode.offsetTop
            dragItem.style.top = top + 'px'
            dragItem.style.left = left + 'px'
            return false
          }
          // 松开
          document.onmouseup = () => {
            // 停止移动事件
            document.onmousemove = null
            // 定义对应的index
            for (let j = 0; j < child.length - 1; j++) {
              const distX = dragItem.offsetLeft - child[j].offsetLeft
              const distY = dragItem.offsetTop - child[j].offsetTop
              const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2))
              if (dist < minLine) {
                minLine = dist
                minIndex = j
              }
            }
            const swapArr = (arr, index1, index2) => {
              arr[index1] = arr.splice(index2, 1, arr[index1])[0]
              return arr
            }
            const list = swapArr(this.dragList, i, minIndex)
            this.changeData(list)

            document.onmouseup = null
            cloneNode.remove()
            dragItem.removeAttribute('style')
          }
        }
      }
    },
    changeData (data) {
      this.$emit('on-change', data)
      this.dragList = data
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-wrap {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .drag-item {
    cursor: pointer;
  }
}
</style>
