<template>
  <div class="main">
    <Nav></Nav>
    <div class="content animate__animated animate__fadeIn">

      <h1>The developer infrastructure bank</h1>

      <div class="pattern"></div>

      <div class="outer">
        <p>hello, This text is supposed to be a cousin of the background-gradient elelment, which will make this text
          and the pattern to be on separate line, not stack on top like in this case. To achive this result, i didn't
          use any flex box nor grid, but i used position: absolute for the pattern to make it move to the top of the
          parrent div. But the parrent div also has to be a positioned element, so i used position: relative because the
          current flow of the parrent div is already good enough.</p>
        <div class=""></div>
      </div>

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'

export default {
  name: 'TestPg',
  components: {
    Nav,
    LongText
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  color: black;
}

.outer {
  position: relative;

  width: 100%;
  height: 500px;

  background-image: radial-gradient(circle at center, #0E4E4A 0%, #143432 100%);
  border: solid;
  clip-path: url(https://column.com/images/guilloche.svg);
}

.inner {
  position: absolute;
  inset: 0;


  width: 100%;
  height: 100%;

  box-sizing: border-box;
  border: 2px solid green;

  background-image: url(https://column.com/images/guilloche.svg);
  background-size: 100px;
}

.main {
  width: 100vw;
  height: 100vh;


}

.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: auto;

  position: relative;

  background: radial-gradient(circle at 84.1% 65.38%, #36D1C7 0%, #B2E0DD 30%, #FFFFFF 100%);

}

.pattern {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  height: 100%;

  background-image: url(https://column.com/images/guilloche.svg);
  background-size: 20px;
  mix-blend-mode: overlay;
}
</style>