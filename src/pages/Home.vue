<template>
    <div class="main">
        <Nav></Nav>



        <div class="content ">

            <div id="seccir" class="circle rellax" data-rellax-speed="8"></div>
            <div class="circle rellax" data-rellax-speed="10"></div>
            <div class="square rellax" data-rellax-speed="6" style="transform: rotate(45deg);"></div>
            <div id="secsq" class="square rellax" data-rellax-speed="4" style="transform: rotate(45deg);"></div>

            <div class="header animate__animated animate__fadeIn">
                <img class="rellax img-header" data-rellax-speed="3"
                    src="@/assets/papers.co-me89-himalaya-sunset-white-mountain-art-36-3840x2400-4k-wallpaper(Medium).jpg"
                    alt="">
            </div>

            <div class="animate__animated animate__fadeIn">

                <HelloWorldVue></HelloWorldVue>

                <Work></Work>

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
import Work from '@/components/WorkCard.vue'
import Nav from '@/components/Nav.vue'
export default {
    name: 'HomePg',
    components: {
        HelloWorldVue,
        Nav,
        Work
    },
    mounted() {
        var rellax = new Rellax('.rellax')
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
    background-color: transparent;


    transition: background-color var(--trans-time) ease;
}

.circle {
    position: absolute;
    top: 190%;
    right: 20%;


    width: 70%;
    aspect-ratio: 1/1;
    background-color: var(--bg-nav);
    border-radius: 50%;
}

#seccir {
    width: 10vw;
    height: 10vw;

    top: 80%;
    left: 50%;

}

.square {
    position: absolute;
    top: 40%;
    left: 20%;

    width: 15%;
    aspect-ratio: 1/1;
    border-radius: 14%;
    background-color: var(--bg-nav);
}

#secsq {
    width: 25%;

    top: 90%;
    left: 5%;
}

.header {
    overflow: hidden;

    width: 80vw;
    min-width: 100%;
    height: 200px;
    border-radius: 6px;

    position: relative;
    left: 50%;
    transform: translate(-50%);
}

.img-header {
    width: 100%;
    height: 140%;
    object-fit: cover;

    object-position: 50% 55%;
}

a {
    text-decoration: none;
    color: var(--link);
}
</style>