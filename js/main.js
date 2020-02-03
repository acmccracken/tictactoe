/*------Constants------*/
//const SQUARES = ["sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8"]
const test1 = [0, 0, 0];
const test2 = [0, 0, 0];
const test3 = [0, 0, 0];


const row1 = [-1, 0, 1];
const row2 = [1, -1, 1];
const row3 = [1, -1, -1];
const grid = [row1, row2, row3];
//winnerWinner will = [row1, row2, row3]; after testing
const winnerWinner = [test1, test2, test3];
let theWinner = 0;

/*------Variables (state)------*/

let theWinner = 0;



/*------Cached Element References------*/



/*------Event Listeners------*/
document.getElementById('board')
  .addEventListener('click', clickBoard);




/*------Functions------*/
init();

function winCondition(){
      
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
  console.log(winnerWinner);

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
    console.log("x wins");
  }else if (theWinner < 0){
    console.log("O wins");
  }
}
