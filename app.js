


$(document).ready(function() {
	alert("Ready to Play");
});

window.board = {};

var turnCount = 0;


$('.cell').on('click', function() {
	if (turnCount % 2 === 0) {
		$(this).text('X');
	isWinner('X');
	}
	else {
		$(this).text('O');
	isWinner('O');	
	}
	
	turnCount++;
	
});		


var isWinner = function() {

	

// Top Row winner

  if ($('#1').text() === 'X' && $('#2').text() === 'X' && $('#3').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#1').text() === 'O' && $('#2').text() === 'O' && $('#3').text() === 'O') {
  	isWinner = true;
  	

 // Middle Row Winner 	
	
  } else if ($('#4').text() === 'X' && $('#5').text() === 'X' && $('#6').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#4').text() === 'O' && $('#5').text() === 'O' && $('#6').text() === 'O') {
  	isWinner = true;
  	

// Bottom Row Winner

 } else if ($('#7').text() === 'X' && $('#8').text() === 'X' && $('#9').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#7').text() === 'O' && $('#8').text() === 'O' && $('#9').text() === 'O') {
  	isWinner = true;
  	

 // Left Column Winner

} else if ($('#1').text() === 'X' && $('#4').text() === 'X' && $('#7').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#1').text() === 'O' && $('#4').text() === 'O' && $('#7').text() === 'O') {
  	isWinner = true;
  	

 //Middle Column Winner

} else if ($('#2').text() === 'X' && $('#5').text() === 'X' && $('#8').text() === 'X') {
  	isWinner = true;
  	

  } else if ($('#2').text() === 'O' && $('#5').text() === 'O' && $('#8').text() === 'O') {
  	isWinner = true;
  	

 //Right Column Winner

} else if ($('#3').text() === 'X' && $('#6').text() === 'X' && $('#9').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#3').text() === 'O' && $('#6').text() === 'O' && $('#9').text() === 'O') {
  	isWinner = true;
  	

 //Left Diagonal Winner

} else if ($('#1').text() === 'X' && $('#5').text() === 'X' && $('#9').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#1').text() === 'O' && $('#5').text() === 'O' && $('#9').text() === 'O') {
  	isWinner = true;
  	

 //Right Diagonal Winner
 
 } else if ($('#3').text() === 'X' && $('#5').text() === 'X' && $('#7').text() === 'X') {
  	isWinner = true;
  	
  	
  } else if ($('#3').text() === 'O' && $('#5').text() === 'O' && $('#7').text() === 'O'); {
  	isWinner = true;

}

 
  
  
  	if (isWinner === true) {
  		if (isWinner === 'X'); 
  		alert("Player 1 is the Winner!");
  	} else if (isWinner === 'O') {
  		alert("Player 2 is the Winner!");
  	}

  	$('.cells').off("click");
  
  

};



