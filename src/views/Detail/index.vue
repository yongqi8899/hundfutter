<template>
  <div class="layout">
    <div class="left">
      <DetailLeft />
    </div>
    <div class="recht">
      <DetailRecht />
    </div>
  </div>
</template>

<script>
import DetailRecht from "./DetailRecht.vue"
import DetailLeft from "./DetailLeft.vue"
export default {
  name: "DetailView",
  components: {
    DetailLeft,
    DetailRecht,
  },
};
</script>
<style scoped>

@media only screen and (max-width:1024px){
	body{display: grid;
    height: 100vh;
   grid-template-columns: 100%;
    grid-template-rows: 10% auto 10%;
    background-color:rgba(220,165,95,0.0);
	grid-template-areas: 
		"nav"
		"left"
		"footer"
}
	
	nav{
    grid-area: nav;
}
    
.left{
      grid-area: left;
}
.recht{
      background-color: rgba(184,83,184,0.00); 
      grid-area: left;
	z-index: 10;
}}

</style>
