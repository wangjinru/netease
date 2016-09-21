/**
 * Created by Administrator on 2016/9/12.
 */
window.onload=function(){
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

    var div=document.getElementsByClassName('div9');
    var div3=document.getElementsByClassName('div8')[0];
    var div2=document.getElementsByClassName('div9_1');
    div[0].style.backgroundColor='white';
    div2[0].style.display='block';
    for(var i=0;i<div.length;i++){
        console.log(div.length);
        div[i].index=i;
      div[i].onclick=function(){
       //this.style.backgroundColor='white';
       //   console.log(div3.scrollTop());
          //$('body').scrollTop($('.div8').scrollTop());
          tab(this.index);
       }
    }

    function tab(nowindex) {
        for (j = 0; j < div.length; j++) {
            if (nowindex == j) {
                div[j].style.backgroundColor='white';
                div2[j].style.display='block';
            }else{
                div[j].style.backgroundColor='#f7f7f7';
                div2[j].style.display='none';
            }
        }
    }

}
function $(id){
    return document.getElementById(id);
}

