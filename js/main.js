let darkmood = document.querySelector(".hero .navbar .user-option .dark-mood")
console.log(darkmood);
let body = document.body
let allbtn = document.querySelectorAll("#menu button") 
let h2menu = document.querySelectorAll("body h2") 
function changeMood(){
    let currentbody = window.getComputedStyle(body).backgroundColor;
    if(currentbody === "rgb(44, 44, 44)"){
        body.style.backgroundColor = ""
        for (let i = 0; i < allbtn.length; i++) {
            allbtn[i].style.backgroundColor = "";
            allbtn[i].style.color = "";
        }
        for (let J = 0; J < h2menu.length; J++) {
            h2menu[J].style.color = "";
        }
    }
    else{
        body.style.backgroundColor = "#2c2c2c "
        for(let i = 0 ; i <allbtn.length; i++ ){
            allbtn[i].style.color = "white"
            allbtn[i].style.backgroundColor = "black"
        }
        for (let J = 0; J < h2menu.length; J++) {
            h2menu[J].style.color = "white";
        }
    }
}
darkmood.addEventListener("click",changeMood)

