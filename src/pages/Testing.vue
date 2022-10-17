<template>
  <div class="main">
    <Nav></Nav>
    <div class="content animate__animated animate__fadeIn">

      <h1>The developer infrastructure bank</h1>

      <div class="pattern"></div>

      <div class="outer">
        <p>hello, This text is supposed to be a cousin of the background-gradient elelment, which will make this text
          and the pattern to be on separate line, not stack on top like in this case. To achive this result, i didn't
          use any flex box nor grid, but i used position: absolute for the pattern to make it move to the top of the
          parrent div. But the parrent div also has to be a positioned element, so i used position: relative because the
          current flow of the parrent div is already good enough.</p>

        <svg width="675" height="675" viewBox="0 0 675 675" fill="black" xmlns="http://www.w3.org/2000/svg"
          class="mandala">
          <title>Mandala</title>
          <defs>
            <path d="M337.5,337.5 m-320,0 a320,320 0 1,1 640,0 a320,320 0 1,1 -640,0" id="circle1"></path>
            <path d="M337.5,337.5 m-280,0 a280,280 0 1,1 560,0 a280,280 0 1,1 -560,0" id="circle2"></path>
            <path d="M337.5,337.5 m-240,0 a240,240 0 1,1 480,0 a240,240 0 1,1 -480,0" id="circle3"></path>
            <path d="M337.5,337.5 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0" id="circle4"></path>
            <path d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" id="circle5"></path>
            <path d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" id="text"></path>
          </defs>
          <text class="mandala-accent-1" dy="70" textLength="2010">
            <textPath textLength="2010" href="#circle1">&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/
              </tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/
              </tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/
              </tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>
              &nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/
              <tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/
              <tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/
              <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/
              <tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>
            </textPath>
          </text>
          <text class="mandala-accent-1" dy="70" textLength="2010">
            <textPath textLength="2010" href="#text">&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/
              </tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>&nbsp;&nbsp;&nbsp;/
              <tspan>hi</tspan>hi<tspan>/
              </tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi
              </tspan>&nbsp;&nbsp;&nbsp;/<tspan>/
              </tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi
              </tspan>hi<tspan>hi</tspan>
              &nbsp;&nbsp;&nbsp;/<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi
              </tspan>hi<tspan>hi</tspan>/
              <tspan>hi</tspan>&nbsp;&nbsp;&nbsp;/<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi
              </tspan>hi<tspan>hi</tspan>/
              <tspan>hi</tspan>hi<tspan>hi</tspan>&nbsp;&nbsp;&nbsp;/<tspan>hi</tspan>hi<tspan>hi
              </tspan>hi<tspan>hi</tspan>/
              <tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>&nbsp;&nbsp;&nbsp;/<tspan>hi
              </tspan>hi<tspan>hi</tspan>/
              <tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>hi<tspan>hi</tspan>
            </textPath>
          </text>
          <text class="mandala-accent-2" dy="70" textLength="1760">
            <textPath textLength="1760" href="#circle2">&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
              &nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+
              </tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+
              <tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+
              </tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>
            </textPath>
          </text>
          <text class="mandala-accent-3" dy="70" textLength="1507">
            <textPath textLength="1507" href="#circle3">
              <tspan>{</tspan>{<tspan>{</tspan>{&nbsp;<tspan>}</tspan>}<tspan>}</tspan>}&nbsp;&nbsp;<tspan>{</tspan>{
              <tspan>{</tspan>{&nbsp;<tspan>}</tspan>}<tspan>}</tspan>}&nbsp;&nbsp;<tspan>{</tspan>{<tspan>{</tspan>
              {&nbsp;<tspan>}</tspan>}<tspan>}</tspan>}&nbsp;&nbsp;<tspan>{</tspan>{<tspan>{</tspan>{&nbsp;<tspan>}
              </tspan>}<tspan>}</tspan>}&nbsp;&nbsp;<tspan>{</tspan>{<tspan>{</tspan>{&nbsp;<tspan>}</tspan>}<tspan>}
              </tspan>}&nbsp;&nbsp;<tspan>{</tspan>{<tspan>{</tspan>{&nbsp;<tspan>}</tspan>}<tspan>}</tspan>
              }&nbsp;&nbsp;
            </textPath>
          </text>
          <text class="mandala-accent-4" dy="70" textLength="1257">
            <textPath textLength="1257" href="#circle4">&nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
              &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;../../
              &nbsp;&nbsp;&nbsp;../../</textPath>
          </text>
          <text class="mandala-accent-5" dy="70" textLength="1005">
            <textPath textLength="1005" href="#circle5">
              <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>
                &lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;
              </tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>
              &lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
              <tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;
            </textPath>
          </text>
        </svg>
        <div class=""></div>
      </div>

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LongText from '@/components/LongText.vue'

export default {
  name: 'TestPg',
  components: {
    Nav,
    LongText
  }
}
</script>

<style scoped>
.mandala {
  animation: rotate 50s linear infinite;
}

@keyframes rotate {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  color: black;
}

.outer {
  position: relative;

  width: 100%;
  height: 500px;

  background-image: radial-gradient(circle at center, #0E4E4A 0%, #143432 100%);
  border: solid;
  clip-path: url(https://column.com/images/guilloche.svg);
}

.inner {
  position: absolute;
  inset: 0;


  width: 100%;
  height: 100%;

  box-sizing: border-box;
  border: 2px solid green;

  background-image: url(https://column.com/images/guilloche.svg);
  background-size: 100px;
}

.main {
  width: 100vw;
  height: 100vh;


}

.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: auto;

  position: relative;

  background: radial-gradient(circle at 84.1% 65.38%, #36D1C7 0%, #B2E0DD 30%, #FFFFFF 100%);

}

.pattern {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  height: 100%;

  background-image: url(https://column.com/images/guilloche.svg);
  background-size: 20px;
  mix-blend-mode: overlay;
}
</style>