<template>
    <div class="main">
        <Nav></Nav>
        <div class="content animate__animated animate__fadeIn">
            <h1>My name is Trần Nguyễn Phúc Khang, freshman at VNU HCMUS</h1>
            
            <h3>Hi, nice to meet you</h3>
            <p>You can sometimes see me as Jiji, the cat.</p>
            
            <h3>こんにちは</h3>
            <p>ジジネコ申します。これは僕の新しプロジェクトだよ。</p>
            
            <h3>大家好</h3>
            <p>我叫猫。你叫什么名字？</p>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'AboutPg',
    components: {
        Nav,
        LongText,
        Footer
    }
}
</script>

<style scoped lang="scss">
.main {
    min-height: 100vh;
    padding: 0;
    margin: 0;
    height: auto;
    background-color: var(--bg);

    transition: background-color var(--trans-time-l) ease;

    .content {
        height: 100%;
    }
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

footer {
    position: absolute;
    bottom: 0;
}
</style>