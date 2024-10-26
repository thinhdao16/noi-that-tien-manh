jQuery(document).ready(function ($) {
  	    $(".list_du_an_tieu_bieu").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
      infinite: true,
		                      prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
          nextArrow:'<svg class="sgv_icon sgv_icon_next active" xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">  <rect x="57.5" y="39.5" width="57" height="39" rx="19.5" transform="rotate(-180 57.5 39.5)" stroke="#D9D9D9"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9297 20.5742L32.415 23.4765L34.0373 26L41.0373 21.5L43 20.2383L41.0373 18.9765L34.0373 14.4765L32.415 17L36.4192 19.5742L19.6202 19.5742L17.1206 17.0747L14.1209 20.0744L17.1206 23.0742L19.6206 20.5742L36.9297 20.5742Z" fill="#D9D9D9"/></svg>',       
          variableWidth: true
  });
    });
jQuery(document).ready(function($) {
	
	$('#slider_product_slick').slick({
		arrows: true,
		prevArrow: '<div class="slick-prev"><</div>',
		nextArrow: '<div class="slick-next">></div>',
		responsive: [
          {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            infinite: true,
            }
          }
        ]
	});

	$('.slide-bo-suu-tap').slick({
		arrows: false,
		slidesToShow: 2,
		responsive: [
          {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            infinite: true,
            }
          }
        ]
	});

	var $slideshow = $('.slide-kh-danh-gia');
	
	$slideshow.on('init', function(event, slick) {
		$('.slide-kh-danh-gia-top .item').removeClass('active');
		var dataId = $('.slide-kh-danh-gia .slick-current').attr("data-slick-index");
		$('.slide-kh-danh-gia-top .item:eq('+dataId+')').addClass('active');
		//console.log(dataId);
	});
	$('.slide-kh-danh-gia').slick({
		arrows: true,
		autoplay:true,
		autoplaySpeed:9900,
		 dots: true,
		prevArrow: '<div class="slick-prev"><</div>',
		nextArrow: '<div class="slick-next">></div>',
		slidesToShow: 1,
	});
	$slideshow.on('afterChange', function(event, slick, currentSlide) {
		$('.slide-kh-danh-gia-top .item').removeClass('active');
		$('.slide-kh-danh-gia-top .item:eq('+currentSlide+')').addClass('active');
		$('.slick-initialized .slick-slide.slick-active img.preview').css('opacity', '1');
		$('.block-danh-gia-cua-khach-hang .item-bst .video-play-iframe-container').remove();
		//console.log(currentSlide);
	});

	var $slideshowmb = $('.slider-for');
	 $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
//           fade: true,
          dots: true,
//           customPaging: function(slick,index) {
//               return '<a>' + (index + 1) + '</a>';
//           },
          asNavFor: '.slider-nav,.extra-dots-boximage'
      });
	$slideshowmb.on('afterChange', function(event, slick, currentSlide) {
		$('.elementor-widget-danh_gia_cua_khach_hang .extra-dots-boximage ul li').removeClass('slick-active');
		$('.elementor-widget-danh_gia_cua_khach_hang .extra-dots-boximage ul li:eq('+currentSlide+')').addClass('slick-active');
		//console.log(currentSlide);
	});
      //set active class to first slide
$('.slider-nav .slick-slide,.extra-dots-boximage .slick-slide').eq(0).addClass('slick-active');
      $('.slider-nav').slick({
          slidesToShow: 1,
          slidesToScroll: 1,

          asNavFor: '.slider-for',
          dots: false,
          focusOnSelect: true,
          responsive: [{
                  breakpoint: 992,
                  settings: {
                      vertical: false,
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      vertical: false,
                  }
              },
              {
                  breakpoint: 580,
                  settings: {
                      vertical: false,
                      slidesToShow: 1,
                  }
              },
              {
                  breakpoint: 380,
                  settings: {
                      vertical: false,
                      slidesToShow: 1,
                  }
              }
          ]
      });
	  $('.extra-dots-boximage').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
arrows: false,
          asNavFor: '.slider-for',
          dots: true,
          focusOnSelect: false,
           
      });
      $('.slider-nav,.extra-dots-boximage').on('mouseover', '.slick-slide', function (e) {
        var $currTarget = $(e.currentTarget), 
        index = $currTarget.data('slick-index'),
        slickObj = $('.slider-for').slick('getSlick');
    
    slickObj.slickGoTo(index);
    
});
	
$('.elementor-element-4ae15a22 .elementor-field-group input[type="tel"]').keyup(function(e) {                         
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});
	
$("#button_box_play_video").hover(function () {
    $('.elementor-3056 .elementor-element.elementor-element-c5b10e8').addClass('animation');
}, 
function () {
    $('.elementor-3056 .elementor-element.elementor-element-c5b10e8').removeClass('animation');
});
	
});


const homepageScrollBtn = document.getElementById("homepage_scrollBtn")
const homepagePreview = document.getElementById("homepage__preview")

if(homepageScrollBtn){
	
	homepageScrollBtn.addEventListener("click", ()=>{
		homepagePreview.scrollIntoView({
            behavior: "smooth",
          });
		
	})
}

    const fixedLayout = document.querySelector(".elementor-element-23e10d7");

window.addEventListener("scroll", () => {
	      fixedLayout.style.transition = "transform 0.4s ease";
      fixedLayout.style.transform = "translateX(0%)";
})
