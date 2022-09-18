<template>
  <div class="layout">
    <div class="left">
      <AboutLeft />
    </div>
    <div class="recht">
      <AboutRecht />
    </div>
  </div>
</template>

<script>
import AboutRecht from "./AboutRecht.vue";
import AboutLeft from "./AboutLeft.vue";
export default {
  name: "AboutView",
  components: {
    AboutLeft,
    AboutRecht,
  },
};
</script>

<style scoped>
.left {
  width: 50vw;
  position: sticky;
}
@media only screen and (max-width: 1024px) {
  .left {
    width: 100vw;
  }
}
</style>
