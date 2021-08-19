// alert(); (test)

var secretWord = "secret"; // change secret word
function secretWordToWhite(word){
    var whiteSpaces = "";
    var start = word[0], end = word[word.length - 1];
    for(var k in secretWord){
        if(secretWord[k].toLowerCase() === start.toLowerCase()){
            whiteSpaces += start;
        } else if(secretWord[k].toLowerCase() === end.toLowerCase()){
            whiteSpaces += end;
        } else {
            whiteSpaces += "_"
        }
    }
    return whiteSpaces;
}


$(document).ready(function(){
    var white = secretWordToWhite(secretWord); // white spaces
    $(".secretWord").text(white);
    var forCheck = secretWord.toLowerCase().split(""); 
    var wordsUsed = [forCheck[0], forCheck[forCheck.length - 1]], mistakes = 0;
    $("input").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            var userInput = $(this).val();
            if(!white.includes("_")){
                alert("You won!");
                location.reload(); // restart game;
            }else if(wordsUsed.includes(userInput)){
                alert("The character has already been used!");
            } else if(forCheck.includes(userInput)) {
                var splitTwo = white.split("");
                for(var i in forCheck){
                    if(forCheck[i] == userInput){
                       splitTwo[i] = userInput; 
                    }
                }
                wordsUsed.push(userInput);
                white = splitTwo.join("");
                $(".secretWord").text(white);
            } else {
                var op = mistakes + 1;
                if(op > 6){
                    alert("You lose!");
                    location.reload(); // restart game;
                } else {
                    mistakes += 1;
                    $(".mistakes").text("Mistakes: " + mistakes);
                    switch (mistakes) {
                        case 1:
                            $("#mist").attr("src","/imgs/1mist.png");
                            break;
                        case 2:
                            $("#mist").attr("src","/imgs/2mist.png");
                            break;
                        case 3:
                            $("#mist").attr("src","/imgs/3mist.png");
                            break;
                        case 4:
                            $("#mist").attr("src","/imgs/4mist.png");
                            break;
                        case 5:
                            $("#mist").attr("src","/imgs/5mist.png");
                            break;
                        case 6:
                            $("#mist").attr("src","/imgs/6mist.png");
                            $(".mistakes").text("Last chance!");
                            break;
                    }
                }
            }
        }
    });
})