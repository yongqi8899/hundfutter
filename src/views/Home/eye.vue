<template>
  <div class="eyes" :style="'eyeHeight'">
    <div class="eye"></div>
    <div class="eye"></div>
  </div>
</template>

<script>
export default {
  name: "eye",
  props:['eyeHeight'],
   mounted() {
      const eyes = document.querySelectorAll('.eye')
			//给body添加鼠标移动事件
			document.body.addEventListener('mousemove', move)
			function move() {
				//将两个眼球进行便利
				eyes.forEach(eye =>{
					//获取x轴
					let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
					//获取y轴
					let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
					//利用Math.atan2来算出x轴和y轴的射线之间的平面角度
					let atan = Math.atan2(-(event.pageX - x), -(event.pageY - y))
					let rot = (atan * (180 / Math.PI) * -1) + 0
					//赋值
					eye.style.transform = `rotate(${rot}deg)`
				})
			}
    },
};
</script>

<style scoped>
.eyes {
  display: flex;
  justify-content: center;
  position: relative;
}
.eye {
  margin: 1.35rem;
  width: 2.6rem;
  height: 2.6rem;
  background: white;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
}
.eye::after {
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  background-color: #0d0d0e;
  left: 0.5rem;
  position: absolute;
  border-radius: 50%;
}
</style>
