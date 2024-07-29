function changes() {
    console.log("change occured");
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