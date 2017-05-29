$( document ).ready(function() {
    console.log( "ready!");

var characterpick = true,
	attackable = 0,
	arthurval = 0,
	rabbitval = 0,
	lancelotval = 0,
	robinval = 0,
	attackcounter = 0,
	attackerlife = 1,
	defendlife =1,
	attackerdamage = 0,
	enemiesdefeated = 0,
	attacker = [],
	defend = [],
	characters = { 	c1: ["King Arthur", 10, 10 ,20],
				   	c2: ["Killer Rabbit", 10, 10 , 120],
				   	c3: ["Sir Lancelot", 10, 10, 120],
				   	c4: ["Sir Robin", 10, 10, 120]
				   };

	



			console.log("characterpick " + characterpick)
			console.log("attackable " + attackable)
			
		
		//to pick your character and move other 3 characters to enemy

			$('.Char1').on('click',function(){
				if(characterpick === true){
				//create new yourchar class
				$(this).addClass("yourchar");
				//creat new attackhp class
				$(".char1hp").addClass("attackhp");	
				//move picked character in youcharcrow
				$(".Char1").appendTo('.yourcharcrow');
				//create new var with character attributes
				attacker = Array.from(characters.c1)
				//disqualify yourchar from defender
				arthurval = 4;
				//disqualify other characters from yourchar
				characterpick = false;
				console.log("characterpick " + characterpick);

				//move other 3 characters to enemies row
				$('.Char2').appendTo('.enemies')
				$('.Char3').appendTo('.enemies')
				$('.Char4').appendTo('.enemies')

	}
			//if a different character is picked as your character than  
			// this character becomes the defender
			else if(arthurval <= 0){
				//move character to defender row and add new class
				$('.Char1').appendTo('.defender')
				.addClass("defending");
				//creat new defendhp class
				$(".char1hp").addClass("defendhp");
				//move character attribute to defend array
				defend = Array.from(characters.c1)
				//enable attack button
				attackable++;
				console.log("attackable " + attackable)
				$('#attackresult').html("Ready for attack")
				//dont allow other charactes to be picked as 1st defender
				rabbitval++;
				lancelotval++;
				robinval++;
			
}
});
		$('.Char2').on('click',function(){
				if(characterpick === true){
				//create new yourchar class
				$(this).addClass("yourchar");
				//creat new attackhp class
				$(".char2hp").addClass("attackhp");
				//move picked character in youcharcrow
				$(".Char2").appendTo('.yourcharcrow');
				//create new var with character attributes
				attacker = Array.from(characters.c2)
				//disqualify yourchar from defender
				rabbitval = 4;
				//disqualify other characters from yourchar
				characterpick = false;
				console.log("characterpick " + characterpick);
			//move other 3 characters to enemies row
				$('.Char1').appendTo('.enemies')
				$('.Char3').appendTo('.enemies')
				$('.Char4').appendTo('.enemies')
	}
			//if a different character is picked as your character than  
			// this character becomes the defender
			else if(rabbitval <= 0){
				//move character to defender row and add new class
				$('.Char2').appendTo('.defender')
				.addClass("defending");
				//creat new defendhp class
				$(".char2hp").addClass("defendhp");
				//move character attribute to defend array
				defend = Array.from(characters.c2);
				//enable attack button				
				attackable++;
				console.log("attackable " + attackable)
				$('#attackresult').html("Ready for attack")
				//dont allow other charactes to be picked as 1st defender
				arthurval++;
				lancelotval++;
				robinval++;
			
}
});	
			//if a different character is picked as your character than  
			// this character becomes the defender
			$('.Char3').on('click',function(){
				if(characterpick === true){
				//create new yourchar class
				$(this).addClass("yourchar");
				//creat new attackhp class
				$(".char3hp").addClass("attackhp");
				//move picked character in youcharcrow
				$(".Char3").appendTo('.yourcharcrow');
				//create new var with character attributes
				attacker = Array.from(characters.c3)
				//disqualify yourchar from defender
				lancelotval = 4;
				//disqualify other characters from yourchar
				characterpick = false;
				console.log("characterpick " + characterpick);
				//move other 3 characters to enemies row
				$('.Char1').appendTo('.enemies')
				$('.Char2').appendTo('.enemies')
				$('.Char4').appendTo('.enemies')
	}
		//if a different character is picked as your character than  
		// this character becomes the defender
			else if(lancelotval <= 0){
				//move character to defender row and add new class
				$('.Char3').appendTo('.defender')
				.addClass("defending")
				//creat new defendhp class
				$(".char3hp").addClass("defendhp");
				//move character attribute to defend array
				defend = Array.from(characters.c3)
				//enable attack button
				attackable++;
				console.log("attackable " + attackable)
				$('#attackresult').html("Ready for attack")
				//dont allow other charactes to be picked as 1st defender
				arthurval++;
				rabbitval++;
				robinval++;
}

});	
		$('.Char4').on('click',function(){
			if(characterpick === true){
				//create new yourchar class
				$(this).addClass("yourchar");
				//creat new attackhp class
				$(".char4hp").addClass("attackhp");
				//move picked character in youcharcrow
				$(".Char4").appendTo('.yourcharcrow');
				//create new var with character attributes
				attacker = Array.from(characters.c4)
				//disqualify yourchar from defender
				robinval = 4;
				//disqualify other characters from yourchar
				characterpick = false;
				console.log("characterpick " + characterpick);
				//move other 3 characters to enemies row
			$('.Char1').appendTo('.enemies')
			$('.Char2').appendTo('.enemies')
			$('.Char3').appendTo('.enemies')
	}
		//if a different character is picked as your character than  
		// this character becomes the defender
				else if(robinval <= 0){
					//move character to defender row and add new class
					$('.Char4').appendTo('.defender')
					.addClass("defending");
					//creat new defendhp class
					$(".char4hp").addClass("defendhp")
					//move character attribute to defend array;
					defend = Array.from(characters.c4)
					//enable attack button
					attackable++;
					console.log("attackable " + attackable)
					$('#attackresult').html("Ready for attack")
					//dont allow other charactes to be picked as 1st defender
					arthurval++;
					rabbitval++;
					lancelotval++;
}	
			
});
	
		
		//If you push the attack button
		$('.attackbtn').on('click', function(){
			if(attackable === 1){
			//track number of attacks
			attackcounter++
			console.log(attackcounter)
			//create new var to track increasing attackerdamage
			attackerdamage = attacker[1]*attackcounter
			//log defender return damage to attacker life
			 attackerlife = attacker[3]-defend[2]
			//reset attacker life to post-attack level
			attacker[3] = attackerlife
			//display attacker hp on html
			$(".attackhp").html(attackerlife)
			//log attacker damage to defender lfe	
			 var defendlife = defend[3]-attackerdamage
			//reset defender life at post-attack level
			defend[3] = defendlife
			//display defender life on html
				$(".defendhp").html(defendlife)

				if(defendlife > 0 && attackerlife > 0){
					//display para discribing battle		
			$('#attackresult').html('You attacked ' + defend[0] + 
							' for ' + attackerdamage +  ' damage and '+
							 defend[0] + ' returned ' + 
							 defend[2] + ' damage back to you.')
			console.log('You attacked ' + defend[0] + 
							' for ' + attackerdamage +  ' damage and '+
							 defend[0] + ' returned ' + 
							 defend[2] + ' damage back to you.')
				}
				console.log("attackerdamage " + attackerdamage)
				console.log("attackerlife " + attackerlife)
				console.log("defendlife " + defendlife)
				
		
				//if your character's life <= 0
				if(attackerlife <= 0){
					attackable--
					//dispay para saying you've lost
					$('#attackresult').html("You have been defeated. The grail will never be found now. GAME OVER!")
					

					

				} if(defendlife <=0){
					enemiesdefeated++
					attackable--
					//display para 
					$('#attackresult').html("You have defeated " + defend[0] + "! Choose another defender.")
					//reset the defender array
					defend = [];
					//remove defender from defender row in html
					$(".defending").hide();
					//requalify all characters to be the defender
					arthurval--;
					rabbitval--;
					lancelotval--;
					robinval--;
				} 	
				if (enemiesdefeated === 3){
					attackable--
					//displpay para for win
					$('#attackresult').html("Congratulations!! You have defeated all the enemies. The grail is yours!!!")
					
				}


			}
			 if(attackable === 0){

					$('#attackresult').html("Not ready for attack")}
});			
		
				$('.restartbtn').click(function() {
    					location.reload();
});
		});	
