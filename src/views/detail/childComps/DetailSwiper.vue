<template>
    <swiper class="detail_swiper">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
        {{topImages.length}}
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail_swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
