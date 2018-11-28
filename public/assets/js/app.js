$(document).on("ready", function(){
  
  // TO DEVOUR BURGER
  $(".devour-btn").on("click", function(){
    console.log("click")

    let id = $(this).attr('data-id');
    let name = $(this).attr('data-name');

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      // data: devoured
    }).then(
      function() {
        alert("You've eaten the " + name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // TO SUBMIT NEW BURGER
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        alert("Submitted burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

    // TO DEVOUR BURGER
    $(".delete-btn").on("click", function(){
      console.log("click")
  
      let id = $(this).attr('data-id');
      let name = $(this).attr('data-name');
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          alert("You threw out the " + name);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

})