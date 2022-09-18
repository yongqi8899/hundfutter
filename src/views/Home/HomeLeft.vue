<template>
  <div class="dog">
    <img :src="Hund" alt="Hund" />
    <div class="controlEye">
      <eye />
    </div>
  </div>
</template>

<script>
import eye from "./eye.vue";
export default {
  data() {
    return {
      Hund: require("@/assets/img/hund-01.svg"),
    };
  },
  components: {
    eye,
  },
};
</script>

<style lang="scss" scoped>
.dog {
  height: 700px;
  width: 500px;
  background-color: rgba(125, 156, 28, 0);
  text-align: center;
  display: flex;
  position: relative;
}

img {
  position: absolute;
  height: 700px;
  background-color: rgba(76, 108, 209, 0);
}
.controlEye {
  background-color: rgba(193, 44, 47, 0);
  position: absolute;
  left: 198px;
  top: 69px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
}
</style>
