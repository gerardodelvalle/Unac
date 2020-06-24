const updateParallax = () => {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const pctScroll = scrollPosition / documentHeight;

  const pctIntro = Math.min(pctScroll / 0.1, 1);
  const pctSubIntro = Math.min(pctScroll / 0.05, 1);

  const titleScale = 2 - pctIntro * 1;
  const subTitleScale = 1 - pctSubIntro * 0.1;
  const titleTop = 40 - pctIntro * 39;
  if (scrollPosition < 784) {
    document.querySelector(".header").style["background-color"] = "none";
  } else {
    document.querySelector(".header").style["background-color"] = "#0C1824";

  };

  document.querySelector(".header").style.transform = `scale(${titleScale})`;
  document.querySelector(".header").style.top = `${titleTop}%`;
  document.querySelector(".subtitle").style.transform = `scale(${subTitleScale})`;
};

 // + 818
const movement02 = () => {
  const scrollPosition02 = window.scrollY - 30;
  const documentHeight02 = document.documentElement.scrollHeight;
  const pctScroll02 = (scrollPosition02  / documentHeight02);

  const pctIntro02 = Math.min(pctScroll02 / 0.1, 1);

  const scaleTwo = pctIntro02 * 2;
  const scaleTwoInvisible = 0;
  // const twoTop =
  if (scrollPosition02 < 782){
  document.querySelector(".logline").style["opacity"] = 0;
  document.querySelector(".logline").style.transform = `scale(${scaleTwo})`;
}else   {
  document.querySelector(".logline").style["opacity"] = 1;
  document.querySelector(".logline").style.transform = `scale(${scaleTwo})`;
  document.querySelector("#opening").style["opacity"] = 0;
  // }
  // ["scale"] = "0px";

  console.log("pctIntro02", pctIntro02);
  console.log("scrollPosition02", scrollPosition02);
  console.log("documentHeight02", documentHeight02);

};}


window.addEventListener("scroll", updateParallax);
window.addEventListener("scroll", movement02)
