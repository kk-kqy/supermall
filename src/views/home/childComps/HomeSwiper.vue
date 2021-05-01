<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"


export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  data() {
    return{
      isLoad:false
    }
  },
  props:{
    banner:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    imgLoad(){
      if (!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
