// ==UserScript==
// @name            谷歌搜索结果两栏显示
// @namespace       http://tampermonkey.net/
// @version         Alpha
// @description     搜索结果支持两栏
// @author          LGJ
// @run-at          document-start
// @include         *://encrypted.google.*/search*
// @include         *://*.google*/search*
// @include         *://*.google*/webhp*
// @grant           none
// @create          2020.07-30 实现谷歌搜索结果两栏展示
// ==/UserScript==


/**
建议将搜索结果显示条数显示为20条体验更佳
建议配合AdblockPlus使用，去广告效果极佳
**/


const style = `
  div.card-section,
  div#trev,
    div#rhs,
    div#tads,
    div#bottomads,
    .vspib,
    .rgsep,
    div[id="gko-srp-sp"]+div[class="col"]
{
    display: none !important;
}

/**
屏蔽地图
**/
.xERobd {
    display: none;
}
/**
屏蔽相关搜索
**/
#brs
{
    display: none !important;
}

/**
屏蔽YouTube视频
**/
g-section-with-header {
    display: none!important;
}

.mw
{
    max-width: 1600px !important;

    margin: auto;
}

.col
{
    width: 100% !important;
}

#center_col
{
    margin-left: 0px !important;
    width: 100% !important;
}

.g
  {
    float: left !important;
    width: 48% !important;
    min-width: 500px;
    min-height: 105px !important;
    margin: 3px !important;
    padding: 7px !important;
    background-color: #ffffff !important;
    border: 1px solid #E5E5E5 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

#foot {
    float: none !important;
    width: 100% !important;
}

.big #tsf {
    width: 1000px !important;
    margin: auto !important;
}
.WE0UJf {
    margin-left: 40%!important;
}

#hdtb-msb {
    margin-left: 25%;
    justify-content: end;
}
#hdtbMenus {
    margin-left: 30%!important;
}
`;

// 嵌入css
loadStyleString(style);

function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(css));
    } catch (ex){
        style.styleSheet.cssText = css;
    }
    document.head.appendChild(style);
}