Pseudocode
console.log('App starting...')
var wordArry = ['Nicole', 'Alyssa', 'Mike', 'David', 'Jean', 'Micheal', 'MiChel', 'Josue']
//1. Display opening page
//1. Rules
//1. Press any key to start (how do you start it)

//Next, we give JavaSript a function to execute when onkeyup event fires.
document.onkeyup = function(event)  {
    var displayWords = document.getElementById("display-words");

    //userText.textContent = event.key;
    var randomWord = wordGenerator();
    console.log("Random person: " + randomWord);

    var tempString = "<p>"
    //paragraph
    //Output the stuff
    for (var i = 0; i < random.length; i++) {
        if (lettersGuessed.includes(randomWord[i])) {
            tempString += randomWord[i] + " ";
        } else {
            tempString += "_";
        }
    }
}
