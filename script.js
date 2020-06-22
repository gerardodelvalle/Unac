const updateParallax = () => {
  const scrollPosition = window.scrollY
  const documentHeight = document.documentElement.scrollHeight
  // - window.innerHeight
  const pctScroll = scrollPosition/documentHeight;
  const introtext = document.querySelector("h1")
  const newDown = 1 * pctScroll * (document.documentElement.scrollHeight)
  const newScale = 1 - ((pctScroll - 0.5) / 0.5)
  if (pctScale <= 87){
    newScale = 3;
    marginTop = 10px;
  }
  const bg = document.querySelector("#opening")
  bg.style.left = newDown + "px"

  const fg = document.querySelector("h1")
  const newScale = 1 - ((pctScroll - 0.5) / 0.5)
  let newScale
  if (pctScale < 21){
    newScale = 3;
  } else {
    newScale = 1;
    }
  const newLeftFg = pctScroll * (document.documentElement.scrollWidth * 8)
  fg.style.scale = newScale

  console.log("updateParallax")
  console.log("scrollPosition")
  console.log("documentHeight")
  console.log("pctScroll")
}

window.addEventListener("scroll", updateParallax)
