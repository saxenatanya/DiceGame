const imageArray=new Array("./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png");
const randomNumber1 = Math.floor(Math.random()*imageArray.length);
   document.getElementById("image1").setAttribute("src",imageArray[randomNumber1]);
   const randomNumber2 = Math.floor(Math.random()*imageArray.length);
  document.getElementById("image2").setAttribute("src",imageArray[randomNumber2]);


  if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerText="player 1 wins";
  }
  else if(randomNumber2 == randomNumber1){
    document.querySelector("h1").innerText="draw";
  }
  else{
    document.querySelector("h1").innerText="player 2 wins";
  }


