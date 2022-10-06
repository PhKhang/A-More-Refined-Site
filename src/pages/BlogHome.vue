<script>
import { butter } from '@/buttercms'
import Nav from '@/components/Nav.vue'

export default {
  name: 'blog-home',
  components: {
    Nav
  },
  data() {
    return {
      page_title: 'Blog',
      posts: []
    }
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        this.posts = res.data.data
      })
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<template>
  <div class="main">
    <Nav></Nav>
    <div class="content">
      <div id="blog-home">
        <h1>{{ page_title }}</h1>
        <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
        <div class="post animate__animated animate__fadeInUp" v-for="(post,index) in posts"
          :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <article class="media">
              <figure>
                <!-- Bind results using a `:` -->
                <!-- Use a `v-if`/`else` if there is a `featured_image` -->
                <img v-if="post.featured_image" :src="post.featured_image" alt="">
                <img v-else src="http://via.placeholder.com/250x250" alt="">
              </figure>
              <h2>{{ post.title }}</h2>
              <p>{{ post.summary }}</p>
            </article>
          </router-link>
        </div>
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

.content {
  padding: 10px;
  margin: auto;

  box-sizing: border-box;

  max-width: 700px;
  height: fit-content;
  background-color: inherit;

  transition: background-color var(--trans-time-l) ease;
}

#blog-home .post {
  display: inline-block;

  border: solid var(--link);
  border-radius: 10px;
  width: 250px;
  height: 400px;
  overflow: hidden;

  margin: 10px;
  padding: 5px;
  color: var(--text);
}

.post img {
  width: 100%;
  height: 200px;
  object-fit: cover;

  border-radius: 5px;

  /* position: initial; */
}

figure {
  margin: 0;
}
</style>