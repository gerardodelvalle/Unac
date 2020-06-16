// var y = 0;

function myFunction() {
  document.getElementById("header").innerHTML = x += 1;
}

// const updateParallax = () => {
//   const scrollPosition = window.scrollX
//   const documentHeight = document.documentElement.scrollHeight - window.innerHeight
//   const pctScroll = scrollPosition
//
// const bg = document.querySelector(".opening")
//   const newLeft = -1 * pctScroll * (document.documentElement.scrollWidth)
//   bg.style.left = newLeft + "px"
//
//   const fg = document.querySelector("h1")
//   //const newOpacity = 1 - ((pctScroll - 0.5) / 0.5)
//   if (pctScroll < 0.5){
//     newOpacity = 0
//   } else {
//     newOpacity = (pctScroll - 0.5) / 0.5
// }
// }
// function scrollFunction() {
//   console.log("scrolling")
//   if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50)
//   {
//     document.getElementById("header").style.fontSize = "60pt";
//   } else {
//     document.getElementById("header").style.fontSize = "40pt";
//     document.getElementById("header").style.transition = "2s";
//   }
// }
// window.addEventListener("scrolling", scrollFunction)
//
function scrollFunction() {
  console.log("scroll")
  if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50)
  {
    document.getElementById("subtitle").style.fontSize = "60pt";
  } else {
    document.getElementById("subtitle").style.fontSize = "40pt";
    document.getElementById("subtitle").style.transition = "2s";
  }
}
window.addEventListener("scroll", scrollFunction)

// document.querySelector("Guatemala").addEventListener("mouseenter", e =>
// {  e.target.style.transform = "scale(1.1)";
// });
// document.querySelector("Guatemala").addEventListener("mouseleave", e =>
// {  e.target.style.transform = "scale(1)";
// });
