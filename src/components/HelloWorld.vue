<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Hello there</h3>
    <p>My name is Jiji, the cat and I like to create something out of thin air, with <a href="https://cli.vuejs.org"
        target="_blank" rel="noopener">vue-cli documentation</a> of course.</p>

    <h3>こんにちは</h3>
    <p>ジジネコ申します。これは僕の新しプロジェクトだよ。</p>

    <h3>大家好</h3>
    <p>我叫猫。你叫什么名字？</p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: var(--link);
}
</style>
