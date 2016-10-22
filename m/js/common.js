


/*
* item tab
*/
function tab(object,show,cur){
    //object 点击对象
    //show 对应显示内容
    //cur 当前类
    $(object).removeClass(cur)
    $(object).eq(0).addClass(cur);

    $(show).hide();
    $(show).eq(0).show();

    $(object).click(function(event) {
        var i = $(object).index(this);
        $(show).hide();
        $(show).eq(i).show();

        $(object).removeClass(cur)
        $(object).eq(i).addClass(cur);
    });

}


/*
* 顶部跟随
*/
function follow(){
$(".tab-line").hide();
    var redTop = $(".tab-head").offset().top;
    $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();  
    console.log(scrollTop);
    if(scrollTop>redTop){
        $(".tab-line").show();
      $(".tab-head").css({"position":"fixed","top":0});
      $(".tab-line").css({"position":"fixed","top":54});
    }else{
      $(".tab-head").css({"position":"static"});
      $(".tab-line").hide();
    }
    })
}


/*
* menu hide
*/
function menuTab(object,menu){
    $(menu).hide();
    $(object).click(function(event) {
        if($(menu).is(":hidden")){
            $(object).attr("src", '../images/menu-close.jpg');
            $(menu).show();
        }else{
            $(object).attr("src", '../images/menu.jpg');
            $(menu).hide();
        }
    });
}



/*
* video 
*/
var myVideo=document.getElementById("video1");
function videoPlay(){
	$(".video img").click(function(event) {
		$(this).hide();
		myVideo.play();
	});
}


/*
* 面板点击大图
*/
/*function imgBig(object1,object2,ob){
	//object1 防盗门面板点击
	//object2 室内门面板点击
	//ob 面板放大图片
	var h = $(".white-bg").height();
	h = h/2;
	$(".click-big").click(function(event) {
		var con = document.getElementById('content');
		con.style.display="block";
		con.style.marginTop="-210px";
		var bg = document.getElementById('fade')
		bg.style.display="block";

		var n = $(".click-big").index(this);
		n = n + 1;
		$(".white-bg .pro-img").attr("src","images/change-img/F00"+n+".jpg");
	});
	$(".click-big2").click(function(event) {
		var con = document.getElementById('content');
		con.style.display="block";
		con.style.marginTop="-157px";
		var bg = document.getElementById('fade')
		bg.style.display="block";

		var m = $(".click-big2").index(this);
		m = m + 1;
		$(".white-bg .pro-img").attr("src","images/change-img/S00"+m+".jpg");
	});
}*/