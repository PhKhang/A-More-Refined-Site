<template>
    <Nav></Nav>
    <main>
        <p v-if="showImg === 'show'" class="imgbox" >
            <img src="https://papers.co/wallpaper/papers.co-me89-himalaya-sunset-white-mountain-art-36-3840x2400-4k-wallpaper.jpg" alt="">
        </p>
        
        <h1>{{head}}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Consequatur dolores reiciendis nesciunt deserunt? Aliquam iste ducimus nobis debitis ad expedita beatae voluptatum doloribus, cumque dolor accusamus modi ipsum exercitationem laborum blanditiis voluptas necessitatibus commodi eveniet tempora impedit laudantium nisi esse. Với nhận thức rằng: Việc thừa nhận nhân phẩm vốn có, các quyền bình đẳng và không thể tách rời của mọi thành viên trong gia đình nhân loại là cơ sở cho tự do, công bằng và hoà bình trên thế giới. Earum odio consequatur maxime tempore sint nesciunt rerum, deserunt fugit temporibus! Laudantium, consequuntur assumenda.</p>
        
        <h3>{{head}} sub</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime recusandae atque, voluptatibus qui, tenetur odio esse fugit eveniet explicabom voluptas sit, nostrum quis iure hic veniam aliquam voluptatem facilis.</p>
        
        <h3>{{head}} sub</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime recusandae atque, voluptatibus qui, tenetur odio esse fugit eveniet explicabom voluptas sit, nostrum quis iure hic veniam aliquam voluptatem facilis.</p>
        
        <h3>{{head}} sub</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus voluptas fuga corrupti id nemo obcaecati sit accusantium similique quisquam sint ipsa repellendus aut praesentium pariatur, ea eos? Aperiam nostrum veniam ipsam, voluptates, expedita debitis sequi optio quae vitae temporibus quos iste neque magni quod aspernatur quibusdam odit, fuga ea recusandae natus voluptatum doloremque itaque totam! Maxime fugiat corrupti tenetur soluta inventore numquam, eaque, quos impedit odio cupiditate, cum odit a itaque aut aspernatur. Ducimus tempora minima numquam distinctio voluptas! Quidem laborum eaque blanditiis. Error minima blanditiis consequatur, molestias ipsum enim repudiandae pariatur, excepturi, ratione veritatis ut! Sunt perferendis voluptatibus maiores corrupti dicta esse asperiores dignissimos dolores, quod impedit unde. Reiciendis earum nam, rerum deleniti neque blanditiis dicta molestias incidunt vero dignissimos repellat voluptatibus accusantium expedita. Suscipit molestias et illo tenetur eveniet, unde deserunt ducimus vel sunt. Optio deserunt omnis animi sunt dolorum. Dolor ipsum eum harum vel maiores recusandae id minima deserunt cumque modi magnam reprehenderit, aut labore, rerum sed fugit, asperiores ullam pariatur! Quas harum illo, totam laboriosam fugiat ipsam necessitatibus expedita quibusdam velit voluptatibus vero consequuntur similique, perferendis excepturi ducimus eligendi corrupti earum ratione sit dicta nesciunt assumenda voluptates. Modi ratione, assumenda dolorem doloremque nihil eveniet? Voluptates commodi debitis placeat, consequuntur voluptatum asperiores vel deleniti molestias sapiente doloremque libero et, similique nihil, recusandae rem non voluptatem. Autem tempora laudantium assumenda quisquam unde aliquid dolor voluptates voluptate dolorem mollitia eum praesentium et, exercitationem delectus beatae earum ducimus qui consequatur tempore? Ducimus ea natus placeat minima esse dolores doloribus fugit error eaque a, dicta officiis, dolor quisquam! Odit vitae eius culpa maiores similique. Quo aliquid molestias corrupti. Delectus, amet architecto reprehenderit pariatur voluptas perferendis accusamus iste velit laboriosam officiis. Quae asperiores ducimus recusandae ex quaerat omnis reprehenderit accusantium dolorem voluptate fugiat exercitationem id distinctio iusto cum aliquam quo, a quidem pariatur amet obcaecati. Officiis ullam repellendus fuga commodi et nisi, nemo alias neque tempora tenetur hic asperiores, molestiae nesciunt inventore. Labore sapiente debitis itaque dolor, assumenda aspernatur laboriosam placeat. Minima vitae odio nemo unde autem voluptas quisquam? Eveniet ex qui deserunt quaerat nihil architecto dignissimos temporibus esse, optio, id eius. Fugiat sed magnam, nihil similique, facere fugit at architecto provident illo eaque est nam commodi soluta. Corporis distinctio sunt doloribus? Ratione dolores consectetur esse? Dolorum laboriosam id, inventore mollitia minima ad eos excepturi dolores vitae. Ipsum, voluptates repellendus nobis deleniti voluptas quaerat quidem repellat dicta soluta ratione, ducimus nulla?</p>
    </main>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: 'SimpleText',
    components: {
        Nav
    },
    props: {
        head: { type: String, default: 'Hello' },
        showImg: { type: String, default: 'show' }
    }
}
</script>

<style scoped>
    img {
        width: 90vw;
        height: 200px;
        object-fit: cover;
        
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
    
    .imgbox {
        width: 100%;
        margin: 10px auto 0px;
    }
    
    main {
        width: 90vw;
        max-width: 600px;
        
        margin-left: auto;
        margin-right: auto;
    }
</style>