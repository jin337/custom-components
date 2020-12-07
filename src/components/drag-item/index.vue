<template>
  <div class="drag-box" v-drag>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'drag-item',
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  methods: {
    dragData (el) {
      const dragItem = el
      const parentNode = dragItem.parentNode
      let nowIndex = 0
      dragItem.onmousedown = (e) => {
        const disX = e.clientX - dragItem.offsetLeft
        const disY = e.clientY - dragItem.offsetTop

        // 克隆新节点
        const cloneNode = dragItem.cloneNode(true)
        parentNode.replaceChild(cloneNode, dragItem)
        parentNode.appendChild(dragItem)
        // 隐藏当前元素
        cloneNode.style.opacity = 0

        // 拖动
        document.onmousemove = (e) => {
          const left = e.clientX - disX
          const top = e.clientY - disY

          dragItem.style.width = cloneNode.clientWidth + 'px'
          dragItem.style.height = cloneNode.clientHeight + 'px'
          dragItem.style.position = 'absolute'
          dragItem.style.transition = 'none'
          dragItem.style.top = top + 'px'
          dragItem.style.left = left + 'px'

          const sibling = parentNode.children
          for (let i = 0; i < sibling.length - 1; i++) {
            const element = sibling[i]
            if (element.offsetTop === top) {
              nowIndex = i
            }
          }
          console.log(nowIndex)
          return false
        }
        // 停止
        document.onmouseup = (e) => {
          document.onmousemove = null
          document.onmouseup = null
        }
        return false
      }
    }
  },
  directives: {
    drag: {
      inserted: (el) => {
        const dragItem = el
        const childNodes = dragItem.childNodes
        const Index = 0
        childNodes.forEach(element => {
          const cY = element.offsetTop
          const cX = element.offsetLeft
          dragItem.onmousedown = (e) => {
            const disX = e.clientX - dragItem.offsetLeft
            const disY = e.clientY - dragItem.offsetTop
            console.log(disX, disY)
          }
        })
        // childNodes.onmousedown = (e) => {
        // const disX = e.clientX - dragItem.offsetLeft
        // const disY = e.clientY - dragItem.offsetTop
        //     // 克隆新节点
        //     // 隐藏当前元素

        //     // 拖动
        //     document.onmousemove = (e) => {
        //       return false
        //     }
        //     // 停止
        //     document.onmouseup = (e) => {
        //       document.onmousemove = null
        //       document.onmouseup = null
        //     }
        //     return false
        // }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-box {
  position: relative;
  display: inline-block;
}
</style>
