<template>
  <div class="drag-wrap">
    <div class="drag-item" v-for="li in data" :key="li.label" v-drag>
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
  directives: {
    drag: {
      inserted: (el) => {
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
            dragItem.classList.add('drag-active')
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
            dragItem.classList.remove('drag-active')
            dragItem.removeAttribute('style')
            cloneNode.remove()
            document.onmousemove = null
            document.onmouseup = null
          }
          return false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-wrap {
  position: relative;
  display: flex;
  flex-direction: row;
  .drag-item {
    cursor: pointer;
  }
  .drag-active{
    position: absolute;
    transition: none;
  }
}
</style>
