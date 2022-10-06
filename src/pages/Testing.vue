<template>
  <div class="main">
    <Nav></Nav>
    <div class="content animate__animated animate__fadeInUp">
      <div class="outer">
        <div class="inner"></div>
      </div>
      <LongText></LongText>
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
.main {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  height: auto;
  background-color: var(--bg);

  transition: background-color var(--trans-time-l) ease;
}

@media screen and (max-width: 820px) {
  .main {
    padding-top: 52px;
  }


}

.content {
  padding: 10px;
  margin: auto;

  box-sizing: border-box;

  max-width: 700px;
  height: fit-content;
  background-color: inherit;

  transition: background-color var(--trans-time-l) ease;
}

.outer {
  background-color: #7fffd4;
  width: 80%;
  height: 500px;
}

.inner {
  background-color: #5f9ea0;
  width: 60%;
  height: 350px;
}
</style>