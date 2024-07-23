
function chekquentity(opration) {
    let result = document.getElementById('result')
    let resresult = document.getElementById('re-result')
    let value = 100
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||100) * (parseInt(count) ||100)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||100) * (parseInt(count)||100)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}



function fun2(opration) {
    let result = document.getElementById('card2-quen')
    let resresult = document.getElementById('prise-result2')
    let value = 80
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||80) * (parseInt(count) ||80)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||80) * (parseInt(count)||80)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}



function fun3(opration) {
    let result = document.getElementById('card3-quen')
    let resresult = document.getElementById('prise-result3')
    let value = 120
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||120) * (parseInt(count) ||120)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||120) * (parseInt(count)||120)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}



function fun4(opration) {
    let result = document.getElementById('card4-quen')
    let resresult = document.getElementById('prise-result4')
    let value = 230
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||230) * (parseInt(count) ||230)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||230) * (parseInt(count)||230)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }








}



const menuButton = document.getElementById("menu")
const closeButton = document.getElementById("close")
const body = document.getElementsByClassName("body")

function menu(hi) {
   let head = document.getElementById("head")
   if (hi==1) {
      head.classList.add("active")
      head.classList.add("back-bg")
      
   }
   else {
      head.classList.remove("active")
   }
}





