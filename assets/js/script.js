(() => { 
let score = 0;

function incrementScore (){
score += 1;
}

    document.getElementById("clickMe").addEventListener("click", () => {
        incrementScore();

    }


})();