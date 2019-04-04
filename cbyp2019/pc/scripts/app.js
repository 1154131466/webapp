/* 
* @Author: Marte
* @Date:   2019-03-13 16:21:28
* @Last Modified by:   Marte
* @Last Modified time: 2019-04-03 21:51:42
*/

$(document).ready(function(){
    
});
$(function(){
    medicineSlider();
    commonlyseddrugs();
	// alert(111)
	// console.log(11)
//  常用药轮播切换
    function  commonlyseddrugs() {
	    $(".item1").bxSlider({
	            auto: true,
		       touchEnabled: false,
	            slideWidth: 700,
	            pager: true,
	            pause: 3000,
	            autoHover: true,
	            controls: true
	        })
	}
//排行榜轮播切换
   function medicineSlider() {
	    var $slider = $('#slider-medicine-ranking').bxSlider({
	        pagerType: 'short',
	        auto: true
	    });
	
	    $('#medicine-ranking-siwtch li').click(function() {
	    	// alert(11)
	        var $this = $(this);
	        $slider.goToSlide($this.index());
	    });
	}



});


