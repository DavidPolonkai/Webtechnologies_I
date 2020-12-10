$(document).ready(function(){
  $("#content").fadeIn;

  loading("default.html");
  mainPageChange("#button_cars","cars.html");
  mainPageChange("#button_home","default.html");
  mainPageChange("#button_manufacturers","manufacturers.html");
  mainPageChange("#button_form_cars","carsform.html");
  mainPageChange("#button_form_man","manuform.html");

})

function mainPageChange(button,link){
  $(button).unbind().click(function(event){
    $("#content").fadeOut;
    event.preventDefault();

    loading(link);
  })
}

function loading(link){
  $("#content").load(link,function(){
    $(this).css('opacity',0).stop().animate({"opacity":0.8});
  });
}

