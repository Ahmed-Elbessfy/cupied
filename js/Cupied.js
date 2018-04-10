/* This JS Code is for Cupied Project  */
$(document).ready(function () {
    $(".navbar-nav li").click(function () {
        $(".navbar-nav li").removeClass('active');
        $(this).addClass('active');
    });
    $(".carousel").carousel({
        interval : 4000
    });

});
