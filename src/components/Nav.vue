<template>
    <nav>
        <router-link class="animate__fadeInLeft" to="/">Home</router-link>
        <router-link class="animate__fadeInLeft" to="/about">About</router-link>
        <router-link class="animate__fadeInLeft" to="/test">Test</router-link>
        <router-link class="animate__fadeInLeft" to="/blog">Blogs</router-link>

        <Button icon="pi pi-check" aria-label="Submit" @click="onclick" />
        <!-- <router-link class="animate__fadeInLeft" to="/cafehome">Cafe</router-link> -->
    </nav>
</template>

<script>
import Button from "primevue/button";
import "primevue/resources/themes/lara-dark-teal/theme.css"
import 'primeicons/primeicons.css'

export default {
    name: 'NavBar',
    components: {
        Button
    },
    methods: {
        onclick() {


            if (document.body.classList.replace('dark', 'light')) {
                console.log('true')
            } else {
                document.body.classList.replace('light', 'dark')
                console.log('false')
            }
        }
    }
}
</script>

<style scoped>
.p-button {
    background-color: var(--link);
}

button {
    width: 100%;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 60px;

    background-color: var(--bg);
    backdrop-filter: blur(100px);
    padding: 4px;
    border-radius: 4px;
    border: 2.4px solid var(--link);
    margin: 10px;

    position: fixed;
    top: 0;
    z-index: 99;

    transition: background-color var(--trans-time-l) ease;
}

a {
    font-weight: 700;
    text-decoration: none;
    color: var(--link);
    border-bottom: 3px solid transparent;

    transition: color var(--trans-time) ease;
}

a.router-link-active {
    border-bottom: 3px solid var(--link);

    transition: color var(--trans-time) ease;
}

@media screen and (max-width: 820px) {
    nav {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        border: none;
        border-bottom: 2.4px solid var(--link);

        border-radius: 0;

    }

}
</style>

