
//DOM elements

let foodDiv = document.querySelector("#food");
let foodData = [];


function makeData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .then((res) => {
      foodData = [...res];
      createDiv(foodData);
    });
  
}

//div oluşturur.
function createDiv() {
  foodDiv.innerHTML = " ";
  foodData.map((item) => {
    let cardDiv = document.createElement("div");
    let cardTitle = document.createElement("p");
    let likeBtn = document.createElement("span");
    let like = document.createElement("i");
    likeBtn.className = "icon-click-area";
    likeBtn.setAttribute("id", "like");
    like.className = "far fa-heart icon-color";
    cardDiv.className = "cards";
    cardTitle.innerText = item.title;
    cardTitle.className = "card-title";
    cardDiv.appendChild(cardTitle);
    likeBtn.appendChild(like);
    cardDiv.appendChild(likeBtn);
    foodDiv.appendChild(cardDiv);
  });
}

 function search() {
  let searchValue = document.getElementById("searchBar").value;
  console.log(searchValue);
  event.preventDefault();
  foodData.filter((item) => {
    if (item.title.includes(searchValue)) {
      createDiv(searchValue);
    }
  });
}  


/* function search(){
  event.preventDefault();
  let searchValue = document.getElementById("searchBar").value;
  console.log(searchValue)
  var filter = searchValue.toUpperCase();
  var p = document.createElement("p");
    for (var i = 0; i < foodData.length; i++) {
        var p = foodData[i].querySelector("#p")[0];
        if (foodData[i].innerText.toUpperCase().indexOf(filter) > -1) {
         foodData[i].style.display = "jhdf"
         console.log(foodData[0])
        } else {
            foodData[i].style.display = "none";
        }
    }
}  */
  

export { search, makeData, createDiv };
