$(document).ready(function(){
	createMenu();
	
	var animalToClick = "Click on the animal" + gameObject.animalGame.correctAnimal;

	assignAnimalAndCallForGifToDiv();

	function assignAnimalAndCallForGifToDiv() {
		clearDivs();
		getFourRandomAnimalsIntoArray();

		for (i = 0; i < gameObject.animalGame.fourRandomAnimalsArray.length; i++) {
			var thisDiv = "div" + (i);
			var thisAnimal = gameObject.animalGame.fourRandomAnimalsArray[i];
			var thisSearchTerm = "nature " + thisAnimal;

			getGifAndAssignToDiv(thisSearchTerm, thisDiv);
		}
		// assign our 'winning' animal for this round.
		gameObject.animalGame.correctAnimal = gameObject.animalGame.fourRandomAnimalsArray[getRandomFrom(4)];

		getWikipediaEntry(gameObject.animalGame.correctAnimal);
		// voice active asking kids to find said animal
		computerSayThis("find " + gameObject.animalGame.correctAnimal);
	}

	function getFourRandomAnimalsIntoArray() {
		gameObject.animalGame.fourRandomAnimalsArray = [];
		for (i = 0; i < 4; i++) {
			gameObject.animalGame.fourRandomAnimalsArray.push(
				gameObject.animalGame.animalArray[
				getRandomFrom(gameObject.animalGame.animalArray.length)]);
			// TODO this can duplicate animals - do we want to eliminate that?  Or is a duplicate animal such a good thing?
			// If we have randomized gifs inside of a animal I would almost leave the 'mulitple success' in.  Sometimes mulitple things ARE true in life.
		}
	}

	$("#clicky-container").on("click", ".gif", function(){
		if ($(this).attr("assigned_thing") === ("nature " + gameObject.animalGame.correctAnimal)) {
			getMessageForComputerToSay("success");
			assignAnimalAndCallForGifToDiv();
		}
		else {
			getMessageForComputerToSay("failure");
		}
	});


});