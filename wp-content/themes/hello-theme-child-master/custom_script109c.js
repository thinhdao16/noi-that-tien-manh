jQuery(document).ready(function() {
	  
 jQuery(".popimg").fancybox({
   openEffect	: 'elastic',
   closeEffect	: 'elastic',
   helpers : {
   title : {
   type : 'inside'
        }
     }
});
});

jQuery(document).ready(function($) {

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,  dots: true,
             prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',  
  fade: true,
	 
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',        arrows: false,

 variableWidth: true,
  focusOnSelect: true,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3, variableWidth: false,
      }
    }
 
  ]
});
	var str = $( ".content_single a" ).first().text();
		var str_link = $( ".content_single a" ).attr( 'href' );
	  $(".single-post .rank-math-breadcrumb span:nth-child(2)").after(function() {
		  if(str=="Tin tức"){
			      return '<a href="/tin-tuc/">TIN TỨC</a>';
		  }else{
			      return '<a href="/tin-tuc/">TIN TỨC</a><span class="separator"> / </span> '+'<a href= '+str_link+'/>' +str+ '</a>';
		  }
  }
  );
setTimeout(do_validate, 000)
function do_validate()
{
    $(".first_op").show();
	   $(".two_op").show();   $(".three_op").show();
}
	 let custom=$("")
	 console.log(custom)
	 let custom_he=$(".achive_section_du_an").height();
	  	 let achive_section_du_an_he=$(".achive_section_du_an_he").height();
		  	 let fitter_duan=$(".fitter_duan");
	jQuery(window).scroll(function(event){
if (custom_he < $(window).scrollTop() && achive_section_du_an_he > $(window).scrollTop()) {
      fitter_duan.addClass("fitter_duan-fixed");
} else {
      fitter_duan.removeClass("fitter_duan-fixed");
}

	})

    var width = $(window).width();
 
    if (width <= 768) {
    console.log(width);
        $(".sslidermb_custom>.e-con-inner").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
             prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
        });

    } else {

    }
	 let link_xtc=$(".click_loadpost_xtc")
	link_xtc.click(function() {
    window.location.href = '/danh-muc-du-an/du-an-thi-cong/';
        });

 var height = $(window).height();
    // $(".home div[data-elementor-type|='wp-page']>div:first-child").height(height);
	var lastScrollTop = 0;
