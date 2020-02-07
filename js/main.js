/*------Constants------*/

let grid = [[0, 0, 0],[0, 0, 0], [0, 0, 0]];
let winnerWinner = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


/*------Variables (state)------*/

let theWinner = 0;
let turn = 1;
let turnCount = 0;
let idx, a, b;



/*------Cached Element References------*/
let playerTurn = document.getElementById('message');


/*------Event Listeners------*/
document.getElementById('grid').addEventListener('click', clickBoard);
document.getElementById('btn').addEventListener('click', replay)






/*------Functions------*/
init();

function init(){
    grid = [[0, 0, 0],[0, 0, 0], [0, 0, 0]];
    playerTurn.textContent = "It is X's turn";
}
function replay(){
    theWinner = 0;
    turn = 1;
    turnCount = 0;
    document.getElementById("btn").style.visibility = "hidden";

    for(i = 0; i < 9; i ++){
        document.getElementById(i).textContent = "";
    }
    init();

}

function clickBoard(){
    idx = event.target.id;
    a = idx % 3;
    if(idx == 0){
        b = 0
    }else{
        b = idx / 3;
        b = Math.floor(b);
    }
    
    if(grid[b][a] !== 0) return;
    
    turnCount ++;
   
    render(idx);
    
        
    
}

function winCondition(){
    winnerWinner = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      
  for (i = 0, k = 2; i < 3; i ++){

    for(j = 0; j < 3; j ++){
     
      if( grid[i][j] > 0){
        winnerWinner[0][i] ++;
      }else if(grid[i][j] < 0){
        winnerWinner[0][i] --;
      }
      if( grid[j][i] > 0){
        winnerWinner[1][i] ++;
        }else if(grid[j][i] < 0){
        winnerWinner[1][i] --;
      }      

    }
    if( grid[i][i] > 0){
        winnerWinner[2][0] ++;
    }else if( grid[i][i] < 0){
        winnerWinner[2][0] --;
    }
    if( grid[k][i] > 0){
        winnerWinner[2][1] ++;
    }else if( grid[k][i] < 0){
        winnerWinner[2][1] --;
    }
    k --;

    
  }

  for (i = 0; i < 3; i ++){
    for(j = 0; j < 3; j ++){
      if(winnerWinner[i][j] === 3){
        theWinner ++;
      }else if(winnerWinner[i][j] === -3){
        theWinner --;
      }
    }
  }
  if (theWinner > 0){
    playerTurn.textContent = "X's Win";
  }else if (theWinner < 0){
    playerTurn.textContent = "O's Win";
  }
  
  
    
}

function render(){
    if(theWinner === 0) {
        changeSquare = document.getElementById(idx);
        if(turn > 0){
            changeSquare.textContent = "X";
            playerTurn.textContent = "It is 0's turn"
        }else if(turn < 0){
            changeSquare.textContent = "O";
            playerTurn.textContent = "It is X's turn"
        }

        grid[b][a] = turn;
        console.log(grid);
        turn *= -1;
    
        winCondition();
    }
    if (turnCount ===9 && theWinner === 0){
        playerTurn.textContent = "Nobody Wins";
    }
    if(turnCount === 9 || theWinner !== 0){
        document.getElementById("btn").style.visibility = "visible";

    }

}
