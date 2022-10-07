window.onload = function(){
  var board = document.getElementById("board")
  var squares = board.getElementsByTagName("div")
  var counter = 0
  var boardstate = ["0","0","0","0","0","0","0","0","0"]

  for(let i = 0; i < squares.length; i++){
    squares[i].classList.add("square")
    squares[i].addEventListener('click', function(){

      if (counter % 2 == 0 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){
        squares[i].classList.add("X")
        squares[i].textContent = "X"
        counter++
        boardstate.splice(i,1,"X")
        console.log(boardstate)
      }
      else if (counter % 2 == 1 && !(squares[i].classList.contains("X") || squares[i].classList.contains("O"))){
        squares[i].classList.add("O")
        squares[i].textContent = "O"
        counter++
        boardstate.splice(i,1,"O")
      }

    })


  }
}
