$(function() {

	/*swiper插件调用*/
	callSwiper();

	function callSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,
        //循环播放
        loop: true,
        pagination: '.swiper-pagination',
        //点击切换
        paginationClickable: true,
        //用户操作swiper之后，是否禁止autoplay.默认为true：停止
        autoplayDisableOnInteraction:false
    	});
	};


	/*切换微课*/

	getTipshow();
	function getTipshow() {
		$('.bxg_productTip').on('touchstart', 'li',function() {
			$('.bxg_productTip li').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$('.bxg_product').eq($(this).index()).addClass('bxg_productShow').siblings().removeClass('bxg_productShow');
		});
	};


   /*跳转至分类*/
    switchCategory();
    
    function switchCategory() {
    	$('.bxg_tab').on('touchstart', function() {
    		window.location.href = './category.html';
    	});
    };
});








