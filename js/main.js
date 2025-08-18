let darkmood = document.querySelector(".hero .navbar .user-option .dark-mood")
let body = document.body
let allbtn = document.querySelectorAll("#menu button") 
let h2menu = document.querySelectorAll("body h2") 
let icon = document.querySelector('.icon')
// ================= Dark Mood ===========================
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode")
    icon.classList.replace("fa-moon", "fa-sun");
}
darkmood.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")
    if(body.classList.contains("dark-mode")){
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }
})
