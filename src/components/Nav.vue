<template>
    <nav>
        <router-link class="animate__fadeInLeft" to="/">Home</router-link>
        <router-link class="animate__fadeInLeft" to="/about">About</router-link>
        <router-link class="animate__fadeInLeft" to="/test">Test</router-link>
        <router-link class="animate__fadeInLeft" to="/blog">Blogs</router-link>
        <!-- <router-link class="animate__fadeInLeft" to="/cafehome">Cafe</router-link> -->
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
        display: flex;
        flex-direction: column;
        
        width: max-content;
        
        background-color: aquamarine;
        padding: 4px;
        border-radius: 4px;
        margin: 10px;
        
        position: fixed;
        top: 0;
        z-index: 99;
    }
    
a {
    font-weight: 700;
    text-decoration: none;
    color: #064e3b;
}

a.router-link-active {
    border-bottom: 3px solid #064e3b;
}
</style>