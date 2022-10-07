window.onload = function(){
  var board = document.getElementById("board")
  var squares = board.getElementsByTagName("div")
  var counter = 0
  var boardstate = ["0","1","2","3","4","5","6","7","8"]
  var status = document.getElementById("status")

  for(let i = 0; i < squares.length; i++){
    squares[i].classList.add("square")
    squares[i].addEventListener('click', function(){

      if (counter % 2 == 0 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){
        squares[i].classList.add("X")
        squares[i].textContent = "X"
        counter++
        boardstate.splice(i,1,"X")
        if ((boardstate[0] && boardstate [1] == boardstate[2]) || (boardstate[3] && boardstate[4] == boardstate[5]) || (boardstate[6] && boardstate[7] == boardstate[8]) ||  (boardstate[0] && boardstate[3] == boardstate[6]) ||  (boardstate[1] && boardstate[4] == boardstate[7]) ||  (boardstate[2] && boardstate[5] == boardstate[8]) ||  (boardstate[0] && boardstate[4] == boardstate[8]) || (boardstate[2] && boardstate[4] == boardstate[6])){
          status.textContent = "Congratulations! X is the Winner!"
          status.classList.add("you-won")
        }
      }
      else if (counter % 2 == 1 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){
        squares[i].classList.add("O")
        squares[i].textContent = "O"
        counter++
        boardstate.splice(i,1,"O")
        if ((boardstate[0] && boardstate [1] == boardstate[2]) || (boardstate[3] && boardstate[4] == boardstate[5]) || (boardstate[6] && boardstate[7] == boardstate[8]) ||  (boardstate[0] && boardstate[3] == boardstate[6]) ||  (boardstate[1] && boardstate[4] == boardstate[7]) ||  (boardstate[2] && boardstate[5] == boardstate[8]) ||  (boardstate[0] && boardstate[4] == boardstate[8]) || (boardstate[2] && boardstate[4] == boardstate[6])){
          status.textContent = "Congratulations! O is the Winner!"
          status.classList.add("you-won")
        }
      }

    })

    squares[i].addEventListener('mouseover',function(){
      squares[i].classList.add("hover")
    })

    squares[i].addEventListener('mouseout',function(){
      squares[i].classList.remove("hover")
    })



  }
}
