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