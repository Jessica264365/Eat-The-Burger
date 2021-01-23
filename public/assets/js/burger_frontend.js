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
