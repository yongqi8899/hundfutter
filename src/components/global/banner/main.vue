<template>
    <div class="banner">
      <img :src="v" alt="" v-for="(v,i) in img" :key="i" v-show="cur==i">
      <div class="banner-circle">
        <ul>
          <li :class="cur==i ? 'selected' : ''" v-for="(v,i) in img" :key="i"></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name:'my-banner',
  data(){
    return {
      cur:0,
      timer:null,
      
    }
  },
  props:['img','selected'],
  methods:{
    play(){
      this.timer = setInterval(this.autoPlay, 2000)
    },
    autoPlay(){
      this.cur++;
      if(this.cur>=this.img.length){
        this.cur = 0;
      }
    }
  },
  mounted(){
    this.play();
  },
  destroyed(){
  clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.banner {
   position: relative;
    float:left;
  img{
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0;
    padding: 0;
}
}
.selected{
  color: var(--themeColor);
  opacity: 1;
  border-bottom: 1px solid var(--themeColor);

}
.banner .banner-circle {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: #fff;
}
.banner .banner-circle li{
  display:inline-block;
  background:var(--bgColor);
  border-radius: 50%;
  padding:5px;
  margin:2px;
}
.banner .banner-circle ul {
  text-align: center;
}
.banner .banner-circle .selected {
  background: var(--themeColor);
}
</style>style