var button = document.querySelector("#searchButton");
var request = document.querySelector("#input");
let results = document.querySelector("#results")

console.log(request.value);

button.addEventListener("click", function() {
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${request.value}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      })
    })

    // HTML that is injected with the search results
    .then(function(data) {
      let results = data.results;
      console.log(result);
      for (var i = 0; i < results.length; i++) {
        results.innerHTML += `
      <div class="">
        <a href=${results[i].href}>
          <img src="${results[i].thumbnail}" alt="This is a " />
          <p>${results[i].title}</p>
        </a>
      </div>
      `
      }
    })
    .catch(function(error) {
      console.log("Fetch Error: ", error);
    })
})
