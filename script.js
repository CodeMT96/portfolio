// Notes wenn ich erklären muss
// Das ist die delcaration die meinem script sagt das mein div mit der "screencover" id für ihn splashScreen heißt
const splashScreen = document.getElementById("screencover");
// Hier sind noch mehr declarations
const splashScreenText = document.getElementById("splashText");
const splashScreenDivs = document.getElementById("splashanim");
const htmlBody = document.getElementById("forScroll")

function disableScrolling() {
  htmlBody.classList.add("stopScroll")
}
disableScrolling()
// Die function added eine klasse zu dem splashScreen an dem die Animation fadeOut gebunden ist
function clickToView() {
  splashScreen.classList.add("fadeout");
  splashScreenText.classList.add("fadeoutFast");
  splashScreenDivs.classList.add("fadeoutFast");
  setTimeout(() => {
    splashScreen.style.display = "none";
    htmlBody.classList.remove("stopScroll")
  }, 2500)
}


// Das ist der Eventlistener der listend für events duhhh
splashScreen.addEventListener("click", clickToView);

