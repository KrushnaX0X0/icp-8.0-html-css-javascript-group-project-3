
        let mainImg = document.getElementById("main-img");
function imgchanger(num) {
    switch (num) {
        case 1:
            mainImg.src = "./../img/about-img/1.png";
            break;
        case 2:
            mainImg.src = "./../img/about-img/3.png";
            break;
        case 3:
            mainImg.src = "./../img/about-img/2.png";
            break;
        case 4:
            mainImg.src = "./../img/about-img/4.png";
            break;
        case 5:
            mainImg.src = "./../img/about-img/5.png";
            break;
        default:
            break;
    }
}

let outp = document.getElementById("op");
function output(nums) {
    switch (nums) {
        case 1:
            outp.innerHTML = `
                <h1 class="head">Butter Chicken recipe</h1>
                
                <br>
                
                <ul style="list-style-type:none;">
                    <li>Chicken: 500g</li>
                    <li>Butter: 50g</li>
                    <li>Onion: 2, chopped</li>
                    <li>Tomato: 1</li>
                    <li>Ginger-garlic paste: 1 tablespoon</li>
                    <li>Turmeric Powder, chili Powder: 1/2 teaspoon</li>
                    <li>Heavy cream: 1/2 cup</li>
                </ul>
            <img src="./../img/about-img/11.jpg" alt="hii" class="img-recepi">
                `;

            break;
        case 2:
            outp.innerHTML = `
                <h1 class="head">Dal Makhani</h1>
                <br>
                <ul style="list-style-type:none;">
                    <li>Black lentils 1cup ,Kidney beans 1/2 cup,Butter: 50g</li>
                    <li>Onion: 1, chopped,Tomato: 2, chopped</li>
                    <li>Ginger-garlic paste & Garam masala: 1 teaspoon</li>
                    <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                    <li>Fresh coriander leaves (cilantro): for garnish</li>
                    <li>Heavy cream: 1/4 cup</li>
                </ul>
                <img src="./../img/about-img/21.jpg" alt="hii" class="img-recepi">
            `;
            break;
        case 3:
            outp.innerHTML = `
                <h1 class="head">Palak Paneer recipe </h1>
                <br>
                <ul style="list-style-type:none;">
                    <li>Spinach: 500g</li>
                    <li>Paneer (Indian cheese): 200g, cubed</li>
                    <li>Ginger-garlic paste & Garam masala: 1 teaspoon</li>
                    <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                    <li>Fresh coriander leaves (cilantro): for garnish</li>
                    <li>Heavy cream: 1/4 cup</li>
                </ul>
                <img src="./../img/about-img/31.jpg" alt="hii" class="img-recepi">
            `;
            break;
        case 4:
            outp.innerHTML = `
            
            <h1 class="head">Biryani recipe </h1>
            <br>
            <ul style="list-style-type:none;">
                <li>Chicken: 500 grams, boneless pieces</li>
                <li>Basmati Rice: 2 cup</li>
                <li>Dahi (Yogurt): 1/2 cup</li>
                <li>Onion,Tomato & chili: 2,4</li>
                <li>Ginger-Garlic Paste,biryani masala-2spoon</li>
                <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                <li>Oil/Ghee :1/2cup</li>
            </ul>
        
            <img src="./../img/about-img/41.jpg" alt="hii" class="img-recepi">
        `;
            break;
        default:
            outp.innerHTML = "Select a dish to see the details.";
            break;
    }
}
    
const menuButton = document.getElementById("menu")
const closeButton = document.getElementById("close")
const imgsm = document.getElementById("img-sm")
function menu(hi) {
   let head = document.getElementById("head")
   if (hi==1) {
      head.classList.add("active")
      imgsm.classList.add("remove")
   }
   else {
      head.classList.remove("active")
      imgsm.classList.remove("remove")
   }
}
const imgarry = ["./../img/about-img/1.png"
    ,"./../img/about-img/2.png","./../img/about-img/3.png",
    "./../img/about-img/4.png","./../img/about-img/5.png"]
    let imgindex = 0;
function next(){

   if (imgindex == imgarry.length - 1) {
      imgindex = 0;
   } else {
      imgindex++;
    
   } 
   mainImg.src = imgarry[imgindex];
}
 function prev(){
   if (imgindex == 0) {
      imgindex = imgarry.length - 1;
   } else {
      imgindex--;

   }
   mainImg.src = imgarry[imgindex];
}
setInterval(next, 3000);
