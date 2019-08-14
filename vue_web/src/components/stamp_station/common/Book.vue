<template>
    <div id="books">
          <!-- 顶部渐变色 -->
        <!-- <dv class="book-top">
            <img src="http://www.51gu.com/cn/images/title_h1.gif">电子目录
        </dv> -->
        <!-- 商品图片 循环 -->
		<div class="book-item">
            <a href="javascript:;">
                <img src="http://www.51gu.com/UploadFiles/image/20171213021828944.jpg" border="0" width="106" height="150">
            </a>
            <p class="cent"><a href="javascript:;">2017年第5期</a></p>
		</div>
        <!-- 提示语 -->
        <p>注：电子目录内的邮品价格均为出刊时的价格，部分邮品价格可能会因一些原因而变动，请以“网上超市”内的价格为准！</p>
        
    </div>
</template>
<script>
export default {
	 
}
</script>
<style>
    #books .book-top{
        margin-left:8px;
        margin-top:8px;
    }
    #books .book-top img{
        font-size:12px;
        font-weight:bold;
    }
    #books{
        width:783px;
        height:884px;
    }
    #books .book-item{
        width: 142px;
        height: 197px;
        margin-left:12px;
        margin-top:12px;
        background:#fff;
        border:1px solid #eee;
        text-align: center;
    }
    #books .book-item a img{
        width:106px;
        height:158px;
        margin-top:8px;
    }
    #books .book-item .cent a{
        font-size:12px;
    }
    #books .book-item .cent{
        margin-top:6px;
    }
    #books p{
        font-weight:bold;
        font-size:12px;
        color:#f00;
    }
</style>
