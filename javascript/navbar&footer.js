function enableDark(){
   const mainBody = document.getElementById("main-body")
   mainBody.classList.add("bg-dark")
   mainBody.classList.remove("bg-light")

   const toggleButton = document.getElementById("btn-toggle")
   toggleButton.classList.remove("btn-light")
   toggleButton.classList.add("btn-dark")
}
function enableLight(){
   const mainBody = document.getElementById("main-body")
   mainBody.classList.add("bg-light")
   mainBody.classList.remove("bg-dark")

   const toggleButton = document.getElementById("btn-toggle")


   toggleButton.classList.add("btn-light")
   toggleButton.classList.remove("btn-dark")
}
const menuButton = document.getElementById("menu")
const closeButton = document.getElementById("close")
function menu(hi) {
   let head = document.getElementById("head")
   if (hi==1) {
      head.classList.add("active")
   }
   else {
      head.classList.remove("active")
   }
}
