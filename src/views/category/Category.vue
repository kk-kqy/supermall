<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">点击</button>
      <li>LIEJ1</li>
      <li>LIEJ2</li>
      <li>LIEJ3</li>
      <li>LIEJ4</li>
      <li>LIEJ5</li>
      <li>LIEJ6</li>
      <li>LIEJ7</li>
      <li>LIEJ8</li>
      <li>LIEJ9</li>
      <li>LIEJ10</li>
      <li>LIEJ11</li>
      <li>LIEJ12</li>
      <li>LIEJ13</li>
      <li>LIEJ14</li>
      <li>LIEJ15</li>
      <li>LIEJ16</li>
      <li>LIEJ17</li>
      <li>LIEJ18</li>
      <li>LIEJ19</li>
      <li>LIEJ20</li>
      <li>LIEJ21</li>
      <li>LIEJ22</li>
      <li>LIEJ23</li>
      <li>LIEJ24</li>
      <li>LIEJ25</li>
      <li>LIEJ26</li>
      <li>LIEJ27</li>
      <li>LIEJ28</li>
      <li>LIEJ29</li>
      <li>LIEJ30</li>
      <li>LIEJ31</li>
      <li>LIEJ32</li>
      <li>LIEJ33</li>
      <li>LIEJ34</li>
      <li>LIEJ35</li>
      <li>LIEJ36</li>
      <li>LIEJ37</li>
      <li>LIEJ38</li>
      <li>LIEJ39</li>
      <li>LIEJ40</li>
      <li>LIEJ41</li>
      <li>LIEJ42</li>
      <li>LIEJ43</li>
      <li>LIEJ44</li>
      <li>LIEJ45</li>
      <li>LIEJ46</li>
      <li>LIEJ47</li>
      <li>LIEJ48</li>
      <li>LIEJ49</li>
      <li>LIEJ50</li>
      <li>LIEJ51</li>
      <li>LIEJ52</li>
      <li>LIEJ53</li>
      <li>LIEJ54</li>
      <li>LIEJ55</li>
      <li>LIEJ56</li>
      <li>LIEJ57</li>
      <li>LIEJ58</li>
      <li>LIEJ59</li>
      <li>LIEJ60</li>
      <li>LIEJ61</li>
      <li>LIEJ62</li>
      <li>LIEJ63</li>
      <li>LIEJ64</li>
      <li>LIEJ65</li>
      <li>LIEJ66</li>
      <li>LIEJ67</li>
      <li>LIEJ68</li>
      <li>LIEJ69</li>
      <li>LIEJ70</li>
      <li>LIEJ71</li>
      <li>LIEJ72</li>
      <li>LIEJ73</li>
      <li>LIEJ74</li>
      <li>LIEJ75</li>
      <li>LIEJ76</li>
      <li>LIEJ77</li>
      <li>LIEJ78</li>
      <li>LIEJ79</li>
      <li>LIEJ80</li>
      <li>LIEJ81</li>
      <li>LIEJ82</li>
      <li>LIEJ83</li>
      <li>LIEJ84</li>
      <li>LIEJ85</li>
      <li>LIEJ86</li>
      <li>LIEJ87</li>
      <li>LIEJ88</li>
      <li>LIEJ89</li>
      <li>LIEJ90</li>
      <li>LIEJ91</li>
      <li>LIEJ92</li>
      <li>LIEJ93</li>
      <li>LIEJ94</li>
      <li>LIEJ95</li>
      <li>LIEJ96</li>
      <li>LIEJ97</li>
      <li>LIEJ98</li>
      <li>LIEJ99</li>
      <li>LIEJ100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType: 3,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position) =>{
        console.log(position);
      })
      this.scroll.on('pullingUp',() =>{
        console.log('上拉加载更多！');
      })
    },
    methods:{
      btnClick(){
        console.log('btnClick');
      }
    }
  }
</script>

<style scoped>
.wrapper{
  height: 400px;
  background-color: red;
  /*overflow: hidden;*/
  /*overflow-y: scroll;*/
}
</style>
