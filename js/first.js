/**
 * Created by Administrator on 2016/9/5.
 */
window.onload=function() {
    $('a1').onclick = function () {
        $('a1').style.border = "1px dotted lightgray";
        var body = document.getElementsByTagName('body')[0];
        body.style.overflowY = "hidden";
        if ($('div_1').style.display == "block") {
            $('div_1').style.display = "none";
            body.style.overflowY = "auto";
            $('a2').style.backgroundImage = 'url("../img/ico-gnb-search.png")';
            $('a2').style.backgroundRepeat = 'no-repeat';
            $('a2').style.backgroundSize = '21px 23px'
        } else {
            $('div_1').style.display = "block";
            $('a2').style.backgroundImage = 'url("../img/ie8-menuclosebg.png")';
            $('a2').style.backgroundRepeat = 'no-repeat';
            $('a2').style.backgroundSize = '21px 21px'
        }
    }
    $('input1').onclick = function () {
        var p = $('div_1').getElementsByTagName('p')[0];
        p.style.display = 'none';
    }
    var a = document.getElementsByClassName("aa");
    var div = document.getElementsByClassName("div9");
    var nav=document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
    a[0].style.display = "block";
    for (var i = 0; i < div.length; i++) {
        div[i].index = i;
        div[i].onclick = function () {
            this.style.border = "1px dotted lightgray";
            tab(this.index);
        }
    }
    function tab(nowindex) {
        for (j = 0; j < div.length; j++) {
            if (nowindex == j) {
                a[j].style.display = 'block';

            } else {

                div[j].style.border = "0px";
                a[j].style.display = 'none';

            }
        }
    }
}
function $(id){
    return document.getElementById(id);
}