let modebtn = document.getElementById("mode");
let currentmode = "light";
modebtn.addEventListener("click", () => {
 console.log("Mode clicked");
 if(currentmode == "light"){
     currentmode = "dark";
     document.querySelector('body').style.backgroundColor = "#000000";
 }
 else{
     currentmode = "light";
     document.querySelector('body').style.backgroundColor = "pink";
 }
})