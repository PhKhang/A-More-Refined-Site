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
    <div class="content animate__animated animate__fadeIn">
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

  transition: background-color var(--trans-time-l) ease;
}

@media screen and (max-width: 820px) {
  .main {
    padding-top: 47px;
  }


}


.content {
  padding: 10px;
  margin: auto;

  box-sizing: border-box;

  max-width: 700px;
  height: fit-content;
  background-color: transparent;

}

#blog-post {
  width: 100%;

  margin: 0 auto;
}

#blog-post>>>p,
ul,
li {
  width: 100%;
  text-align: justify;
}

#blog-post>>>img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 4px;

  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>