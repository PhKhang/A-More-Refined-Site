<template>
    <div class="cardHolder">
        <div class="card">
            <a href="https://phkhang.github.io/sturdy-adventure" style="width:fit-content, height:fit-content"
                target="_blank"><img class="cardimage" src="sturdyadventure.png"></a>
            <div class="cardtitle">My first published website</div>
            <div class="cardcontent">Simple, but a great start I guess... Its banner is also a link to the artist who
                drew it.</div>
        </div>
        <div class="card">
            <a href="https://phkhang.github.io/verbosely-date" target="_blank"><img class="cardimage"
                    src="calenda.png"></a>
            <div class="cardtitle">JS, welcome!</div>
            <div class="cardcontent">Unlike the previous one, this is the first to use JavaScript. JS is used to build
                dates in a month, mark the current day, change title and make theming possible.</div>
        </div>
        <div class="card">
            <a href="https://phkhang.github.io" target="_blank"><img class="cardimage" src="currentpage.jpg"></a>
            <div class="cardtitle">Snap back to present</div>
            <div class="cardcontent">More minimalized, but also more polished.</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.cardHolder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    height: 500px;
    width: 300px;
    padding: 10px;
    margin: 10px;
    background-color: var(--bg-nav);
    border-radius: 20px;
    box-shadow: 0px 0px 18px 3px rgb(0, 0, 0);

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    /* justify-content: center; */
    transition: all .2s ease-in-out;
}

/* .card:hover {
    transform: scale(1.08);
} */

.cardimage {
    margin: 0;
    padding: 0;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;

    object-fit: cover;
}

.cardtitle {
    margin: 0 1.33rem .33rem 1.33rem;
    font-weight: 500;
    font-size: 24px;

    color: var(--text);
}

.cardcontent {
    margin: .33rem 1.33rem .33rem 1.33rem;
    font-weight: normal;
    font-size: 18px;

    color: var(--text);
}
</style>