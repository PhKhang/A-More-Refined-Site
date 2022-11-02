<template>
  <div class="main">
    <Nav></Nav>
    <div class="content">

      <div class="block header">

        <div class="text">
          <h1>Hello there</h1>
          <h2>I'm Phuc Khang</h2>
          <h2>and I like to build stuffs.</h2>

        </div>

        <div class="svg animate__animated animate__fadeIn">
          <div class="svg-con">
            <Svg class="mandala"></Svg>
          </div>
        </div>

        <div class="blur-bg">
          <!-- <img src="../../public/Vector.svg" alt="">
          <img src="../../public/Vector-1.svg" alt="">
          <img src="../../public/Vector-2.svg" alt=""> -->
        </div>

      </div>

      <div class="block web-show">
        <Work></Work>
      </div>

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'
import Svg from '@/components/Svg.vue'
import Work from '@/components/WorkCard.vue'

export default {
  name: 'TestPg',
  components: {
    Nav,
    LongText,
    Svg,
    Work
  }
}
</script>

<style scoped lang="scss">
.main {
  background: linear-gradient(28deg, var(--bg), rgba(9, 32, 30, 1) 100%);
}

.content {
  font-size: 60px;
}

@media screen and (max-width: 820px) {
  .content {
    font-size: 30px;
  }
}

.block {
  width: 100%;
  min-height: 100vh;
  overflow: inherit;
  border: solid;
  background-color: transparent;
}

.filler {
  height: 50vh;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 0;

  h1, h2 {
    margin: 0 15px;
  }
}

.blur-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: transparent;
  z-index: -2;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  filter: blur(50px);
  transition: all .8s ease;
}

.blur-bg>* {
  grid-column: 1/2;
  grid-row: 1/2;

  margin: 0 auto;
  z-index: -2;
}

.svg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  overflow: visible;

  display: flex;
  justify-content: center;
  align-items: center;


}
.svg-con {
  width: 100%;
  height: 100%;
  overflow-x: clip;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transform: scale(1);
}

@media screen and (max-width: 820px) {
  .svg {
    overflow: hidden;
  }

  .svg-con {
    position: absolute;
    top: -40%;
    width: 1000px;
  }
}



.web-show {
  position: relative;
  z-index: 1;
}
</style>