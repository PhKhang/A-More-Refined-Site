<template>
    <main>
        <header>
            <img src="@/assets/blurglassofcoffee.jpg" alt="">
            <h1>PHEN'S COFFEE</h1>
            <h2>View máy bay - Đồng cỏ - Rooftop - Vintage</h2>
            <div class="blur-trans"></div>
        </header>
        <menu>
            <h3>Our drinks</h3>
        </menu>
    </main>
</template>

<script>
export default {
    name: 'CafeHome',
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap');

    body, html {
        margin: 0;
        padding: 0;
    }
    img {
        width: 100%;
    }
    
    main {
        position: absolute;
        left: 0;
        
        width: 100vw;
        margin: 0;
        padding: 0;
    }
    
    .blur-trans{
        position: absolute;
        top: 580px;
        
        box-sizing: border-box;
        
        width: 100%;
        height: 954px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.945501) 60.21%, #FFFFFF 82.08%);
        mix-blend-mode: normal;
    }
    h1 {
        position: absolute;
        top: 140px;
        
        text-align: center;
        font-family: Rokkitt;
        font-size: 115px;
        font-weight: 600;
        color: black;
        width: 100%;
    }
    h2 {
        position: absolute;
        top: 290px;
        
        line-height: 60px;
        text-align: center;
        font-family: rokkitt;
        font-size: 30px;
        font-weight: 500;
        color: black;
        width: 100%;
    }
    


    menu {
        margin-top: 260px;
        
        box-sizing: border-box;
        border: solid;
        color: black;
        width: 100%;
        
        position: inherit;
    }
    h3 {
        font-family: rokkitt;
        padding-left: 170px;
        font-size: 80px;
        font-weight: 500;
        
    }
</style>