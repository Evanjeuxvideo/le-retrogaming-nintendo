$(document).ready( function(){
  $(document).on( "click", ".liste_jeux" ,function() {
      //$(this).css("background","red")
      $(this).toggleClass("active")
    });


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
    
});