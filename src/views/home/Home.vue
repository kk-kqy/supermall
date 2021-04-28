<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"/>
    <home-recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommendView from "./childComps/HomeRecommendView"
  import FeatureView from "./childComps/FeatureView"

  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"

  import {getHomeMultidata, getHomeGoods} from "network/home"

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return{
        banner:[],
        recommend:[],
        goods:{
          'pop':{
            page:0,
            list:[]
          },
          'new':{
            page:0,
            list:[]
          },
          'sell':{
            page:0,
            list:[]
          },
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
