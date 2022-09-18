<template>
  <div id="app">
    <div class="NavButton">
      <NavBottom />
    </div>
    <div class="inhalt">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBottom from "./views/NavBottom.vue";
import Footer from "./views/Footer";

export default {
  components: {
    NavBottom,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  .NavButton {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 102;
    padding: 1rem 10%;
  }
  .inhalt {
    margin: 7rem 10% 4rem 10%;
  }
}
</style>
