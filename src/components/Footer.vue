<template>
   <footer>
    <div class="content">
       
        <p class="made">Made with love 💖, sweat 😓 and anxiety✨</p>

        <div class="social-i">
            <a href="https://github.com/PhKhang" target="_blank">
                <box-icon type='logo' name='github' color="var(--text)"></box-icon>
            </a>
            <a href="https://twitter.com/PKhang0" target="_blank">
                <box-icon name='twitter' type='logo' color="var(--text)"></box-icon>
            </a>
            <a href="https://www.facebook.com/PhKhng/" target="_blank">
                <box-icon name='facebook-square' type='logo' color="var(--text)"></box-icon>
            </a>
        </div>

        <h3>Powered by</h3>
        <div class="spon">
       
            <a href="https://vuejs.org/" target="_blank">
                <div class="spon-i">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="">
                    <h4>VueJS</h4>
                </div>
            </a>

            <a href="https://buttercms.com" target="_blank">
                <div class="spon-i">
                    <img src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5" alt="">
                    <h4>ButterCMS</h4>
                </div>
            </a>

            <a href="https://vercel.com/" target="_blank">
                <div class="spon-i">
                    <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg" alt="">
                    <h4>Vercel</h4>
                </div>
            </a>
        </div>
        &copy; Copyright 2022, Jiji
       
   </div>

   </footer> 
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.content {
    padding: 10px;
    margin: auto;

    box-sizing: border-box;

    max-width: 700px;
    height: fit-content;
    background-color: transparent;
}
footer {
    background-color: var(--bg-nav);
    min-height: 100px;
    width: 100%;

    margin: 0;
    text-align: center;

    transition: all 0.8s ease;

    .social-i {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
}

footer img {
    height: 24px;
}

.spon {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.spon-i {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

a {
    text-decoration: none;
}
</style>