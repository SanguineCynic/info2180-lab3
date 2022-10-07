
window.onload = function(){
  window.alert("Baguette")
  var board = document.getElementById("board")
  var squares = board.getElementsByTagName("div")

  for(let i = 0; i < squares.length; i++){
    squares[i].classList.add("square")
  }
}
