$(document).ready(function() {

  var mixer = mixitup('.w-gallery')

  var target = document.querySelector('#src-icon .fa-searchengin');

  //NOw its working
  document.querySelector("#src-icon .fa-searchengin").addEventListener('click', function () {
    document.querySelector("#event").classList.toggle("search");
  })
  //HERE


  $("button").click(function() {
    $("p.me").addClass("ryan3 ryan0");
  });

});
//External function should be outside of Dom ready


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//External function should be outside of Dom ready 

$(".logo").hover(function() {
  alert("Asaalamu alaikum. Welcome to GONEX! How can i help you?");
});
