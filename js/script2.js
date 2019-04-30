$(document).ready(function(){
$(".about-more-txt").slideUp();

$(".btn-about-read").click(function(){
    $(".about-more-txt").slideToggle();
});

$(".trity-txt-extra").slideUp();
$(".btn-trity-txt").click(function(){
    $(".trity-txt-extra").slideToggle();
});
$("#lightgallery").lightGallery();
});