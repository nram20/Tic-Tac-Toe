$('document').ready(function() {

 
  console.log("JQ is working");
 var x = "X";
 var o= "O";
 var turnCounter = 1;
 var xLocations = ["", "", "", "", "", "", "", "", ""];
 var oLocations = ["", "", "", "", "", "", "", "", ""];
 
 function xVictoryCheck(arr) {
  var victoryArrs = [
    [0, 1, 2],
    [4, 5, 6],
    [7, 8, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
   for(var i = 0; i < victoryArrs.length; i++) {
    var xProgressCounter = 0
      for (var j = 0; j < victoryArrs[i].length; j++) {
        console.log(victoryArrs[i][j])
    
        if (arr[victoryArrs[i][j]] === "x") {
          xProgressCounter ++;
          console.log("victory progress count for X: ", xProgressCounter)
        }
      }
      if (xProgressCounter === 3) {
        return true;
      }
    }

    return false;
}

function oVictoryCheck(arr) {
  var victoryArrs = [
    [0, 1, 2],
    [4, 5, 6],
    [7, 8, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
   for(var i = 0; i < victoryArrs.length; i++) {
    var oProgressCounter = 0
      for (var j = 0; j < victoryArrs[i].length; j++) {
        console.log(victoryArrs[i][j])
    
        if (arr[victoryArrs[i][j]] === "o") {
          oProgressCounter ++;
          console.log("victory progress count for O: ", oProgressCounter)
        }
      }
      if (oProgressCounter === 3) {
        return true;
      }
    }

    return false;
}



$('#playerPrompt').text("Player 1, Mark Your First X!");


$('.cells').on('click', clickCell);

function clickCell(event) {
  console.log("I'm clicked");
  ++turnCounter;
  console.log("turnCounter is: ", turnCounter);
  $('#turn').text("Turn #" + turnCounter);
  var turnValue = turnCounter % 2;




if (turnCounter < 10) {

  if (turnValue === 0) {
    $('#playerPrompt').text("O my god hurry up and move, Player 2!");
    $(event.target).text(x);
    xLocations[parseInt(event.target.id)-1] = "x";
    console.log(xLocations)
    console.log(xVictoryCheck(xLocations))
      if (xVictoryCheck(xLocations)) {
        alert("Player 1's X's Reign Supreme! How about a rematch?");
      }
  } else {
    $('#playerPrompt').text("X Marks the Spot, Player 1")
    $(event.target).text(o);
    oLocations[parseInt(event.target.id)-1] = "o";
    console.log(oLocations, oLocations.length)
    if (oVictoryCheck(oLocations)) {
        alert("Player 2's O's Reign Supreme! How about a rematch?");
      }
  }

} 

else { 
  $('#playerPrompt').text("Game Over! You've reached a stalemate!")
  if (turnValue === 0) {
    $(event.target).text(x);
    xLocations[parseInt(event.target.id)-1] = "x";
    console.log(xLocations, xLocations.length)
    if (xVictoryCheck(xLocations)) {
        alert("Player 1's X's Reign Supreme! How about a rematch?");
      }
  } else {
    $(event.target).text(o);
    oLocations[parseInt(event.target.id)-1] = "o";
    console.log(oLocations, oLocations.length)
    if (oVictoryCheck(oLocations)) {
        alert("Player 2's O's Reign Supreme! How about a rematch?");
      }
  }


}

}


$('#reset').on('click', newGame);

function newGame() {
$('.cells').empty();
$('#playerPrompt').text("Player 1, Mark Your First X!");
var turnCounter = 1;
xLocations = ["", "", "", "", "", "", "", "", ""];
oLocations = ["", "", "", "", "", "", "", "", ""];



}





  
});