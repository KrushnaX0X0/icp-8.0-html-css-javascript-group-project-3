
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
                <h1>Butter Chicken recipe</h1>
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
            `;
            break;
        case 2:
            outp.innerHTML = `
                <h1>Dal Makhani</h1>
                <br>
                <ul style="list-style-type:none;">
                    <li>Black lentils 1cup ,Kidney beans 1/2 cup,Butter: 50g</li>
                    <li>Onion: 1, chopped,Tomato: 2, chopped</li>
                    <li>Ginger-garlic paste & Garam masala: 1 teaspoon</li>
                    <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                    <li>Fresh coriander leaves (cilantro): for garnish</li>
                    <li>Heavy cream: 1/4 cup</li>
                </ul>
            `;
            break;
        case 3:
            outp.innerHTML = `
                <h1>Palak Paneer recipe </h1>
                <br>
                <ul style="list-style-type:none;">
                    <li>Spinach: 500g</li>
                    <li>Paneer (Indian cheese): 200g, cubed</li>
                    <li>Ginger-garlic paste & Garam masala: 1 teaspoon</li>
                    <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                    <li>Fresh coriander leaves (cilantro): for garnish</li>
                    <li>Heavy cream: 1/4 cup</li>
                </ul>
            `;
            break;
        case 4:
            outp.innerHTML = `
            
            <h1>Biryani recipe </h1>
            <br>
            <ul style="list-style-type:none;">
                <li>Chicken: 500 grams, boneless pieces</li>
                <li>Basmati Rice: 2 cup</li>
                <li>Dahi (Yogurt): 1/2 cup</li>
                <li>Onion,Tomato & chili: 2,4</li>
                <li>Ginger-Garlic Paste,biryani masala-2spoon</li>
                <li>Turmeric powder & Red chili powder: 1/2 teaspoon</li>
                <li>Heavy cream: 1/4 cup</li>
                <li>Oil/Ghee :1/2cup</li>
            </ul>
        `;
            break;
        default:
            outp.innerHTML = "Select a dish to see the details.";
            break;
    }
}
    