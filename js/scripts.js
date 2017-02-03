$(document).ready(function() {
  $(".clickable").click(function() {
    $(".dog").fadeToggle();
    $(".cat").fadeToggle();
    $(".fish").fadeToggle();
    $(".badger").fadeToggle();
  })

  $(".move-animals").click(function(){
    $(".dog").slideToggle();
    $(".cat").slideToggle();
    $(".fish").slideToggle();
    $(".badger").slideToggle();
  })
})
