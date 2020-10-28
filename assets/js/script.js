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
    scoreHTML.innerHTML= "Vaccine rate:  " + score;

    let b_multiplicator = document.getElementById('multiplicator');
    b_multiplicator.disabled = true;
    b_multiplicator.innerHTML = factor+"x more vaccines/click - Cost: "+multiplicatorPrice;

    let b_autoClick = document.getElementById('autoClick');
    b_autoClick.disabled = true;
    b_autoClick.innerHTML = quantityOfAutoclick+" click(s)/s - Cost: "+autoClickPrice;

    let b_bonus = document.getElementById('bonus');
    b_bonus.disabled = true;
    b_bonus.innerHTML= "Vaccination campaign - Cost " + bonusPrice;

    document.getElementById('timer').style.visibility = "hidden";

    //Function to increment the score
    function incrementScore (){
        score += 1 * multiple * bonus;
        scoreHTML.innerHTML= "Vaccine rate:  " + score;
    }

    //Function to increase the multiplicator
    function incrementMultiplicator(){
        multiple = multiple * Math.floor(factor);
    }

    //Function to check the availibility of the buttons
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

    //Function click of autoClick
    function click(){
        document.getElementById("clickMe").click();
    }

    //Button Earth
    document.getElementById("clickMe").addEventListener("click", () => {
        incrementScore();
        checkAvailability();
    });

    //Button More Vaccines
    document.getElementById("multiplicator").addEventListener("click", () => {
        incrementMultiplicator();
        score = score - multiplicatorPrice;
        scoreHTML.innerHTML= "Vaccine rate:  " + score;
        checkAvailability();
        multiplicatorPrice = multiplicatorPrice * Math.floor(factor**2);
        factor = factor * 1.1;
        document.getElementById("multiplicator").innerHTML = Math.floor(factor)+"x more vaccines/click - Cost: "+multiplicatorPrice;
        b_multiplicator.disabled = true;
    });

    //Button click(s)/s
    document.getElementById("autoClick").addEventListener("click", () => {
        score = score - autoClickPrice;
        scoreHTML.innerHTML= "Vaccine rate:  " + score;
        b_autoClick.disabled = true;
        autoClickPrice = autoClickPrice * 10 * Math.floor(factor);
        quantityOfAutoclick++;
        b_autoClick.innerHTML = quantityOfAutoclick+" click(s)/s - Cost: "+autoClickPrice;
        checkAvailability();
        setInterval(() => {
            click();
        }, 1000);
    });

    //Button Vaccination campaign
    document.getElementById("bonus").addEventListener("click", () => {
        score = score - bonusPrice;
        scoreHTML.innerHTML= "Vaccine rate:  " + score;
        document.getElementById('timer').style.visibility = "visible";
        b_bonus.disabled = true;
        bonusRunning = true;
        bonusPrice = bonusPrice * 10 * Math.floor(factor);
        b_bonus.innerHTML= "Vaccination campaign - Cost " + bonusPrice;
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
            document.getElementById('timer').style.visibility = "hidden";
        },30000);   
    });
})();