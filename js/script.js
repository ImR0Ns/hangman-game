// alert(); (test)

var secretWord = "Secret"; // change secret word
function secretWordToWhite(word){
    var whiteSpaces = "", len = secretWord.length - 2;
    var start = word[0], end = word[word.length - 1];
    whiteSpaces = start + "_".repeat(len) + end;
    return whiteSpaces;
}


$(document).ready(function(){
    var white = secretWordToWhite(secretWord); // white spaces
    $(".secretWord").text(white);
    var forCheck = secretWord.toLowerCase().split(""); 
    $("input").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            var userInput = $(this).val();
            if(forCheck.join("") == white.toLowerCase()){
                alert("You won!");
                location.reload(); // restart game;
            } else if(forCheck.includes(userInput)) {
                var splitTwo = white.split("");
                for(var i in forCheck){
                    if(forCheck[i] == userInput){
                       splitTwo[i] = userInput; 
                    }
                }
                white = splitTwo.join("");
                $(".secretWord").text(white);
            }
        }
    });
})