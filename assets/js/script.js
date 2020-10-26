(() => { 
let score = 0;
let scoreHTML = document.getElementById("score");

function incrementScore (){
score += 1;
scoreHTML.innerHTML=score;
}


    document.getElementById("clickMe").addEventListener("click", () => {
        incrementScore();

    });

    document.getElementById("part-1").addEventListener("click", () => {
    
    
    });



})();