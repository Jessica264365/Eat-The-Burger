// When the button is clicked a new burger is posted to the database
$("#newBurger").on("click", (event) => {
  event.preventDefault();

  const name = {
    name: $("#addBurger").val().trim(),
  };

  $.ajax({
    url: "/api/burger",
    method: "POST",
    data: name,
  }).then(() => {
    location.reload();
  });
});

//When the button is clicked a burger is moved to the devoured side of the screen
$(".eatIt").on("click", (event) => {
  event.preventDefault();
  const burgerId = {
    id: $(event.target).data("id"),
  };
  $.ajax({
    url: "/api/devoured",
    method: "PUT",
    data: burgerId,
  }).then(() => {
    location.reload();
  });
});
