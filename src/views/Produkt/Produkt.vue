<template>
  <div class="content">
    <div class="card" v-for="produkt in produkte" :key="produkt.id">
      <div>
        <img src="@/assets/img/loading.gif" v-lazy="produkt.card" alt="" />
      </div>
      <div class="text">
        <h2>{{ produkt.title }}</h2>
        <h2>€ {{ produkt.price }}</h2>

        <div class="btn">
          <router-link :to="'/detail/' + produkt.id" >
             <my-btn :title="'MEHR'"  @click.native="showProdukte"> </my-btn>
          </router-link>
          <my-btn :title="'IN DEN EINKAUFSWAGEN'"  @click="doAddToCard" >
          </my-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProdukt, addShopcart } from '@/api/produkt'
export default {
  data() {
    return {
      cur: 0,
      timer: null,
      produkte:[]
    }
  },
  created(){
    this.produkte = getProdukt()
  },
  methods: {
   doAddToCard(){
      addShopcart({
        ...this.produkt,
        count:this.$store.state.count,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 26rem);
  grid-gap: 1rem;
  .card {
    width: 100%;
    height: 100%;
   border-radius: 50px;
    background-color: var(--bgColor);
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50px 50px 0 0;
    }
    .text {
      display: block;
      line-height: 3rem;
      margin: 2rem;
      text-align: center;
    }
    & .btn {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 1rem;
    }
  }
}
.card:hover {
  background-color: var(--themeColor);
  h2,
  .btn {
    color: white;
  }
  transform: scale(1.1);
  z-index: 10;
}
h2 {
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 900;
}
@media only screen and (max-width: 1024px) {
  .card:hover {
    background-color: var(--themeColor);
    h2,
    .btn {
      color: white;
    }
    transform: scale(1);
    z-index: 10;
  }
}
</style>
