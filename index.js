  
import { searchView,search, makeList } from "./foodData.js";




`${makeList()}`
const formDOM = document.getElementById("searchSubmit");
searchBar.addEventListener('keyup', (e) => search(e));




//Kullanıcı adınınn kullnılması
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .catch((err) => console.log("error error"))
    .then(userData => {
      document.querySelector("#name").innerHTML = "Merhaba, " + userData.name + "<br>" +" Hoşgeldiniz";
    })
    




