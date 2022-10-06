<template>
    <div class="main">
        <Nav></Nav>
        <div class="content animate__animated animate__fadeInUp">
            <LongText></LongText>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'

export default {
    name: 'AboutPg',
    components: {
        Nav,
        LongText
    }
}
</script>

<style scoped>
.main {
    padding: 0;
    margin: 0;
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
</style>