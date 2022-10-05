<script>
import { butter } from '@/buttercms'
import Nav from '@/components/Nav.vue'

export default {
  name: 'blog-post',
  components: {
    Nav
  },
  data() {
    return {
      post: {}
    }
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data
        }).catch(res => {
          console.log(res)
        })
    }
  },
  created() {
    this.getPost()
  }
}
</script>

<template>
  <div class="main">
    <Nav></Nav>
    <div class="content">
      <div id="blog-post">
        <h1>{{ post.data.title }}</h1>
        <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
        <div v-html="post.data.body"></div>
        <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
          {{ post.meta.previous_post.title }}
        </router-link>

        <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
          {{ post.meta.next_post.title }}
        </router-link>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: var(--bg);
}

.content {
  padding: 10px;
  margin: auto;

  box-sizing: border-box;

  max-width: 700px;
  height: fit-content;
  background-color: inherit;
}

#blog-post {
  width: 100%;

  margin: 0 auto;
}

p {
  width: 100%;
}

img {
  min-width: 100%;
  width: 70vw;
  height: 200px;
  object-fit: cover;

  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>