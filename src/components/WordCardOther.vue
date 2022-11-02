<template>
    <div class="cardHolder">
        <div class="card">
            <a href="https://github.com/PhKhang/tradiem.vn_scraper" style="width:fit-content, height:fit-content"
                target="_blank"><img class="cardimage" src="first.jpeg" style="object-position: left center"></a>
            <div class="cardtitle">A Python script to fetch and display my grades on the CLI</div>
            <div class="cardcontent">My first attempt to scrape data from protected source, which in this case a login page with username and password. Through this, I familiarized myself with POST request.</div>
        </div>
        <div class="card">
            <a href="https://github.com/PhKhang/Diem_THPTQG2022_TPHCM" target="_blank"><img class="cardimage"
                    src="second.png" style="object-position: 2% center"></a>
            <div class="cardtitle">College Entrance Exam Full data</div>
            <div class="cardcontent">I think this is the only data source that cotains both the grades and full name of each of almost 85,000 student in Ho Chi Minh City.</div>
        </div>
        <div class="card">
            <a href="https://github.com/PhKhang/Nhntai_Client-Scraping_Server" target="_blank"><img class="cardimage" src="third.jpg" style="object-position: right center"></a>
            <div class="cardtitle">My most ambitious project</div>
            <div class="cardcontent">I nearly quitted, because it took me over 1 month to get to this, bypassing cloudflare protection, solve cross-origin block, local server with Flask, troubles with Python libraries's versions,...</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cardHolder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    min-height: 560px;
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
    margin: 0;
    font-weight: 500;
    font-size: 24px;

    color: var(--text);
}

.cardcontent {
    margin: 0;
    height: max-content;
    font-weight: normal;
    font-size: 18px;

    color: var(--text);
}
</style>