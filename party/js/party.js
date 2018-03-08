// 按钮的点击事件  默认小三角的状态是true 当点击时block 变为false状态

// 这种情况是单独点击一个的情况
/*window.onload=function (){
	var dropdown=document.getElementsByClassName('dropdown')[0];
	var dropdownmenu=document.getElementsByClassName("dropdown-menu")[0];
	var flag=true;
	dropdown.onclick=function(){
		if (flag) {
			dropdownmenu.style.display="block"
			flag=false
		}else{
			dropdownmenu.style.display="none"
			flag=true
		}
	}
}*/
 /* window.onload=function(){	
	    var dropdown=document.getElementsByClassName('dropdown');
	    var dropdownmenu=document.getElementsByClassName('dropdown-menu');

		var index;
		for(var i =0;i<dropdown.length;i++){
			dropdown[i].index = i;
			dropdown[i].flag=true
			dropdown[i].onclick=function(){
				if(dropdown[this.index].flag==true){
					for (var i = 0; i < dropdownmenu.length; i++) {
						dropdownmenu[i].style.display="none"
						dropdown[i].flag=true
					}
					dropdownmenu[this.index].style.display="block"
					dropdown[this.index].flag=false
				}else{
					dropdownmenu[this.index].style.display="none"
					dropdown[this.index].flag=true
				}

			}
		}
    }*/





// 点击多个时的情况
window.onload=function(){
	var dropdown=document.getElementsByClassName('dropdown');
	var dropdownmenu=document.getElementsByClassName('dropdown-menu');
	var index;
	for(var i=0;i<dropdown.length;i++){
	 	// dropdown.index=i 错误 获取不到i
	 	// 因为需要给i点击事件 for循环的很快 需要把for循环dropdown的i值再赋值 用index来记录
	 	dropdown[i].index=i;
	 	//给点击的i 设开关 默认是开着的
	 	dropdown[i].flag=true;

	 	dropdown[i].onclick=function(){
             if(dropdown[this.index].flag){
             	for (var i = 0; i < dropdownmenu.length; i++) {
						dropdownmenu[i].style.display="none"
						dropdown[i].flag=true
					}
             	dropdownmenu[this.index].style.display="block";
             	dropdown[this.index].flag=false;
             }else{                                                                                                                      
             	dropdownmenu[this.index].style.display="none";
             	dropdown[this.index].flag=true;
             }
	 	}
	}

// 轮播
var box=document.getElementsByClassName('box')[0];
var bigbox=document.getElementsByClassName('bigbox')[0];
var inner=document.getElementsByClassName('inner');
var btn=document.getElementsByClassName('btn');
var num=0;

    for(var j=0 ;j<btn.length;j++){
        btn[j].style.backgroundColor="#390b1f"
    }
        btn[num].style.backgroundColor="#9dc819";

    animate(bigbox,{marginLeft:-1349*num},1500)

	var t=setInterval(move,2000)

		//按钮点击效果
		for(var i=0;i<btn.length;i++){
			btn[i].index=i;
			btn[i].onmouseover=function(){
				num=this.index;
//鼠标放到按钮上默认的按钮颜色
	    for(var j=0;j<btn.length;j++){
        btn[j].style.backgroundColor="#390b1f"
        }
        btn[num].style.backgroundColor="#9dc819";
        
        animate(bigbox,{marginLeft:-1349*num},1500)

			}
		}

//清除动画
box.onmouseover=function(){
	clearInterval(t)
}
box.onmouseout=function(){
	t=setInterval(move,2000)
}


//实现自动轮播的函数
    function move(){
		num++
		if(num>=inner.length-1){
			animate(bigbox,{marginLeft:-1349*num},1500,function(){
			bigbox.style.marginLeft=0;
		    num=0
//实现无缝轮播时的默认按钮颜色
			for(var j=0;j<btn.length;j++){
        	btn[j].style.backgroundColor="#390b1f"}
            btn[num].style.backgroundColor="#9dc819";
			})
		}else{
//自然轮播时默认的颜色
		    for(var j=0;j<btn.length;j++){
        	btn[j].style.backgroundColor="#390b1f"
        }
        btn[num].style.backgroundColor="#9dc819";
        animate(bigbox,{marginLeft:-1349*num},1500)

		}
	}

	









}

  
