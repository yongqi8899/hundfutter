<template>
  <div>
    <div class="produkt-container" v-if="produkt && produkt.imgs">
      <!-- <i class="icofont-circled-left icofont-3x"></i> -->
      <img
        v-for="(img, j) in produkt.imgs"
        :key="j"
        :src="img"
        alt=""
        v-show="cur == j"
      />
    </div>
  </div>
</template>
<script>
import { getProduktById } from "@/api/produkt";
export default {
  data() {
    return {
      cur: 0,
      timer: null,
      produkt: null,
    };
  },
  created() {
    const proId = this.$route.params.id;
    this.produkt = getProduktById(proId);
  },
  methods: {
    play() {
      this.timer = setInterval(this.autoPlay, 2000);
    },
    autoPlay() {
      this.cur++;
      if (this.cur >= this.produkt.imgs.length) {
        this.cur = 0;
      }
    },
  },
  mounted() {
    this.play();
  },
  destroyed() {
    clearInterval(this.timer);
    clearInterval(this.imgs);
  },
};
</script>
<style lang="scss" scoped>
body {
  color: var(--text);
}
h2 {
  color: var(--themeColor);
}
.produkte_discreption {
  background-color: antiquewhite;
  border: 1px var(--themeColor);
}
.content {
  display: flex;
}
.produkt-container {
  display: flex;
  position: relative;
  img {
    width: 37rem;
    height: 37rem;
  }
  .icofont-circled-left {
    position: absolute;
    left: 10px;
    top: 50%;
    transition: (-50%);
  }
  .banner-circle {
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
  .icofont-circled-right {
    position: absolute;
    right: 10px;
    top: 50%;
  }
  .icofont-3x {
    color: var(--bgColor);
    &:hover {
      color: var(--themeColor);
    }
  }
}

@media only screen and (max-width: 768px) {
  img {
    width: 20rem;
    height: 20rem;
  }
  #content-wrapper {
    flex-wrap: wrap;
  }
}
</style>
