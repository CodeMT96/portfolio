// Das ist die delcaration die meinem script sagt das mein div mit der "screencover" id für ihn splashScreen heißt
const splashScreen = document.getElementById("screencover");
// Hier sind noch mehr declarations
const splashScreenText = document.getElementById("splashText");
const splashScreenDivs = document.getElementById("splashanim");
// Notes wenn ich erklären muss
// Die function added eine klasse zu dem splashScreen an dem die Animation fadeOut gebunden ist
function clickToView() {
  splashScreen.classList.add("fadeout");
  splashScreenText.classList.add("fadeoutFast");
  splashScreenDivs.classList.add("fadeoutFast");
}
// Eine Function um die opacity des splashScreens zu checken
function hideSplashScreen() {
  var computedStyle = window.getComputedStyle(splashScreen);
  var opacity = computedStyle.getPropertyValue("opacity");
  console.log("opacity:", opacity);
  if (opacity === 0) {
    splashScreen.style.display = "none";
  }
}
hideSplashScreen();
setTimeout(hideSplashScreen,2550);

// Das ist der Eventlistener der listend für events duhhh
splashScreen.addEventListener("click", clickToView);
