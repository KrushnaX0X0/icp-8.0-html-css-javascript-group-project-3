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

