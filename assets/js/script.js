(() => { 
    let score = 0;
    let scoreHTML = document.getElementById("score");
    let multiplicatorCheck = {'part-1': 0, 'part-2': 0, 'part-3': 0, 'part-4': 0, 'part-5': 0, 'part-6': 0, 'part-7': 0, 'part-8': 0, 'part-9': 0, 'autoClick': 0};
    let prices = [10,100,1000,10000,100000,10000000,1000000000,1000000000,10000000000,100000000000];
    let buttons = document.querySelectorAll("[id^='part-']");
    for (button of buttons){
        button.disabled = true;
    }
    document.getElementById('autoClick').disabled = true;
    document.getElementById('bonus').disabled = true;

    function incrementScore (){
        let multiple = 1;

        for (const [key, value] of Object.entries(multiplicatorCheck)) {
            if(value){
                multiple = multiple * value;
            }
        }
        score += 1 * multiple;
        scoreHTML.innerHTML=score;
    }


    document.getElementById("clickMe").addEventListener("click", () => {
        incrementScore();

        switch(true){
            case score > 5 && multiplicatorCheck['part-1'] == 0: document.getElementById('part-1').disabled = false;break;
            case score > 100 && multiplicatorCheck['part-2'] == 0: document.getElementById('part-2').disabled = false;break;
            case score > 1000 && multiplicatorCheck['part-3'] == 0: document.getElementById('part-3').disabled = false;break;
            case score > 10000 && multiplicatorCheck['part-4'] == 0: document.getElementById('part-4').disabled = false;break;
            case score > 100000 && multiplicatorCheck['part-5'] == 0: document.getElementById('part-5').disabled = false;break;
            case score > 1000000 && multiplicatorCheck['part-6'] == 0: document.getElementById('part-6').disabled = false;break;
            case score > 10000000 && multiplicatorCheck['part-7'] == 0: document.getElementById('part-7').disabled = false;break;
            case score > 100000000 && multiplicatorCheck['part-8'] == 0: document.getElementById('part-8').disabled = false;break;
            case score > 1000000000 && multiplicatorCheck['part-9'] == 0: document.getElementById('part-9').disabled = false;break;
            case score > 10000000000 && multiplicatorCheck['part-10'] == 0: document.getElementById('autoClick').disabled = false;break;
        }
    });

    document.getElementById("part-1").addEventListener("click", () => {
        
    });

})();