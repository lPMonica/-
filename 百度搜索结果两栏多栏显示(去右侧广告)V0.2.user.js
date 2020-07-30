// ==UserScript==
// @name            百度搜索结果两栏多栏显示(去右侧广告)
// @namespace       http://tampermonkey.net/
// @version         0.2
// @description     搜索结果支持两栏三栏四栏
// @author          LGJ
// @match           *.baidu.com/s?*
// @run-at          document-start
// @grant           none

// @note            2020.07-30-V0.2 搜索结果分栏显示
// @create          2020.07-29
// ==/UserScript==


/**
建议将搜索结果显示条数显示为20条体验更佳
建议配合AdblockPlus使用，去广告效果极佳
**/


var style = `

/**隐藏不必要的模块 **/
#u,
#content_right,
#help,
#rs {
  display: none;
}

/**隐藏新闻搜索结果 **/
.c-group-wrapper .c-group {
    display: none;
}

/**
搜索栏中置
BUG:网页放大后无法居中
**/
.wrapper_l .s_form {
    width: 800px !important;
    margin: 0 auto !important;
    padding-left:0px !important;
}

/**id=s_tab中置 **/
.wrapper_new #s_tab {
  padding-left: 0px !important;
  text-align: center !important;
}

/**搜索工具中置**/
.search_tool_conter,
.nums
{
  margin: 0 auto !important;
}

#container {
width: 95%!important;
}

#content_left{
float: none!important;
width: 100%!important;
}

#container.sam_newgrid {
   margin-left:30px !important;
}



@media (min-width: 500px) and (max-width: 1200px) {
#content_left {
column-count: 2;
-moz-column-count: 2;
-webkit-column-count: 2;
}
}

@media (min-width: 1201px) and (max-width: 1800px) {
#content_left {
padding-left: 3%;
column-count: 3;
-moz-column-count: 3;
-webkit-column-count: 3;
}
}

@media (min-width: 1801px) {
#content_left {
padding-left: 4%;
column-count: 4;
-moz-column-count: 4;
-webkit-column-count: 4;
}
}


#content_left>div[class^="result"] {
display: inline-block;
width: 91%;
padding: 15px 15px;
margin: 1em;
word-break: normal;
word-wrap: normal;
position: relative;
z-index: 1;
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
border-radius: 2px;
background-color: white;
overflow: hidden;
}

#content_left>div[class^="result"]:before {
/*counter-increment: results;
content: counter(results);*/
z-index: -10;
color: #eee;
font-size: 4.5em;
position: absolute;
text-align: right;
width: 96%;
line-height: 1em;
top: 6px;
}

#content_left>div[class^="result"] .sitelink {
word-wrap: break-word;
}


`;
loadStyleString(style);

function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(css));
    } catch (ex){
        style.styleSheet.cssText = css;
    }
    //var head = document.getElementsByTagName("head")[0];
    //head.appendChild(style);
    document.head.appendChild(style);
}
