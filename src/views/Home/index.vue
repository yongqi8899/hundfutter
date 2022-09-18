<template>
  <div class="layout dog-mini">
    <div class="left">
      <HomeLeft />
    </div>
    <div class="recht bgColor">
      <HomeRecht />
    </div>
  </div>
</template>

<script>
import HomeRecht from "./HomeRecht";
import HomeLeft from "./HomeLeft";
export default {
  name: "HomeView",
  components: {
    HomeLeft,
    HomeRecht,
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1024px) {
  .dog-mini {
    margin: 0 auto;
  }
  .left {
    transform: scale(0.9);
  }

  .recht {
    background-color: rgba(255, 255, 255, 0.66);
    position: absolute;
    left: 15%;
    width: 70%;
    top: 60%;
    padding: 10px 20px;
    z-index: 10;
  }
}
</style>
