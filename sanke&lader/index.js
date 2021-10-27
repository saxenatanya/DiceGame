
console.log("loaded");
var grid = document.getElementById('gridSize').value;
var players = document.getElementById('noOfPlayers').value;
var start = document.getElementById('start');



start.addEventListener('click', function (e) {
    e.preventDefault();
    var grid = document.getElementById('gridSize').value;
    var players = document.getElementById('noOfPlayers').value;
    // createGrid(grid, players);
    let randomNumber =   Math.floor(Math.random() * 6) + 1;
    let totalGridNumber = grid*grid;
    let history =[];
    let position =[];
    let history1 =[];
    let position1 =[];
    let dynamicArr=document.createElement('div');
    console.log(history);
    for(let i=0;i<players;++i){
        document.getElementById('mytable').insertRow(-1)
        .innerHTML=
        `<tr>
        <td name="palyer">${i+1}</td>
        <td name="dice roll history" id="historyTd${i}">${dynamicArr}</td>
        <td name="position history" id="positionTd${i}">${position}</td>
        <td name="winnerStatus" id="winnerStatus${i}"></td>
        </tr>`;

    }

    let count=1 ;
    let count1=1 ;
    let positionTotal;
    let positionTotal1;
    for(let j=0;j<totalGridNumber ;j++){
        let randomNumber =   Math.floor(Math.random() * 6) + 1;
        history.push(randomNumber);
        document.getElementById('historyTd0').innerHTML = history;

        positionTotal=  history.reduce((val,acc) => val+acc);
       position.push(count++);
       document.getElementById('positionTd0').innerHTML = position;
    }
    for(let k=0;k<totalGridNumber ;k++){
        let randomNumber =   Math.floor(Math.random() * 6) + 1;
        history1.push(randomNumber);
        document.getElementById('historyTd1').innerHTML = history1;
        positionTotal1=  history1.reduce((val,acc) => val+acc);
    // let count =1;
       position1.push(count1++);
       document.getElementById('positionTd1').innerHTML = position1;
    }

    // if(position[position.length - 1] > position1[position1.length - 1]  ){
        // if(position[position.length] == totalGridNumber ){
        if(positionTotal > positionTotal1 ){
        document.getElementById('winnerStatus0').innerHTML = 'winner';
    }else{
        document.getElementById('winnerStatus1').innerHTML = 'winner';

    }

});



