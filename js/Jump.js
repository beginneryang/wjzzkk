function  $(id){
    return document.getElementById(id);
}
var divs=$("con_r").getElementsByTagName("div");
var lis=$("con_l_ul").getElementsByTagName("li");
//我的账户 充话费
var wycz=$("wycz");
$("Recharge").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
     for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    wycz.className="con_show";
}
//我的账户 绑定手机号
var bdsj=$("bdsj");
$("binding").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
     for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    bdsj.className="con_show";
}
// 软件大师面包线上的软件市场
var rjsc=$("rjsc");
$("sp_rjsc").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
     for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    rjsc.className="con_show";
}

var wykk=$("wykk");
var wykk_nav=$("wykk_nav");
var wykk_form=$("wykk").getElementsByTagName("form");
// 软件市场，硬件大师-我要开卡
$("a_wykk_yjds").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
     for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    wykk.className="con_show";
}
// 软件市场，无极普通版专业-我要开卡
var wykk_form_wjpt=$("wykk_form_wjpt");
$("a_wykk_wjpt").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<wykk_form.length;i++){
                wykk_form[i].className='';
            }
    wykk.className="con_show";
    wykk_form_wjpt.className="form_show";
    wykk_nav.innerHTML="无极普通版专业";
}
// 软件市场，无极独享版-我要开卡
var wykk_form_wjdx=$("wykk_form_wjdx");
$("a_wykk_wjdx").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<wykk_form.length;i++){
                wykk_form[i].className='';
            }
    wykk.className="con_show";
    wykk_form_wjdx.className="form_show";
    wykk_nav.innerHTML="无极独享版";
}
// 软件市场，挂机宝随机版-我要开卡
var wykk_form_gjbs=$("wykk_form_gjbs");
$("a_wykk_gjbs").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<wykk_form.length;i++){
                wykk_form[i].className='';
            }
    wykk.className="con_show";
    wykk_form_gjbs.className="form_show";
    wykk_nav.innerHTML="挂机宝随机版";
}
// 软件市场，挂机宝固定版-我要开卡
var wykk_form_gjbg=$("wykk_form_gjbg");
$("a_wykk_gjbg").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<wykk_form.length;i++){
                wykk_form[i].className='';
            }
    wykk.className="con_show";
    wykk_form_gjbg.className="form_show";
    wykk_nav.innerHTML="挂机宝固定版";
}
// 软件市场，变机宝-我要开卡
var wykk_form_bjb=$("wykk_form_bjb");
$("a_wykk_bjb").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<wykk_form.length;i++){
                wykk_form[i].className='';
            }
    wykk.className="con_show";
    wykk_form_bjb.className="form_show";
    wykk_nav.innerHTML="变机宝";
}


var ykkm=$("ykkm");
var ykkm_nav=$("ykkm_nav")
var ykkm_dts=$("ykkm_dl").getElementsByTagName("dt");
var ykkm_tab=$("ykkm").getElementsByTagName("table");
// 软件市场，硬件大师-已开卡密
$("a_ykkm_yjds").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
     for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    ykkm.className="con_show";
}
// 软件市场，无极普通版专业-已开卡密
var ykkm_dl_wjpt=$("ykkm_dl_wjpt");
var ykkm_tab_wjpt=$("ykkm_tab_wjpt");
$("a_ykkm_wjpt").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<ykkm_dts.length;i++){
                ykkm_dts[i].className='';
            }
    for(var i=0;i<ykkm_tab.length;i++){
                ykkm_tab[i].className='';
            }
    ykkm.className="con_show";
    ykkm_dl_wjpt.className="dt_act";
    ykkm_tab_wjpt.className="tab_show";
    ykkm_nav.innerHTML="无极普通版专业";
}
// 软件市场，无极独享版-已开卡密
var ykkm_dl_wjdx=$("ykkm_dl_wjdx");
var ykkm_tab_wjdx=$("ykkm_tab_wjdx");
$("a_ykkm_wjdx").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<ykkm_dts.length;i++){
                ykkm_dts[i].className='';
            }
    for(var i=0;i<ykkm_tab.length;i++){
                ykkm_tab[i].className='';
            }
    ykkm.className="con_show";
    ykkm_dl_wjdx.className="dt_act";
    ykkm_tab_wjdx.className="tab_show";
    ykkm_nav.innerHTML="无极独享版";
}
// 软件市场，挂机宝随机版-已开卡密
var ykkm_dl_gjbs=$("ykkm_dl_gjbs");
var ykkm_tab_gjbs=$("ykkm_tab_gjbs");
$("a_ykkm_gjbs").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<ykkm_dts.length;i++){
                ykkm_dts[i].className='';
            }
    for(var i=0;i<ykkm_tab.length;i++){
                ykkm_tab[i].className='';
            }
    ykkm.className="con_show";
    ykkm_dl_gjbs.className="dt_act";
    ykkm_tab_gjbs.className="tab_show";
    ykkm_nav.innerHTML="挂机宝随机版";
}
// 软件市场，挂机宝固定版-已开卡密
var ykkm_dl_gjbg=$("ykkm_dl_gjbg");
var ykkm_tab_gjbg=$("ykkm_tab_gjbg");
$("a_ykkm_gjbg").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<ykkm_dts.length;i++){
                ykkm_dts[i].className='';
            }
    for(var i=0;i<ykkm_tab.length;i++){
                ykkm_tab[i].className='';
            }
    ykkm.className="con_show";
    ykkm_dl_gjbg.className="dt_act";
    ykkm_tab_gjbg.className="tab_show";
    ykkm_nav.innerHTML="挂机宝固定版";
}
// 软件市场，变机宝-已开卡密
var ykkm_dl_bjb=$("ykkm_dl_bjb");
var ykkm_tab_bjb=$("ykkm_tab_bjb");
$("a_ykkm_bjb").onclick=function(){
    for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
    for(var i=0;i<divs.length;i++){
                divs[i].className='';
            }
    for(var i=0;i<ykkm_dts.length;i++){
                ykkm_dts[i].className='';
            }
    for(var i=0;i<ykkm_tab.length;i++){
                ykkm_tab[i].className='';
            }
    ykkm.className="con_show";
    ykkm_dl_bjb.className="dt_act";
    ykkm_tab_bjb.className="tab_show";
    ykkm_nav.innerHTML="变机宝";
}

//我要充值  打开支付页面
$("open_smzf").onclick=function(){
   wycz_smzf.style.top="10%";
   wycz_mask.style.display="block";
}
//我要充值 关闭支付页面
var wycz_smzf=$("wycz_smzf");
var wycz_mask=$("wycz_mask");
$("close_smzf").onclick=function(){
   wycz_smzf.style.top="-260%";
   wycz_mask.style.display="none";
}
//我要充值 显示支付宝二维码
var smzf_zfb_ewm=$("smzf_zfb_ewm");
$("smzf_zfb").onclick=function(){
   smzf_zfb_ewm.style.display="block"
    smzf_wx_ewm.style.display="none";
}
//我要充值 显示微信二维码
var smzf_wx_ewm=$("smzf_wx_ewm");
$("smzf_wx").onclick=function(){
    smzf_wx_ewm.style.display="block";
    smzf_zfb_ewm.style.display="none";
}


