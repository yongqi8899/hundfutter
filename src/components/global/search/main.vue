<template>
  <form id="content">
    <input
      type="text"
      name="input"
      class="input"
      id="search-input"
      v-model="keyword"
    />
    <button type="reset" class="search" id="search-btn" @click="search"></button>
  </form>
</template>

<script>
export default {
  name: "",
  data() {
    return {
       keyword:''
    };
  },
  methods:{
      search(){
      let keyword = this.keyword
      if(keyword.trim()){
        this.$store.dispatch('searchAjax',keyword)
      }else{
        alert('Wir haben nicht gefunden')
      }

      this.keyword = ''
    }
  },
  props: {},
  mounted() {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    const expand = () => {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    };

    searchBtn.addEventListener("click", expand);
  },
};
</script>

<style lang="scss" scoped>
#content {
  position: absolute;
  height: 100%;
  width: 100%;
}

#content.on {
  -webkit-animation-name: in-out;
  animation-name: in-out;
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

input {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border: 3px solid var(--themeColor);
  border-radius: 50%;
  background: none;
  color: var(--themeColor);
  font-size: 1rem;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search {
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: var(--themeColor);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: 20px;
  margin-left: 18px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.close:before {
  content: "";
  position: absolute;
  width: 27px;
  height: 3px;
  margin-top: -1px;
  margin-left: -13px;
  background-color: var(--themeColor);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close:after {
  content: "";
  position: absolute;
  width: 27px;
  height: 3px;
  background-color: var(--themeColor);
  margin-top: -1px;
  margin-left: -13px;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.square {
  box-sizing: border-box;
  padding: 0 20px 0 10px;
  width: 300px;
  height: 40px;
  border: 3px solid var(--themeColor);
  border-radius: 0;
  background: rgb(255, 255, 255);
  color: var(--themeColor);
  font-size: 1rem;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s, 0s, 0.4s;
  transition-delay: 0.4s, 0s, 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, transparent 600000s 0s;
}
</style>
