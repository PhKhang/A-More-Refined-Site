<template>
  <div class="main">
    <Nav></Nav>
    <div class="content">

      <div class="block header">

        <div class="text">
          <h1>Hello there</h1>

        </div>

        <div class="svg animate__animated animate__fadeIn">
          <Svg class="mandala"></Svg>
        </div>

        <div class="blur-bg">
          <img src="../../public/Vector.svg" alt="">
          <img src="../../public/Vector-1.svg" alt="">
          <img src="../../public/Vector-2.svg" alt="">
        </div>

      </div>

      <div class="block">

      </div>

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'
import Svg from '@/components/Svg.vue'

export default {
  name: 'TestPg',
  components: {
    Nav,
    LongText,
    Svg
  }
}
</script>

<style scoped>
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
  height: 100vh;
  overflow: inherit;
  border: solid;
  background-color: transparent;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

.svg {
  position: absolute;
  left: 50%;
  bottom: -170%;
  transform: translateX(-50%);
  z-index: -1;
}
</style>