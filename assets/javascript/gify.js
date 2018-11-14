 
var animal = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret",
    "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbal",
    "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];


function displayGifInfo() {

    var animalGif = $(this).attr("data-name");
    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i&rating=g&limit=10&tag=" + animalGif;
    var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + animalGif + "&api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i";
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=doug+demuro&type=video&key=AIzaSyBZLu912adN71vk6dczqV0RRWqswuC97j4"
    // var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + animal + "api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i&limit=10";
 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log('response', response);
        console.log(queryURL);
        var gifDiv = $("<div class='animal'></div>");

        var results = response.data;
        for (var i = 0; i < 10; i++) {
            var pOne = $("<div>").html("Rating: " + results[i].rating);

            gifDiv.append(pOne);
    
            var imageURL = results[i].images.fixed_height.url;
    
            var animalImage = $("<img>").attr("src", imageURL);
    
            animalImage.attr("class", "gif");

            animalImage.attr("data-state", "still");
    
            animalImage.attr("alt", "animal image");

            animalImage.attr("data-animate", imageURL);

            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
    
            
            $("#animal-view").prepend(animalImage);
            $("#animal-view").prepend(pOne);
        }

       
    });
};



function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < animal.length; i++) {

        var button = $("<button />");

        button.addClass("animal-btn");

        button.attr("data-name", animal[i]);

        button.text(animal[i]);

        $("#buttons-view").append(button);
        // console.log(animal[i]);
    };
};

$("#add-animal").on("click", function (event) {

    event.preventDefault();
    // This line grabs the input from the textbox
    var newAnimal = $("#animal-input").val().trim();

    animal.push(newAnimal);
    console.log(newAnimal);
    renderButtons();
});
/*
$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    console.log(state);
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
 });
 */

$(document).on("click", ".animal-btn", displayGifInfo);

renderButtons();
//Got the pausing gifs to work

$(document).on('click', ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === 'still') {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

// $(".gif").on("click", function() {
//     console.log(this);
//     var state = $(this).attr("data-state");
  
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });



//  $(document).ready(function() {
//     for (i = 0; i<= animalButtons.length; i++) {
//         var r = $('<input type="button" value="new button" />');
//         $("#button").append(animalButtons[i]);

//      };
// });









// var animal = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret",
// "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbal",
// "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];




// function displayGifInfo() {
    
//     var animal = $(this).attr("data-name");
//     //https:api.giphy.com/v1/gifs/search?q=

//     var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + animal + "api_key=A7effRemThrAFqB2MaRYC1ZHpQFjD18i&limit=10";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
// console.log('response', response);
//     var gifDiv = $("<div class='animal'></div>" );

//     var rating = response.Rated;

//     var pOne = $("<p></p>").text("Rating: " + rating);

//     gifDiv.append(pOne);

//     var imageUrl = response.data.image_original_url;

//     var animalImage = $("<img>").attr("src", imgageURL);

//     // animalImage.attr("src", imageUrl);

//     animalImage.attr("alt", "animal image");

    
//     $("#animal-view").prepend(animalImage);

//     });
// };


// function renderButtons () {
// // $("#buttons-view").empty();

// for (var i = 0; i < animal.length; i++) {
    
//     var a = $("<button>");
    
//     a.addClass("animal-btn");
    
//     a.attr("data-name", animal[i]);
    
//     a.text(animal[i]);
//     var buttonContainer = $("buttons-view")
//     // buttonContainer.attr("data-test", "testing")
//     // $("#buttons-view").append(a);
//     // console.log(animal[i]);
//     };
// };

// $("#add-animal").on("click", function (event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var animal = $("#animal-input").val().trim();

//     gif.push(animal);

//     renderButtons();
// });


// $(document).on("click", ".animal-btn", displayGifInfo);

// renderButtons();


    
// //  $(document).ready(function() {
// //     for (i = 0; i<= animalButtons.length; i++) {
// //         var r = $('<input type="button" value="new button" />');
// //         $("#button").append(animalButtons[i]);
            
// //      };
// // });
    

