$(document).ready(function(){
   var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if( $(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        }else {
            $('.menu').removeClass('menu-fixed');
        }
         });
});

$('.galeria--img').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal" ><img src=" '+ img +'" class="modal--img"><div class="modal--boton" id="modal--boton">x</div></div>';
  $('body').append(modal);
  $('#modal--boton').click(function(){
      $('#modal').remove();
  })
})