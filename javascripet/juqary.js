// $({ Counter: 0 }).animate({
//   Counter: $('.counter').text()
//   }, {
//   duration: 1000,
//   easing: 'swing',
//   step: function() {
//     $('.counter').text(Math.ceil(this.Counter));
//   }
//   });
let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);
arr.map((item)=>{
    let count = item.innerHTML;
    item.innerHTML = "";
    let countNumber= 0;


    function counterUp(){
        item.innerHTML= countNumber++;
        if ( countNumber > count ) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(() => {
        counterUp();
    },item.dataset.speed/count );

});

      // owlCarousel


      $('#nullam').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:false,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:2
              },
              1000:{
                  items:2
              }
          }
        })



      $('#our-att').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:false,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              },
              1200:{
                items:4
              },
              1600:{
                items:3
              }
          }
        })

        // owlCarousel end


              // form value

function formDate(){
var name12 = document.forms["userform"]["name"];
var email12 = document.forms["userform"]["email"];
if (name12.value =="") {
window.alert("please enter your name");
name12.focus();
return false;
};
if (email12.value =="") {
window.alert("please enter your email");
email12.focus();
return false;
};

return true;
};
