


//스카이배너
$('.skybanner button').click(function(){
    $('.skybanner').addClass('on')
})



//위로가기 버튼
$(window).scroll(function() {
    curr= $(this).scrollTop();
    if ( curr > 0) { //250 넘으면 버튼이 보여짐니다.
        $('.btn-top').addClass('on');
            } else {
            $('.btn-top').removeClass('on');
        }
});

$('.btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
})



//확장메뉴
//메뉴슬라이드
$('.open').click(function(){
    $('.slide-menu-fix').addClass('on')
    $('body').addClass('hidden')
})
$('.btn-close').click(function(){
    $('.slide-menu-fix').removeClass('on')
    $('body').removeClass('hidden')
    $('.nav').removeClass('on').siblings('.sub').stop().slideUp()
})
//아코디언메뉴
$('.nav').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
        $('.nav').removeClass('on').siblings('.sub').stop().slideUp()
        
    } else {
        $('.nav').removeClass('on').siblings('.sub').stop().slideUp()
        $(this).addClass('on').siblings('.sub').stop().slideDown()

    }

})
//슬라이드
const swiper65 = new Swiper('.product-inner', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    with: 'auto',
    
});



//sc-visual
//mainslide
const swiper = new Swiper('.visual-swiper', {
    pagination: {
        el: ".fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            currentVal = (current < 10)?`0${current}`:current;
            total = (total < 10)? `0${total}`:total;
            return `<span class="curr">${currentVal}</span>
                    /
                    <span class="total">${total}</span>`;
                   
          }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop : true,
        speed : 1000,   
  });
//sub mainslide
const swiper2 = new Swiper('.event-inner', {
    navigation: {
    },
    pagination: {
        el: ".event-fraction",
        type: "fraction",
        },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop : true,
    speed : 300,
           
});



//sc-keywords
//탭
$('.sc-keywords button').click(function(){
    type=$(this).data('type');
    typeList(type);
})

//데이터
typeList('카본매트')
function typeList(type){
    fetch('./assets/data/keyword.json')
    .then(res=>res.json())
    .then(json=>{
        data=json.items;

        sortData = data.filter(function(parm){
            return parm.종류 == type
        })

        let html =``;
        sortData.forEach(element => {

            if(element.price.ori != null){
                oriEl = ` <del class="top-text">${numberFormat(element.price.ori)}</del>`
            }else{
                oriEl = ``;
            }
            if(element.price.sale != null){
                saleEl = `  <em>${element.price.sale}</em>`
            }else{
                saleEl = ``;
            }

            html=html+`
            <li class="swiper-slide">
            <a href="" class="top-box">
                <div class="img-wrap">
                    <img src="${element.thumb}" alt>
                </div>
                <p>${element.productname}</p>
                ${oriEl}
                <span class="price">
                    ${saleEl}
                    ${numberFormat(element.price.curr)}원
                </span>
            </a>
            </li>
        `; 
        });

        $('.sc-keywords .swiper-wrapper').html(html)

        const swiper3 = new Swiper('.keywords-cont', {
            slidesPerView: 'auto',
            spaceBetween:10,
        });

        //tab
        $('.keywords-tab').click(function(){
            tabName=$(this).data('tab');
            $(tabName).addClass('on').siblings().removeClass('on')
        })
        $('.keywords-tab').click(function(){
            $(this).addClass('on')
        })

        
    })
}
function numberFormat(num){
    return num.toLocaleString('ko-KR');
}



//sc-recommendation
const swiper4 = new Swiper('.recommendation-swiper', {
    spaceBetween: 15,
    slidesPerView: 'auto',
    loop:true,
    // freeMode:true,
    centeredSlides: true,
});



//sc-bestreview
const swiper5 = new Swiper('.bestreview-swiper', {
    spaceBetween: 15,
    slidesPerView: 'auto',
    loop:true,
    
});


