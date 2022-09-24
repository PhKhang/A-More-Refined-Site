<template>
  <div class="content">
    <nav>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link> |
      <router-link to='/blog/'>Blogs</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
var butter = require('buttercms')('b41a7496d852160b8370eab0bcabc25635737bc8')

butter.post.list({page: 1, page_size: 10}).then(function(response) {
  console.log(response)
})

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,800;1,900&display=swap');

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  width: 40%;
  min-width: 600px;
  position: relative;
  margin: 0 auto;
  
  text-align: justify;
}

nav {
  margin-bottom: 10px;
}
a {
  font-weight: 700;
  text-decoration: none;
  color: #42b983;
}
a.router-link-active {
  border-bottom: 3px solid #42b983;
}
</style>
