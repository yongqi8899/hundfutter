<template>
  <div class="wrapper">
        <div class="center-line">
          <span class="icon"></span>
        </div>
        <div class="row row-1">
          <section>
            <span class="icon"></span>
            <span class="title">2020</span>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom"></div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <span class="icon"></span>
            <span class="title">2000</span>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom"></div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <span class="icon"></span>
            <span class="title">1995</span>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom"></div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <span class="icon"></span>
            <div class="details">
              <span class="title">1990</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom"></div>
          </section>
        </div>
        
      </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper{
  width: 100%;
  margin: auto;
  padding: 0 ;
  position: relative;
}
.wrapper .center-line{
  position: absolute;
  height: 100%;
  width: 4px;
  background: var(--themeColor);
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}
.wrapper .row{
  display: flex;
}
.wrapper .row-1{
  justify-content: flex-start;
}
.wrapper .row-2{
  justify-content: flex-end;
}
.wrapper .row section{
  background: #fff;
  border-radius: 5px;
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;
}
.row section .icon,
.center-line .scroll-icon{
  position: absolute;
  background: #f2f2f2;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: var(--themeColor);
  font-size: 5px;
  box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);
}
.row-1 section .icon{
  top: 15px;
  right: -60px;
}
.row-2 section .icon{
  top: 15px;
  left: -60px;
}
.title{
  font-size: 22px;
  font-weight: 600;
}
.row section p{
  margin: 10px 0 17px 0;
}
.row section .bottom a{
  text-decoration: none;
  background: var(--themeColor);
  color: #fff;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 17px; 
  font-weight: 400;
  transition: all 0.3s ease;
}
.row section .bottom a:hover{
  transform: scale(0.97);
}
@media(max-width: 768px){
    .layout{flex-wrap: wrap;}
}
</style>