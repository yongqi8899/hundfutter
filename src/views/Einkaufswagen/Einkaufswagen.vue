<template>
  <div id="shopCart-info">
    <ul>
      <li v-for="v in cartDatas" :key="v.id">
        <div class="shoppCart-list-1">
          <input type="checkbox" />
          <img :src="v.card" alt="" />
        </div>
        <div class="shoppCart-list-r">
          <p>{{ v.name }}</p>
          <span>{{ v.price }}</span>
          <lable>
            <button>+</button>
            {{v.count}}
            <button>-</button>
          </lable>
        </div>
      </li>
    </ul>
    <div class="shoppCar-total">
      <input type="checkbox" />
      <label for="">
        <span>Total: </span>
        <b>{{}}</b>
        <i>bezahlen</i>
      </label>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { addShopcart,getShopcart, getShopcartGoodsById } from '@/api/produkt'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      count:'0',
      cartDatas:[]
    };
  },
  created(){
    this.cartDatas=getShopcart()
  },
  computed:{
    ...mapGetters(['cartDatas']),
      incrementC() {
        addShopcart+=1
    this.count += 1
  },
  decrementC() {
    if (this.count > 0) {
    this.count -= 1
    }
  }
  }
};
</script>

<style></style>
