$(document).ready(function() {
    $('.header_search_bar_img_active').click(function() {
        $('.header_search_bar').toggleClass('header_search_bar_active')
    })
    $('.header_search_bar_img_active').click(function() {
        $('.header_search_bar_input').toggleClass('header_search_bar_input_higher');
    });
})


// $(function () {
//     $(".header_search_bar_img_active").unbind('click');
//     $(".header_search_bar_img_active").click(function () {
//         $(this).toggleClass("fas fa-search fas fa-search-minus");
// })
// });


$(document).ready(function() {
    $('#products-filter li').on('click', function(){
        let dataAttr = $(this).attr('data-name');
        $('.future_product_img_hide').css('display', 'none');
        $('.' + dataAttr).css('display', 'block');
        return false;
    })
})