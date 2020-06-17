console.log("Hello world!")
console.log("scroll")

const updateParallax = () => {
  const scrollPosition = window.scrollY
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight
  const pctScroll = scrollPosition / documentHeight
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "90px";
  } else {
    document.getElementById("header").style.fontSize = "30px";
  }
}

window.addEventListener("scroll", updateParallax)
