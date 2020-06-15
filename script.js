
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

document.querySelector("#Guatemala").addEventListener("mouseenter", e => {
  e.target.style.transform = "scale(1.1)";
});
document.querySelector("#Guatemala").addEventListener("mouseleave", e => {
  e.target.style.transform = "scale(1)";
});
