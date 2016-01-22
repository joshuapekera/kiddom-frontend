$(document).ready(function(){
  $(".navbar-collapse").on("hide.bs.collapse", function(){
    $("#menu-collapse").html('<span class="glyphicon glyphicon-menu-up"></span>');
  });
  $(".navbar-collapse").on("show.bs.collapse", function(){
    $("#menu-collapse").html('<span class="glyphicon glyphicon-menu-down"></span> ');
  });
});
