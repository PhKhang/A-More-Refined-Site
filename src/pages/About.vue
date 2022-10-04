<template>
    <div>
        <Nav></Nav>
        <div class="content">
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
    background-color: #ecfdf5;
}

.content {
    padding: 10px;
    margin: auto;

    box-sizing: border-box;

    max-width: 700px;
    height: fit-content;
    background-color: inherit;
}
</style>