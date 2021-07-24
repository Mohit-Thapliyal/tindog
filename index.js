// window.onscroll = function()
// {
//     if(pageOffset >= 100)
//     {
//         document.getElementById('back-to-top').style.visibility="hidden"
//     }else
//     {
//         document.getElementById('back-to-top').style.visibility="hidden";
//     }
// };
var toTopButton = document.getElementById("back-to-top");
toTopButton.style.display = "none";//by default should be hidden

var date = new Date();
var year = date.getFullYear();
document.getElementById('copyright').innerHTML = "© Copyright " + year + " TinDog"

document.querySelector('body').onscroll = function(){//whenever they scroll
  if (window.scrollY > 200)//if scroll is 150px from top
    toTopButton.style.display = "block";//if they scroll down, show
  else
    toTopButton.style.display = "none";//if they scroll up, hide
};
// document.getElementById('print').addEventListener(onclick) = window.print;