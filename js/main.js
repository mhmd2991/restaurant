let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

//change active on scrol and click 
window.addEventListener("scroll", () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    })
});


//Search Form Code
document.querySelector('#search-icon').addEventListener("click", () => {
    document.querySelector('#search-form').classList.toggle('active');
})

document.querySelector('#close').addEventListener("click", () => {
    document.querySelector('#search-form').classList.remove('active');
})


//Slider Code
let elms = document.getElementsByClassName('splide');

for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        speed: '1000',
    }).mount();
}

// loader Code
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;

async function get() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    const data = await response.json();
    let menuContainer = document.querySelector('.menu .box-container');
    let html = "";
    data.meals.map((meal) => {
        html += `
            <div class="box" id="${meal.idMeal}">
            <div class="image">
                <img src="${meal.strMealThumb}" alt="">
                <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>${meal.strMeal}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at aperiam non vero ad
                    sapiente!</p>
                <a href="#" class="btn">add to cart</a>
                <span class="price">$12.99</span>
            </div>
        </div>
            `;
        menuContainer.innerHTML = html;
    });
}
get();