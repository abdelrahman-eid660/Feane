let darkmood = document.querySelector(".hero .navbar .user-option .dark-mood")
let body = document.body
let allbtn = document.querySelectorAll("#menu button") 
let h2menu = document.querySelectorAll("body h2") 
let icon = document.querySelector('.icon')
console.log(icon);

// ================= Dark Mood ===========================
let mood = 'dark'
function changeMood(){
    if(mood === "dark"){
        icon.classList.replace('fa-moon','fa-sun');
        body.style.backgroundColor = "#2c2c2c "
        for(let i = 0 ; i <allbtn.length; i++ ){
            allbtn[i].style.color = "white"
            allbtn[i].style.backgroundColor = "black"
        }
        for (let J = 0; J < h2menu.length; J++) {
            h2menu[J].style.color = "white";
        }
        mood = 'light';
    }
    else{
        icon.classList.replace('fa-sun','fa-moon');
        body.style.backgroundColor = ""
        for (let i = 0; i < allbtn.length; i++) {
            allbtn[i].style.backgroundColor = "";
            allbtn[i].style.color = "";
        }
        for (let J = 0; J < h2menu.length; J++) {
            h2menu[J].style.color = "";
        }
        mood = 'dark';
    }
}
darkmood.addEventListener("click",changeMood)

