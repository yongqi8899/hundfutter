<template>
  <div class="recht">
    <div id="content-wrapper" v-if="produkt">
      <div class="text">
        <h1>{{ produkt.title }}</h1>
        <hr />
        <hr />
        <h1>€{{ produkt.price }}</h1>
        <hr />
        <h3>{{ produkt.text }}</h3>
        <div class="counter">
          <span class="ico icofont-ui-remove" @click="decrement"></span>
          <p>{{ $store.state.count }}</p>
          <span class="ico icofont-ui-add" @click="increment"></span>
          <my-btn :title="'IN DEN EINKAUFSWAGEN'" @click.native="doAddToCard()">
          </my-btn>
        </div>
        <my-btn :title="'zurück'" @click.native="goBack()" class="goback" />
      </div>
    </div>
  </div>
</template>
<script>
import { getProduktById, addShopcart, getShopcart } from "@/api/produkt";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    const proId = this.$route.params.id;
    this.produkt = getProduktById(proId);
    this.cart = getShopcart();
  },

  methods: {
    goBack() {
      this.$router.push("/produkt");
    },
    ...mapActions(["decrement"]),

    ...mapActions({
      increment() {
        this.$store.dispatch("increment");
      },
    }),
    doAddToCard() {
      this.$store.dispatch("cartAdd", this.item);
      this.$router.push("/order");
    },
  },

  computed: {
    ...mapState(["count"]),
  },
};
</script>
<style lang="scss" scoped>
#content-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  .text {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    line-height: 2rem;
    .ico {
      color: var(--themeColor);
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
    .goback {
      width: 100px;
    }
    .counter {
      display: flex;
      margin: 2rem 0;
      width: 100%;
      justify-content: space-between;

      .count {
        display: flex;
        border-bottom: 2px solid var(--themeColor);
        width: 5rem;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
}
</style>
