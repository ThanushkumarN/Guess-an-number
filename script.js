var guessnumber = document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomNumber = Math.floor (Math.random()*10)+1
var totalscore=10
var attempts = 0; // Counter for attempts
var maxAttempts = 4; // Maximum number of attempts
function check()
{
    var enterednumber = guessnumber. value
    attempts++
    if(randomNumber==enterednumber)
    {
        console.log("Right")
        result.textContent="You Are Right !!!"
    }
    else{
    totalscore=totalscore-1
    score.textContent="score: "+totalscore
        if (attempts < maxAttempts) {
            result.textContent = "Wrong!! Can You Try Again?"}
            else {
                result.textContent = "Sorry, you lose it! The correct number was " + randomNumber;
                guessnumber.disabled = true;
                document.getElementById("checkButton").disabled = true}
    
    }
}
function createStars() {
    const starContainer = document.querySelector(".stars");
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        star.style.animationDelay = Math.random() * 5 + "s";
        starContainer.appendChild(star);
    }
}
// Call starfield creation on page load
window.onload = createStars;
