document.addEventListener("DOMContentLoaded", function(){
  let imageA = document.getElementById("ImageA");
  let slowRateA = 0.6;
  let imageB = document.getElementById("ImageB");
  let slowRateB = 0.5;
  let imageC = document.getElementById("ImageC");
  let slowRateExperiment = 0.3
  let textTitle = document.getElementById("ArtText");
  let infoBoxes = document.getElementsByClassName("openClose")
  let contentDiv = document.getElementsByClassName("expandInf")
  let topBox  = document.getElementById("topBox")
  let ArticleA = document.getElementById("ArticleA")
  let backImages = ["/img/JapaneseClassicalSkeleton.png", "/img/SceneryPainting.png", "/img/CastlePainting.png", "/img/FlowersBlue.png"]
  let waveImgs = document.getElementsByClassName("wave");
  let imgOffsets = [window.innerHeight, window.innerHeight*2, window.innerHeight*2]
  let slowRates = [0.1, 0.3, 0.5]
  let openStat = [false, false, false, false]
  let openAlready = 0;
  let slowRateText = 1;
  let buffer = 40;
  let currVal = 0;

  let cursorDiv = document.getElementById("cursorBox");
  const move = (e) => setTimeout(function(){
    let x  = e.pageX;
    let y = e.pageY;

    cursorDiv.style.left = (x) + "px";
    cursorDiv.style.top = (y) + "px";
    currVal = y;
  }, 100)
  document.addEventListener("mousemove", (e) => {
    move(e)
  });
  function closeBox(i){
    infoBoxes[i].style.transform = "rotate(0deg)";
    contentDiv[i].style.height = "0";
    openStat[i] = true;
    contentDiv[i].style.opacity = "0";
    setTimeout(function(){
      contentDiv[i].style.padding = "0";
      contentDiv[i].style.boxSizing = "none";
      }, 400)
  }
  function openBoxes(i){
    infoBoxes[i].style.transform = "rotate(-135deg)";
    contentDiv[i].style.height = "40%";
    openStat[i] = false;
    contentDiv[i].style.opacity = "1";
    contentDiv[i].style.padding = "2.5em 0.5em 0.5em 0.5em";
    contentDiv[i].style.boxSizing = "border-box";
    // ArticleA.style.backgroundImage = "url(\""+ backImages[i]+"\")";
  }

  for(let i= 0; i< infoBoxes.length; i++){
    infoBoxes[i].addEventListener("click", function(){
      if(openStat[i]) {
        openBoxes(i)
      } else{
        closeBox(i)
      }
      if(i !== openAlready){
        closeBox(openAlready);
        openAlready = i;
      }
    })
    infoBoxes[i].addEventListener("mousemove", function(){
      cursorDiv.style.height = "60px";
      cursorDiv.style.width = "60px";
      cursorDiv.style.backgroundColor= "rgba(255, 255, 255, 1)";
      cursorDiv.style.mixBlendMode = "difference";
      cursorDiv.style.border= "none";
    })
    infoBoxes[i].addEventListener("mouseout", function(){
      cursorDiv.style.height = "40px";
      cursorDiv.style.width = "40px";
      cursorDiv.style.backgroundColor= "transparent";
      cursorDiv.style.border= "2px solid white";
      cursorDiv.style.mixBlendMode = "difference";
    })
  }

  let offsets = [window.innerHeight*1.05, window.innerHeight*1.03, window.innerHeight*1.06]/*[433, 423, 440]*/;
  let scrollVal = 0;
  let rects = document.getElementsByClassName("effectEx");
  window.addEventListener("scroll", function (e) {
    let offsetA = window.scrollY;
    let offsetB = offsetA - 200;
    let i = 0;
    for (let rect of rects){
      let offsetsA = rect.getBoundingClientRect();
      rect.style.top = -window.scrollY +offsets[i] + "px";
      if(window.scrollY >= window.innerHeight*0.3 && window.scrollY <= window.innerHeight*1.7) {
        rect.style.height = window.scrollY - window.innerHeight*0.3 + "px";
      }
      i++;
    }
    for(let i = 0; i < waveImgs.length; i++) {
      waveImgs[i].style.left = window.scrollY * slowRates[i] - imgOffsets[i] +  "px";
    }
    scrollVal = offsetA;
    i = 0;
    textTitle.style.left = -window.scrollY* slowRateText *2 + "px";
    imageA.style.backgroundPositionY = -offsetA * slowRateA - window.innerHeight/4.3 + "px";
    imageB.style.backgroundPositionY = -offsetB * slowRateB + "px";
    imageC.style.backgroundPositionY = offsetB*slowRateA + "px";
    cursorDiv.style.top = scrollVal + currVal + "px";
  })

  ArticleA.addEventListener("mousemove", function (e) {
  for(let content of contentDiv){
    content.style.backgroundPositionY = (e.clientY) / buffer - window.innerHeight*1.145 + "px";
    content.style.backgroundPositionX = (e.clientX) / buffer  - window.innerHeight *0.065+  "px";
  }
})
})

