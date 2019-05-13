$(document).ready(function() {
$(".clickable").click(function(){
  $(".about-hidden").toggle();
  $(".about-showing").toggle();
});
$(".clickable1").click(function(){
  $(".rules-hidden").toggle();
  $(".rules-showing").toggle();
});

player1total = 0
score1 = 0
player2total = 0
score2 = 0


function Turn2() {
  document.getElementById('#pl1').disabled = true
  document.getElementById('#pl2').disabled = false
  player1total = 0

}

function Turn1() {
  document.getElementById('#pl2').disabled = true
  document.getElementById('#pl1').disabled = false
  player2total = 0


}
$(document).ready(function() {
    var player1 = new Player(this.name = $("#pl1").val())
    alert(player1.name)
    $("#pl1").text(player1.name)
    var player2 = new Player(this.name = $("#pl2").val())
    $("#pl2").text(player2.name)
  })
  $("#roll1").click(function() {
    var rolled = Math.floor((Math.random() * 6) + 1);
    $("#score1").text(rolled);
    if (rolled == 1) {
      alert("Change player you rolled a 1")

      Turn2()
    } else {
      player1total += rolled;

    }

    $("#tscore1").text(player1total);

    $("#hold1").click(function(event) {


      score1 += player1total;

      if (score1 > 100) {
      } else {
        alert("You won")
      }
    });

  });

  $("#roll2").click(function() {
    var rolled = Math.floor((Math.random() * 6) + 1);
    $("#score2").text(rolled);
    if (rolled == 1) {
      alert("Change player you rolled a 1!")
      player2total = 0
      Turn1()

    } else {
      player2total += rolled;
    }

    $("#tscore2").text(player2total);
    $("#hold2").click(function(event) {
      event.preventDefault();

      score2 += player2total;

      if (score2 > 100) {

      } else {
        alert("You won")
      }
    });
  });
});
