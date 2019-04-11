$(function() {

	/*切换课程*/
	switchCourse();

	function switchCourse() {
		$('.bxg_cLeft .bxg_slidebarCourse').on('touchstart', 'li', function() {
			$('.bxg_slidebarCourse li').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$('.bxg_cRightBox').eq($(this).index()).addClass('bxg_cRightBoxShow').siblings().removeClass('bxg_cRightBoxShow');
		});

	};

	
    /*跳转至首页*/
    switchIndex();

    function switchIndex() {
        $('.bxg_inex').on('touchstart', function() {
            window.location.href = './index.html';
        });  
    };

});
