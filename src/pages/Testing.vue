<template>
  <div class="main">
    <Nav></Nav>
    <div class="content">

      <div class="block header">

        <div class="text">
          <h1>Hello there</h1>
          <h2>I'm <span>Phuc Khang</span></h2>
          <h2>and I like to build stuffs.</h2>
          <div class="icon">
            <box-icon type='logo' name='vuejs' size='lg' color="var(--text)"></box-icon>
            <box-icon name='c-plus-plus' type='logo' size='lg' color="var(--text)"></box-icon>
            <box-icon name='python' type='logo' size='lg' color="var(--text)" ></box-icon>
          </div>

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
        <h2>These are the sites I've built over time</h2>
        <Work></Work>
      </div>
      
      <div class="block web-show">
        <h2>And these are projects I've made with other languages</h2>
        <WorkOther></WorkOther>
      </div>

    </div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'
import Svg from '@/components/Svg.vue'
import Work from '@/components/WorkCard.vue'
import WorkOther from '@/components/WordCardOther.vue'
import Footer from '@/components/Footer.vue'
import 'boxicons'

export default {
  name: 'TestPg',
  components: {
    Nav,
    LongText,
    Svg,
    Work,
    Footer,
    WorkOther
  }
}
</script>

<style scoped lang="scss">
span {
  font-style: italic;
}
.main {
  background: linear-gradient(28deg, var(--bg), var(--bg) 100%);
}

.content {
  font-size: 26px;
}


.block {
  width: 100%;
  min-height: 100vh;
  overflow: inherit;
  background-color: transparent;

  h2 {
    width: 680px;
    margin: auto;
  }
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

  font-size: 50px;

  h1, h2 {
    margin: 0 15px;
  }
  
  .icon {
    margin-top: 10px;
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
  filter: opacity(.4);
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

  padding: 20px;
}

@media screen and (max-width: 820px) {
  .content {
    font-size: 20px;
  }
  .header {
    font-size: 30px;
  }
}
</style>