var canUpdate = 1;
	  jQuery(window).scroll(function(event){
    var st = jQuery(this).scrollTop();
    if (st < lastScrollTop && canUpdate == 1) {
      //Scroll Down
      jQuery(".sticky-desktop").addClass("hidden");
      canUpdate = 0;
      initScrollMenu();
     // console.log("Go function down!");
    } else if (st > lastScrollTop && canUpdate == 1) {
      jQuery(".sticky-desktop").removeClass("hidden");
      canUpdate = 0;
      initScrollMenu();
   //   console.log("Go function up!");
    }
 //   console.log("Before: ", lastScrollTop);
   // console.log("current: ", st);
    lastScrollTop = st;
  });
	function initScrollMenu() {

    canUpdate = 1;

}

	var $animation_elements = $('.animated_code');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    $('body').on('click', '.silder_banner .slick-arrow', function() {
		let index= parseInt($(".silder_banner .slick-current").attr("data-slick-index")) + 1;
		let del_str=$("div[data-elementor-type|='wp-page']>div:first-child .slick-slide:first-child .number_slider.elementor-widget-heading .elementor-heading-title").text().replace('/ 0', '');
 		
		
		if(index-1===0){
	//	alert(del_str)
}else{
	//alert(index-1)
}
	//alert(index)

  
    })
	  $(".menu-item-has-children>a ").append('<svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector 528" d="M12 0.5L6.5 5.5L1 0.5" stroke="white"/></svg>');
	  $(".form_css .elementor-field-group .elementor-field select").after('<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Polygon 1" d="M5.00391 0.00195399L9.33403 7.50195L0.673778 7.50195L5.00391 0.00195399Z" fill="#D9D9D9"/></svg>');
  var btn  = $(".sticky-desktop");

  $(window).scroll(function () {
  
    if ($(window).scrollTop() > 150) {
      btn.addClass("header-fixed");
    } else {
      btn.removeClass("header-fixed");
    }
  });
    $(".button_css .elementor-button-wrapper>.elementor-button").on(
        "mouseleave",
        function() {
            $(this)
                .addClass("mouseleave")
                .delay(3000)
                .queue(function() {
                    $(this).removeClass("mouseleave");
                    $(this).dequeue();
                });
        }
    );
	 $(".elementor-nav-menu .menu-item a").on(
        "mouseleave",
        function() {
            $(this)
                .addClass("mouseleave")
                .delay(3000)
                .queue(function() {
                    $(this).removeClass("mouseleave");
                    $(this).dequeue();
                });
        }
    );
    var width = $(window).width();
    console.log(width);
    if (width <= 768) {

        $(".service_section__list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
  prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
            variableWidth: true
        });
  $(window).scroll(function () {
  
    if ($(window).scrollTop() > 0) {
      btn.addClass("header-fixed");
    } else {
      btn.removeClass("header-fixed");
    }
  });
    } else {

    }
	
	$(".elementor-menu-toggle__icon--open").click(function() {
 $(".sticky-desktop").addClass("header-fixedfixed");
    });
		$(".elementor-menu-toggle__icon--close").click(function() {
  $(".sticky-desktop").removeClass("header-fixedfixed");
    });
    $(window).resize(function() {

        var width = $(window).width();
        console.log(width);
        if (width <= 768) {
            $(".service_section__list").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
  prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
                variableWidth: true
            });
  $(window).scroll(function () {
  
    if ($(window).scrollTop() > 0) {
      btn.addClass("header-fixed");
    } else {
      btn.removeClass("header-fixed");
    }
  });
        } else {

        }
    });
	    $(".elementor-nav-menu--stretch .elementor-nav-menu__container.elementor-nav-menu--dropdown").append(
        '<div class="box_header"><div class="menu_title">CÔNG TY CỔ PHẦN KIẾN TRÚC NỘI THẤT TIẾN MẠNH</div><div class="menu_boxicon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0582 6.32193C10.5176 6.32193 10.9582 6.50444 11.2831 6.82932C11.608 7.15419 11.7905 7.59481 11.7905 8.05425C11.7905 8.51369 11.608 8.95432 11.2831 9.27919C10.9582 9.60406 10.5176 9.78658 10.0582 9.78658C9.59872 9.78658 9.15808 9.60406 8.8332 9.27919C8.50833 8.95432 8.32584 8.51369 8.32584 8.05425C8.32584 7.59481 8.50833 7.15419 8.8332 6.82932C9.15808 6.50444 9.59872 6.32193 10.0582 6.32193ZM10.0582 5.33203C9.33618 5.33203 8.64377 5.61884 8.13325 6.12935C7.62274 6.63987 7.33594 7.33228 7.33594 8.05425C7.33594 8.77623 7.62274 9.46864 8.13325 9.97915C8.64377 10.4897 9.33618 10.7765 10.0582 10.7765C10.7801 10.7765 11.4726 10.4897 11.9831 9.97915C12.4936 9.46864 12.7804 8.77623 12.7804 8.05425C12.7804 7.33228 12.4936 6.63987 11.9831 6.12935C11.4726 5.61884 10.7801 5.33203 10.0582 5.33203Z" fill="#DBB484"/><path d="M10.0555 4.04012C10.1901 4.04012 10.3271 4.04011 10.4642 4.06092C11.3752 4.16225 12.228 4.58514 12.8862 5.26202C13.5445 5.9389 13.9703 6.8307 14.0955 7.79494C14.2011 8.61469 14.0804 9.44938 13.7481 10.1976C13.7387 10.2246 13.7272 10.2507 13.7138 10.2756C13.6575 10.3952 13.5988 10.5096 13.5352 10.6241L11.0343 15.4632C10.9572 15.6143 10.843 15.7403 10.7038 15.8277C10.5646 15.9152 10.4057 15.9609 10.244 15.9599C10.0926 15.9608 9.94349 15.9206 9.81077 15.8433C9.67804 15.7659 9.56603 15.6539 9.48535 15.5178C8.62401 14.0747 7.30263 11.8618 6.68109 10.8035L6.64193 10.7359C6.21182 10.032 5.9816 9.21143 5.9788 8.3722C5.9788 7.22326 6.40832 6.12138 7.17285 5.30895C7.93739 4.49653 8.97431 4.04012 10.0555 4.04012ZM10.0555 3C8.71532 3.00206 7.43054 3.56872 6.48287 4.57576C5.5352 5.5828 5.00194 6.94804 5 8.3722C5.00308 9.41276 5.28855 10.4303 5.82219 11.3027C5.82219 11.3235 5.84422 11.3443 5.85645 11.3651C6.46576 12.4053 7.71617 14.4855 8.66071 16.0743C8.82913 16.3585 9.06282 16.5926 9.33977 16.7546C9.61671 16.9165 9.92785 17.0009 10.244 17C10.5809 16.9992 10.9116 16.9023 11.2012 16.7193C11.4909 16.5363 11.7291 16.2741 11.8908 15.9599L14.3818 11.1389C14.4552 11.0115 14.5213 10.8789 14.5849 10.7463C14.6021 10.7099 14.6216 10.6709 14.6363 10.6319C15.0448 9.70358 15.1943 8.67032 15.067 7.65453C14.9096 6.45893 14.38 5.35376 13.5626 4.51533C12.7452 3.67689 11.6871 3.15349 10.5571 3.0286C10.3945 3.0113 10.2312 3.00262 10.0677 3.00259L10.0555 3Z" fill="#DBB484"/></svg><div class="menu_text"><span>Office & Showroom: </span>Tổ 2 - Phú Mỹ  - Đồng Xoài - Bình Phước</div></div><div class="menu_boxicon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2256_50838)"><path d="M11.1001 12.1305C9.64429 11.5141 8.48662 10.3537 7.8736 8.8965L9.5736 7.1935L6.4436 4.061L4.8581 5.646C4.5831 5.92257 4.36567 6.25093 4.2184 6.61208C4.07112 6.97322 3.99693 7.35999 4.0001 7.75C4.0001 11.374 8.6261 16 12.2501 16C12.6401 16.0034 13.0268 15.9293 13.3879 15.782C13.749 15.6347 14.0773 15.4172 14.3536 15.142L15.9391 13.5565L12.8066 10.424L11.1001 12.1305ZM13.6461 14.435C13.4625 14.617 13.2445 14.7607 13.0048 14.8577C12.7652 14.9547 12.5086 15.0031 12.2501 15C9.1336 15 5.0001 10.8665 5.0001 7.75C4.99715 7.49142 5.04558 7.23482 5.14257 6.9951C5.23956 6.75537 5.38318 6.53729 5.5651 6.3535L6.4436 5.475L8.1621 7.1935L6.6946 8.661L6.8171 8.968C7.17772 9.93266 7.74148 10.8085 8.47017 11.5363C9.19887 12.264 10.0755 12.8266 11.0406 13.186L11.3436 13.3015L12.8066 11.838L14.5251 13.5565L13.6461 14.435ZM11.0001 5V4C12.3257 4.00146 13.5967 4.52871 14.534 5.46607C15.4714 6.40344 15.9986 7.67436 16.0001 9H15.0001C14.9989 7.9395 14.5771 6.92278 13.8272 6.17289C13.0773 5.423 12.0606 5.00119 11.0001 5ZM11.0001 7V6C11.7955 6.00079 12.5581 6.31712 13.1205 6.87956C13.683 7.44199 13.9993 8.20459 14.0001 9H13.0001C13.0001 8.46957 12.7894 7.96086 12.4143 7.58579C12.0392 7.21071 11.5305 7 11.0001 7Z" fill="#DBB484"/></g><defs><clipPath id="clip0_2256_50838"><rect width="12" height="12" fill="white" transform="translate(4 4)"/></clipPath></defs></svg><div class="menu_text">0816.111.222 - 0969.461.890</div></div></div>'
    );
    $(".link_text.elementor-widget-heading .elementor-heading-title a").append(
        '<div class="ajax_line"></div>'
    );
    $(".ue_taxonomy_item  .ue_taxonomy_item_content").append(
        '<div class="ajax_line"></div>'
    );
    $(".ue_taxonomy_item  .ue_taxonomy_item_content").append(
        '<div class="ajax_line"></div>'
    );
	    $(".jet-radio-list__row  .jet-radio-list__button .jet-radio-list__label").append(
        '<div class="ajax_line"></div>'
    );
    $(".icon_scroll  svg").click(function() {
        $("html, body").animate({
            //   scrollTop: $(document).height() - $(window).height(),
            scrollTop: $("div[data-elementor-type='wp-page']>div:first-child").height(),
        });
    });
	
	    $(".icon_scroll.nopotion   svg").click(function() {
        $("html, body").animate({
              scrollTop: $(window).height(),
        });
    });
		    $(".icon_scroll.abs_1    svg").click(function() {
        $("html, body").animate({
              scrollTop: $(window).height(),
        });
    });
   $(" .icon_scroll_home  svg").click(function() {
        $("html, body").animate({
            //   scrollTop: $(document).height() - $(window).height(),
            scrollTop: $(window).height() + $(window).height() / 12,
        });
    });
	
        var children;
    var totalWidth = 0;
    if ($("#container_5").length > 0) {
        children = document.getElementById('container_5').children;
        for (var i = 0; i < children.length; i++) {
            totalWidth += parseInt(children[i].offsetWidth, 10);
        }
    }

    if ($("#container_5").length > 0) {
        $("#container_5").width(totalWidth);
    }
		let video=$(".post-type-archive-video .uc-items-wrapper .video_loop");
    video.each(function() {
		let video_title=$(this).find(".elementor-heading-title a")
		let video_link=$(this).find(".ue_play_button a").attr( 'href' )
		video_title.attr('href',video_link)
		   console.log(video_link)
    });
 	let image_grid_responsive=$(".image_grid_responsive1 .gallery .gallery-item");

    image_grid_responsive.each(function(value, i) {
		let number = Math.ceil(image_grid_responsive.length / 5)

		if(value < number){
		 $(this).addClass("image_grid_responsive_show")
		}
    });
 	let image_grid_responsive2=$(".image_grid_responsive2 .gallery .gallery-item");

    image_grid_responsive2.each(function(value, i) {
		let number2 = Math.ceil(image_grid_responsive.length / 5)

		if(value >= number2 && value < number2 +number2 +number2){
		 $(this).addClass("image_grid_responsive_show")
		}
    });
 	let image_grid_responsive3=$(".image_grid_responsive3 .gallery .gallery-item");

    image_grid_responsive3.each(function(value, i) {
		let number2 = Math.ceil(image_grid_responsive.length / 5)

		if(value >= number2 +number2 +number2){
		 $(this).addClass("image_grid_responsive_show")
		}
    });
    // $("#remove").remove();
    $(".slider_mmbhome>.e-con-inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
         prevArrow:'<svg  class="sgv_icon sgv_icon_prve" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
    });
    $(".slider_mmbhome>.e-con-inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
    prevArrow:'<svg  class="sgv_icon sgv_icon_prve" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
    });

    $(".popuphome").each(function() {
        $(this).find(".elementor-widget-container>svg").on("click", function() {
            $(this).parent().parent().parent().addClass("pupop_home_sectionintro");
            $('.pupop_home_section').removeClass('fadeInBottom');
        });
    });

    $(".pupop_home_section_top,.pupop_home_section_left,.pupop_home_section_right,.pupop_home_section_bottom").on("click", function() {
        $('.pupop_home_section').addClass('fadeInBottom');
        setTimeout(function() {
            $('.pupop_home_sectionintro').removeClass('pupop_home_sectionintro');
        }, 1000);
    });

    var width = $(window).width();

    if (width <= 768) {
    console.log(width);
        $(".sslidermb_custom>.e-con-inner").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
             prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
        });

    } else {

    }
    if (width <= 768) {

    }
    $(window).resize(function() {

        var width = $(window).width();
        console.log(width);
        if (width <= 768) {
            $(".sslidermb_custom>.e-con-inner").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
     prevArrow:'<svg  class="sgv_icon sgv_icon_prve active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="0.5" y="-0.5" width="57" height="39" rx="19.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 -4.37114e-08 39)" stroke="#D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0703 20.5742L25.585 23.4765L23.9627 26L16.9627 21.5L15 20.2383L16.9627 18.9765L23.9627 14.4765L25.585 17L21.5808 19.5742L38.3798 19.5742L40.8794 17.0747L43.8791 20.0744L40.8794 23.0742L38.3794 20.5742L21.0703 20.5742Z" fill="#D9D9D9"/></svg>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
  
            });

        } else {

        }
        if (width <= 768) {

        }
    });


});