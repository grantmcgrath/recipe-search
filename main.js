var button = document.querySelector("#searchButton");
var request = document.querySelector("#input");
let retResults = document.querySelector("#results")

// console.log(request.value);

button.addEventListener("click", function() {
  retResults.innerHTML = ` `;
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${request.value}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
      let results = data.results;
      // console.log(results);
      // console.log(results.length);
      for (var i = 0; i < results.length; i++) {
        retResults.innerHTML += `
      <div class="boxedResults">
        <a href="${results[i].href}">
          <img src="${results[i].thumbnail}" alt="No image available of ${results[i].title}" target="_blank">
          <p>${results[i].title}</p>
        </a>
      </div>
      `
      }
    })
    .catch(function(error) {
      console.log("Fetch Error: ", error);
    })
})})
