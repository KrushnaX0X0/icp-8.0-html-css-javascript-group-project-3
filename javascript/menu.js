let breakfast = document.getElementById('breakfast');
let lunch = document.getElementById('lunch');   
let dinner = document.getElementById('dinner');
function toRemove(active) {
    switch (active) {
        case 2:
            breakfast.classList.add('display-none');
            break;
            case 3:
                lunch.classList.add('display-none');
                break;
                case 3:
                dinner.classList.add('display-none');
                break;
                case 1:
                    breakfast.classList.remove('display-none');
                    lunch.classList.remove('display-none');
                    dinner.classList.remove('display-none');    
                    break;
        default:
            break;
    }
    
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