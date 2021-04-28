<template>
  <div class="goods" v-for="item in goods" :goodsItem="item">
    {{goods}}
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
