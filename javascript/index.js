
function chekquentity(opration) {
    let result = document.getElementById('result')
    let resresult = document.getElementById('re-result')
    let value = 100

    let count = parseInt(result.innerText)
    if (opration === "add" && count < 5 ) {
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