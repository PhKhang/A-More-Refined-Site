<template>
    <div class="main">
        <Nav></Nav>
        <div class="content ">
            <img v-if="true" class="header animate__animated animate__fadeIn"
                src="@/assets/papers.co-me89-himalaya-sunset-white-mountain-art-36-3840x2400-4k-wallpaper(Medium).jpg"
                alt="">

            <div class="animate__animated animate__fadeInUp">
                <HelloWorldVue></HelloWorldVue>
                <p style="margin-top: 300px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus error,
                    perspiciatis dolores tenetur itaque alias accusantium cupiditate, modi earum esse provident
                    repellendus
                    laboriosam explicabo voluptates dicta! Deleniti culpa omnis similique, labore ea id sed, nostrum
                    laboriosam voluptatem expedita magni adipisci! Autem, quas libero cupiditate architecto distinctio
                    repellendus voluptatem numquam illum aspernatur totam at tempore ad velit, fuga ab inventore odio
                    minus
                    saepe fugit sit culpa error molestias doloremque provident? Laboriosam totam deserunt quis nam,
                    voluptatibus autem minima! Maxime asperiores, natus alias labore fugiat cumque aperiam
                    necessitatibus,
                    laudantium delectus minima perferendis corporis nemo numquam perspiciatis quam soluta exercitationem
                    nobis eveniet totam!</p>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorldVue from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue'
export default {
    name: 'HomePg',
    components: {
        HelloWorldVue,
        Nav
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
        padding-top: 47px;
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

img {
    width: 80vw;
    min-width: 100%;
    height: 200px;
    object-fit: cover;

    border-radius: 6px;

    position: relative;
    left: 50%;
    transform: translate(-50%);
}

a {
    text-decoration: none;
    color: var(--link);
}
</style>