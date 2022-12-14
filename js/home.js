$(document).ready(function () {
  const URL = "http://localhost:3000/autos";

  let params = new URLSearchParams(location.search);
  const id = params.get("id");
  console.log(id);
  if (id == "null") {
    $("#auto").html('<h4 class="text-center mt-5 mb-5">No Hay Registro<h4>');
  } else {
    (async () => {
      const response = await fetch(URL + "/" + id);
      const auto = await response.json();
      $("#name").val(auto[0].name);
      $("#description").val(auto[0].description);
      $("#color").val(auto[0].color);
      $("#price").val(auto[0].price);
      $("#imagen").attr("src", `img/${auto[0].image}`);
    })();
  }

  $("#btnUpdate").click(function () {
    var form = document.getElementById("form");

    const data = new FormData(form);
    const payload = new URLSearchParams(data);

    (async () => {
      const response = await fetch(URL + "/update/" + id, {
        method: "POST",
        body: payload,
      });
      const result = await response.json();
      alert(result.message);
      location.href = "index.html";
    })();
  });
  $("#btnDelete").click(function () {
    var msj = `Oprimir ACEPTA ó OK para BORRAR el Registro # ${id}!`;
    var image = $("#imagen").attr("src");

    if (confirm(msj)) {
      (async () => {
        const response = await fetch(URL + "/delete/" + id, {
          method: "DELETE",
        });
        const result = await response.json();
        alert(result.message);
      })();
    }
  });
});
