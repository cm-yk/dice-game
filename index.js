document.querySelector("a").style.color="green";
var randomNumber1  = Math.random();
    randomNumber1  = randomNumber1 *6;
    randomNumber1  = Math.floor(randomNumber1 +1);
    // if (randomNumber1=1) {
    //     document.querySelector("img").setAttribute("src","./images/dice1.png");
    // }
    switch (randomNumber1) {
        case 1:
        document.querySelector("img.img1").setAttribute("src","./images/dice1.png");   
        break; 
        case 2:
        document.querySelector("img.img1").setAttribute("src","./images/dice2.png");   
        break; 
        case 3:
        document.querySelector("img.img1").setAttribute("src","./images/dice3.png");   
        break; 
        case 4:
        document.querySelector("img.img1").setAttribute("src","./images/dice4.png");   
        break; 
        case 5:
        document.querySelector("img.img1").setAttribute("src","./images/dice5.png");   
        break; 
    }
    var randomNumber2  = Math.random();
    randomNumber2  = randomNumber2 *6;
    randomNumber2  = Math.floor(randomNumber2 +1);
    switch (randomNumber2) {
        case 1:
        document.querySelector("img.img2").setAttribute("src","./images/dice1.png");   
        break; 
        case 2:
        document.querySelector("img.img2").setAttribute("src","./images/dice2.png");   
        break; 
        case 3:
        document.querySelector("img.img2").setAttribute("src","./images/dice3.png");   
        break; 
        case 4:
        document.querySelector("img.img2").setAttribute("src","./images/dice4.png");   
        break; 
        case 5:
        document.querySelector("img.img2").setAttribute("src","./images/dice5.png");   
        break; 
    }
    if  (randomNumber2>randomNumber1) {
        document.querySelector("h1").innerHTML="Ms Mee Mee Winner";
    } else (
        document.querySelector("h1").innerHTML="Mr YK Winner"
    )
    if  (randomNumber2===randomNumber1) {
        document.querySelector("h1").innerHTML="Draw";
    }