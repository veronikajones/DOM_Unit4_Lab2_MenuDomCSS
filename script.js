let number = document.getElementById("Numbers");
let numbersDisplay = document.getElementById("numbers");
let lettersDisplay = document.querySelectorAll("#letters");
console.log(lettersDisplay);


function displayNumbers(event){
    event.preventDefault();
numbersDisplay.style.display = "block";
console.log(numbersDisplay);
for (var i = 0; i < lettersDisplay.length; i++) {lettersDisplay[i].style.display = "none"}

    }



number.addEventListener("click", displayNumbers, false);