(() => { 
    let score = 0;
    let multiple = 1;
    let factor = 2;
    let multiplicatorPrice = 10;
    let autoClickPrice = 10;
    let bonusPrice = 10;
    let bonus = 1;
    let bonusRunning = false;
    let quantityOfAutoclick = 0;
    let scoreHTML = document.getElementById("score");
    document.getElementById("multiplicator").innerHTML = "x"+factor+" Price: "+multiplicatorPrice;
    
    let b_multiplicator = document.getElementById('multiplicator');
    b_multiplicator.disabled = true;

    let b_autoClick = document.getElementById('autoClick');
    b_autoClick.disabled = true;
    b_autoClick.innerHTML = quantityOfAutoclick+" click(s)/s Price: "+autoClickPrice;

    let b_bonus = document.getElementById('bonus');
    b_bonus.disabled = true;


    document.getElementById('autoClick').disabled = true;
    document.getElementById('bonus').disabled = true;

    scoreHTML.innerHTML=score;

    function incrementScore (){
        
        score += 1 * multiple * bonus;
        scoreHTML.innerHTML=score;
    }

    function incrementMultiplicator(){
        multiple = multiple * factor;
    }


    document.getElementById("clickMe").addEventListener("click", () => {
        incrementScore();
        checkAvailability();
        
    });

    document.getElementById("multiplicator").addEventListener("click", () => {
        incrementMultiplicator();
        score = score - multiplicatorPrice;
        scoreHTML.innerHTML=score;
        checkAvailability();
        multiplicatorPrice = multiplicatorPrice * factor**2;
        factor = factor * 2;
        document.getElementById("multiplicator").innerHTML = "x"+factor+" Price: "+multiplicatorPrice;
        b_multiplicator.disabled = true;
    });

    function checkAvailability(){
        if(score >= multiplicatorPrice){
            b_multiplicator.disabled = false;
        }
        else{b_multiplicator.disabled = true;}

        if(score >= autoClickPrice){
            b_autoClick.disabled = false;
        }
        else{b_autoClick.disabled = true;}

        if(score >= bonusPrice && bonusRunning != true){
            b_bonus.disabled = false;
        }
        else{b_bonus.disabled = true;}
    }

    function click(){
        document.getElementById("clickMe").click();
    }

    document.getElementById("autoClick").addEventListener("click", () => {
        score = score - autoClickPrice;
        scoreHTML.innerHTML=score;
        b_autoClick.disabled = true;
        autoClickPrice = autoClickPrice * 100;
        quantityOfAutoclick++;
        b_autoClick.innerHTML = quantityOfAutoclick+" click(s)/s Price: "+autoClickPrice;
        checkAvailability();
        setInterval(() => {
            click();
        }, 1000);
    });

    document.getElementById("bonus").addEventListener("click", () => {
        score = score - bonusPrice;
        scoreHTML.innerHTML=score;
        b_bonus.disabled = true;
        bonusRunning = true;
        bonusPrice = bonusPrice * 100;
        checkAvailability();
        bonus = 2;
        let timeLeft = 30;
        var a = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').innerHTML = timeLeft;
        }, 1000);
        setTimeout(()=>{
            bonus = 1;
            clearInterval(a);
            document.getElementById('timer').innerHTML = '';
            b_bonus.disabled = false;
            bonusRunning = false;
        },30000);   
    });
})();