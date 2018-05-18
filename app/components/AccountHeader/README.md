react 页面引用本地图片

方法一：
 <img src={require('../img/icon1.png')} />

 方法二：
 import	img1 from '../img/icon1.png';
 import	img2 from '../img/icon1.png';

 <img src={img1} />
 <img src={img2} />

 方法三：（不推荐使用）
 <img src="http://106.15.44.101/group1/images/icon1.jpg"/>


背景图爿的引用方法
const divStyle ={
	color:'red',
	backround:'url('+ imgUrl +')',
	或者background:'url${require("1.jpg")}'
}

function backgroundImgComponent(){
	return <div style={divStyle}> hello World!</div>
}