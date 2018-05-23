function  $(id){
    return document.getElementById(id);
}
// 左边导航
    var lis=$("con_l_ul").getElementsByTagName("li");
    var divs=$("con_r").getElementsByTagName("div");
    var li_leng=lis.length;
    var di_leng=divs.length;
    for(var i=0;i<li_leng;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var i=0;i<li_leng;i++){
                lis[i].className='';
            }
            this.className="li_act";
            for(var i=0;i<di_leng;i++){
                divs[i].className='';
            }
            divs[this.index].className='con_show';
        }
    }
// 我的订单 面包线右边
   var wd_dts=$("wddd_dl").getElementsByTagName("dt");
   var wd_tab=$("wddd").getElementsByTagName("table");
   var wd_dt_leng=wd_dts.length;
   var wd_tab_leng=wd_tab.length;
   for(var i=0;i<wd_dt_leng;i++){
        wd_dts[i].index=i;
        wd_dts[i].onclick=function(){
            for(var i=0;i<wd_dt_leng;i++){
                wd_dts[i].className='';
            }
            this.className="dt_act";
            for(var i=0;i<wd_tab_leng;i++){
                wd_tab[i].className='';
            }
            wd_tab[this.index].className='tab_show';
        }
    }
// 已开卡密-硬件大师 面包线右边
   var ykkm_dts=$("ykkm_dl").getElementsByTagName("dt");
   var ykkm_tab=$("ykkm").getElementsByTagName("table");
   var ykkm_dt_leng=ykkm_dts.length;
   var ykkm_tab_leng=ykkm_tab.length;
   for(var i=0;i<ykkm_dt_leng;i++){
        ykkm_dts[i].index=i;
        ykkm_dts[i].onclick=function(){
            for(var i=0;i<ykkm_dt_leng;i++){
                ykkm_dts[i].className='';
            }
            this.className="dt_act";
            for(var i=0;i<ykkm_tab_leng;i++){
                ykkm_tab[i].className='';
            }
            ykkm_tab[this.index].className='tab_show';
        }
    }