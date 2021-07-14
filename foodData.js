
const makeElement = (foodData) => {
    foodData.map(item => {
      let newList = document.querySelector("#foodList");
      var newFood = document.createElement("li");
      // var like = document.createElement("button");
      newFood.innerHTML = item.title;
      newList.appendChild(newFood);
      // like.innerText= `👍`;
     
     // newList.appendChild(like);
      
      //console.log(newList);
    });
  }




 function makeList() {
   fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch((err)=>console.log(err))
    .then((foodData) => makeElement(foodData));
}

 
function search(){
  event.preventDefault();
  let searchValue = document.getElementById("searchBar").value;
  console.log(searchValue)
  var filter = searchValue.toUpperCase();
  var ul = document.getElementById("foodList");
  var a = document.createElement("a");
  var li = ul.getElementsByTagName("li");
 
    for (var i = 0; i < li.length; i++) {
      
       var a = li[i].getElementsByTagName("a")[0];
        if (li[i].innerText.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "jhdf"
         console.log(li[0])
        } else {
            li[i].style.display = "none";
        }
    }
} 
 


export { search, makeList };



