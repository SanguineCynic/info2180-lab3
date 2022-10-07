window.onload = function(){
  var board = document.getElementById("board") //Div containing 9 divs
  var squares = board.getElementsByTagName("div") //List of each div in board
  var counter = 0 //Initialized turn counter (even is X, odd is O)
  var boardstate = ["0","1","2","3","4","5","6","7","8"] //Array to track board state for win conditions
  var status = document.getElementById("status") //Top line of text
  var button = document.getElementsByClassName("btn")[0] //New game button

  for(let i = 0; i < squares.length; i++){ //For each div in squares...
    squares[i].classList.add("square")     //...give class of "square"
    squares[i].addEventListener('click', function(){ //...give onclick event which *

      if (counter % 2 == 0 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){ //*checks if turn is X and square to click is empty
        squares[i].classList.add("X") //*adds class "X" to square
        squares[i].textContent = "X"  //*sets square to have an X
        counter++                     //*increments turncounter to odd number (O's turn)
        boardstate.splice(i,1,"X")    //*edits boardstate array to track move

      if (((boardstate[0] == boardstate[1]) && (boardstate [1] == boardstate[2])) || ((boardstate[3] == boardstate[4]) && (boardstate[4] == boardstate[5])) || ((boardstate[6] == boardstate[7]) && (boardstate[7] == boardstate[8])) ||  ((boardstate[0] == boardstate[3]) && (boardstate[3] == boardstate[6])) ||  ((boardstate[1] == boardstate[4]) && (boardstate[4] == boardstate[7])) ||  ((boardstate[2] == boardstate[5]) && (boardstate[5] == boardstate[8])) ||  ((boardstate[0] == boardstate[4]) && (boardstate[4] == boardstate[8])) || ((boardstate[2] == boardstate[4]) && (boardstate[4] == boardstate[6]))){//*checks for any winning states
        status.textContent = "Congratulations! X is the Winner!" //*sets text in status
        status.classList.add("you-won")                          //*adds "you-won" class to status
        }
      }
      else if (counter % 2 == 1 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){//*checks if turn is O and square to click is empty
        squares[i].classList.add("O")//*adds class "O" to square
        squares[i].textContent = "O" //*sets square to have an O
        counter++                    //*increments turncounter to even number (X's turn)
        boardstate.splice(i,1,"O")   //*edits boardstate array to track move

      if (((boardstate[0] == boardstate[1]) && (boardstate [1] == boardstate[2])) || ((boardstate[3] == boardstate[4]) && (boardstate[4] == boardstate[5])) || ((boardstate[6] == boardstate[7]) && (boardstate[7] == boardstate[8])) ||  ((boardstate[0] == boardstate[3]) && (boardstate[3] == boardstate[6])) ||  ((boardstate[1] == boardstate[4]) && (boardstate[4] == boardstate[7])) ||  ((boardstate[2] == boardstate[5]) && (boardstate[5] == boardstate[8])) ||  ((boardstate[0] == boardstate[4]) && (boardstate[4] == boardstate[8])) || ((boardstate[2] == boardstate[4]) && (boardstate[4] == boardstate[6]))){ //*checks for any winning states
        status.textContent = "Congratulations! O is the Winner!" //*sets text in status
        status.classList.add("you-won")                          //*adds "you-won" class to status
        }
      }

    })

    squares[i].addEventListener('mouseover',function(){ //...adds event where mouse hovers over square
      squares[i].classList.add("hover")                 //...adds class "hover" to hovered square
    })

    squares[i].addEventListener('mouseout',function(){ //...adds event where mouse un-hovers over square
      squares[i].classList.remove("hover")             //...removes class "hover" from hovered square
    })



  }

  button.addEventListener('click',function(){//Event listener for when button is clicked
    for(let i = 0; i < squares.length; i++){//Resets attributes back to original state for each square
      squares[i].textContent = ""  //Clears X and O text from squares
      squares[i].className = "square" //Clears X and O classes from squares
      boardstate = ["0","1","2","3","4","5","6","7","8"] //Resets boardstate to initial state
      counter = 0 //Resets turncounter to 0 (X's turn)
      status.className = "" //Resets status to no class as opposed to "you-won"
      status.textContent = "Move your mouse over a square and click to play an X or an O." //Resets status text
    }
  })

}
