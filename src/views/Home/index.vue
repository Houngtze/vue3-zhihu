<template>
    <div>

    </div>
</template>

<script lang="ts">
import  { defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
  name: "Home",
  components: {

  },
  setup() {
    const state: any = reactive({
      count: 1
    })
    interface parma {
      txt: string,
      type: number
    }
    const supCounter = (p: parma) => {
      console.log(p.txt + p.type)
      state.count++
      console.log("count:" + state.count)
    }
    onMounted(() => {
      supCounter({
        txt: "love",
        type: 123
      })
    })
    return {
      state,
      supCounter
    }
  }
})
</script>

<style lang="scss" scoped>
  p { 
   font-size: .32rem
  }
</style>