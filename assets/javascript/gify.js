$(document).ready(function() {
	var animal = [
		'dog',
		'cat',
		'rabbit',
		'hamster',
		'skunk',
		'goldfish',
		'bird',
		'ferret',
		'turtle',
		'sugar glider',
		'chinchilla',
		'hedgehog',
		'hermit crab',
		'gerbal',
		'pygmy goat',
		'chicken',
		'capybara',
		'teacup pig',
		'serval',
		'salamander',
		'frog'
	];

	// function displayGifInfo() {
	// 	var animalGif = $(this).attr('data-name');
	// 	console.log(animalGif);
	// 	var queryurl =
	// 		'https:api.giphy.com/v1/gifs/search?q=' + animalGif + '&api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i&limit=10';
	// 	console.log('Query URL: ' + queryurl);
	// 	$.ajax({
	// 		url: queryurl,
	// 		method: 'GET'
	// 	}).done(function(response) {

	function Giftastic() {
		var animalGif = $(this).attr('data-name');
		console.log(animalGif);
		var queryurl =
			'https://api.giphy.com/v1/gifs/search?q=' +
			animalGif +
			'&api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i&limit=10';
		console.log('Query URL: ' + queryurl);
		$.ajax({
			url: queryurl,
			method: 'GET'
		}).done(function(response) {
			var results = response.data;
			console.log(response);
			console.log(queryurl);
			var gifDiv = $("<div class='animal'></div>");

			for (var i = 0; i < results.length; i++) {
				var pOne = $('<div>').html('Rating: ' + results[i].rating);

				gifDiv.append(pOne);

				var imageURL = results[i].images.fixed_height.url;

				var animalImage = $('<img>').attr('src', imageURL);

				animalImage.attr('class', 'gif');

				animalImage.attr('data-state', 'still');

				animalImage.attr('alt', 'animal image');

				animalImage.attr('data-animate', imageURL);

				animalImage.attr('data-still', results[i].images.fixed_height_still.url);

				$('#animal-view').prepend(animalImage);
				$('#animal-view').prepend(pOne);
			}
		});
	}

	function renderButtons() {
		$('#buttons-view').empty();

		for (var i = 0; i < animal.length; i++) {
			var button = $('<button />');

			button.addClass('animal-btn');

			button.attr('data-name', animal[i]);

			button.text(animal[i]);

			$('#buttons-view').append(button);
		}
	}

	renderButtons();

	$('#add-animal').on('click', function(event) {
		event.preventDefault();
		// This line grabs the input from the textbox
		var newAnimal = $('#animal-input').val().trim();

		animal.push(newAnimal);
		console.log(newAnimal);
		renderButtons();
	});

	$(document).on('click', '.animal-btn', Giftastic);

	//Got the pausing gifs to work

	$(document).on('click', '.gif', function() {
		var state = $(this).attr('data-state');
		if (state === 'still') {
			$(this).attr('src', $(this).attr('data-animate'));
			$(this).attr('data-state', 'animate');
		} else {
			$(this).attr('src', $(this).attr('data-still'));
			$(this).attr('data-state', 'still');
		}
	});
});
