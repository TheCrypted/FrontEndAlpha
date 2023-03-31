document.addEventListener("DOMContentLoaded", function(){
  let inputBox = document.getElementById("login-box");
  inputBox.addEventListener("mouseover", function(e) {
    inputBox.style.boxShadow = "0 0 50px rgba(0,0,0, 0.5)";
  })
  inputBox.addEventListener("mouseout", function(e) {
    inputBox.style.boxShadow = "none";
  });
  let submitButton = document.getElementById("submit");
  let degChange = 120;
  let isHovering = false;

  const buttonAnimation = () => {
    if (isHovering) {
      submitButton.style.backgroundImage = "linear-gradient(" + degChange + "deg, #e0c3fc 0%, #8ec5fc 100%)";
      degChange += 5;
      if(degChange >= 360) {
        degChange = 0;
      }
      setTimeout(buttonAnimation, 20);
    }
  };

  submitButton.addEventListener("mousemove", function(e) {
    submitButton.style.top = 50 + "px";
    submitButton.style.boxShadow = "none";
    if (!isHovering) {
      isHovering = true;
      buttonAnimation();
    }
  });

  submitButton.addEventListener("mouseout", function(e) {
    isHovering = false;
    submitButton.style.top = 40 + "px";
    submitButton.style.boxShadow = "0px 10px rgba(80,80,80,1)";

    submitButton.style.backgroundImage = submitButton.style.backgroundImage = "linear-gradient(" + degChange + "deg, #e0c3fc 0%, #8ec5fc 100%)";
  });

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
  })
})

