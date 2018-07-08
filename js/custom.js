(function($) {
	"use strict";
    //Enable sidebar toggle
	$('.sidebar-toggle').click( function() {
		$("body").toggleClass("sidebar-sm");
		$(".leftside, header .logo").toggleClass("display-inline");
		return false;
    });

	//Chat Open
	$('.online-users .item').click( function() {
		$(".online-list").addClass("display-none");
		$(".chat").addClass("display-show");
		return false;
	});
	
	//Chat Close
	$('.online-users .close-chat').click( function() {
		$(".chat").removeClass("display-show");
		$(".online-list").removeClass("display-none");
		return false;
	});
	
	//Dropdown Animated
	$('.dropdown').on('show.bs.dropdown', function () {
		$(this).find('.dropdown-menu').addClass('animated fadeInDown');
	});
	$('.dropdown').on('hide.bs.dropdown', function () {
		$(this).find('.dropdown-menu').removeClass('animated fadeInDown');
	});	
	
    //Tooltip
    $("[data-toggle='tooltip']").tooltip();
	
    //Popover
    $("[data-toggle='popover']").popover();
	
	//Quote Carousel
	 $('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});
	
	//Dropdown-menu Scroll
	$(".navbar .dropdown-menu ul").slimscroll({
        alwaysVisible: false,
        size: "8px",
        height: "210px"
    }).css("width", "100%");
	
    //Collapse Box
	$('.collapse-box').click(function(b){
		b.preventDefault();
		var $box = $(this).parent().parent().next('.box-body');
		if($box.is(':visible')) 
		{
		  $(this).children('i').removeClass('fa-chevron-up');
		  $(this).children('i').addClass('fa-chevron-down');
		}
		else 
		{
		  $(this).children('i').removeClass('fa-chevron-down');
		  $(this).children('i').addClass('fa-chevron-up');
		}            
		$box.slideToggle("slow");
	}); 
	
	//Remove Box
    $(".remove-box").click(function() {
        var box = $(this).parents(".box").first();
        box.slideUp();
    });
	
	$(".wrapper").css("min-height",$(window).height()); 

	//Sidebar
    $.fn.sub = function() {
       return this.each(function() {  
		var btn = $(this).children("a").first(); 
		var menu = $(this).children(".sub-menu").first();  
		var active = $(this).hasClass('open');
		if (active) {
            menu.show();
            btn.children(".fa-angle-right").first().removeClass("fa-angle-right").addClass("fa-angle-down");
        }
        btn.click(function(e) { 
			e.preventDefault();
			if (active) {
				menu.slideUp(5);
				active = false;
				btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-right");
				btn.parent("li").removeClass("open");
			} else {
				menu.slideDown(5);
				active = true;
				btn.children(".fa-angle-right").first().removeClass("fa-angle-right").addClass("fa-angle-down");
				btn.parent("li").addClass("open");
			}
        });
    });
};
})(jQuery);

//Sidebar Nav
 $(".sidebar .dropdown").sub();