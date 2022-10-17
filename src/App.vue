<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import '../public/style.css';
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

* {
  transition: position .8s ease;
}

html {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  width: 100%;
  font-family: 'Nunito', 'Noto Sans JP', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;

  overflow-x: hidden;
}

body {
  margin: 0;
  background-color: var(--bg);
  /* Fuck, the background-color is too slow, if the the color is different from the .main .content, the old color will flash on fetch */
  color: var(--text);

}

#app {
  padding: 0;
  margin: 0;

}

a {
  color: var(--link);
}
</style>
