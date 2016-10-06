$(document).ready(function(){
  var $newdiv;
    for (var i = 0; i < 256; i++) {
        $newdiv = $('<div class="ball" />');
        $('#container').append($newdiv);
    }

$('.ball').hover(function(){
  $(this).addClass('change');

 }); 
  
  $('button').click(function() {
    $('.ball').removeClass('change');
    $('.ball').remove();
    var squares = prompt("How many squares you want?");
   for (var i = 0; i < squares; i++) {
        $newdiv = $('<div class="ball" />');
        $('#container').append($newdiv);
     }
    
 
});
  });