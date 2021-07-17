  
import { search, makeData, } from "./foodData.js";



const formDOM = document.getElementById("searchSubmit");
`${makeData()}`
searchBar.addEventListener('keyup', (e) => search(e));



//Kullanıcı adınınn kullnılması
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .catch((err) => console.log("error error"))
    .then(userData => {
      document.querySelector("#name").innerHTML = "Merhaba, " + userData.name + "<br>" +" Hoşgeldiniz";
    });
    


/* const load =  document.querySelector("#mainPage")
   load.innerHTML('<div id="loading"><br><br>Sayfa Yükleniyor...</div>'); 
load.onload=function(){ 
document.getElementById("loading").style.display="none"; 
} */