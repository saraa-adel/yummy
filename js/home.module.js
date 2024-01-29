import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"

export class Home {
     constructor() {
     this.details = document.getElementById('detailsContent')
     this.food = document.getElementById('food')

          this.ui = new Ui()
          this.getMeals("")
        //   this.getIngre()

          this.openNav()

          $('#close').click(() => {
            this.closeNav();
        });
        this.searchName()
        this.navCat()
        this.navArea()
        this.navIngre()
        this.navContact()
     }
 
    /* get API  */
     async getMeals(meal) {

        const loader = document.getElementById("loading");
        loader.classList.remove("d-none");
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
            const response = await api.json();
            // console.log(response.meals);
            this.ui.displayMeal(response.meals)
            loader.classList.add("d-none");
            this.showDetails()

}
    /* get first letter*/
     async getFirst(first) {

        const loader = document.getElementById("loading");
        loader.classList.remove("d-none");
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${first}`);
            const response = await api.json();
            // console.log(response.meals);
            this.ui.displayMeal(response.meals)
            loader.classList.add("d-none");
            this.showDetails()

}

async getCat() {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const response = await api.json();
        console.log(response.categories);
        this.ui.displayCats(response.categories)
        loader.classList.add("d-none");
        this.showCat()  
 
}

navCat(){
    $('#catsNav').click(() => {
        $('.search').addClass('d-none')
        $('.food').removeClass('d-none')
        this.closeNav();
        this.getCat()
    })
}
async getCats(cat) {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        const response = await api.json();
        console.log(response.meals);
        this.ui.displayMeal(response.meals)
        loader.classList.add("d-none");
        this.showDetails()

}

showCat(){

        document.querySelectorAll('.categoryName').forEach((catt) => {
            catt.addEventListener('click', () => {
                console.log('hello')
                $('#detailsContent ,.categoryName , #contact').addClass('d-none')
                $('.meal').removeClass('d-none')
                const catMeal = catt.getAttribute("id")
                console.log(catMeal)
                this.getCats(catMeal)
            })
    
})
}
async getArea() {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        const response = await api.json();
        console.log(response.meals);
        this.ui.displayArea(response.meals)
        loader.classList.add("d-none");
        this.showArea()  
 
}

navArea(){
    $('#areaNav').click(() => {
        $('.search , #contact').addClass('d-none')
        $('.food').removeClass('d-none')
        this.closeNav();
        this.getArea()
    })
}
async getAreas(are) {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${are}`);
        const response = await api.json();
        console.log(response.meals);
        this.ui.displayMeal(response.meals)
        loader.classList.add("d-none");
        this.showDetails()

}

showArea(){

        document.querySelectorAll('.divv').forEach((areaa) => {
            areaa.addEventListener('click', () => {
                console.log('hello')
                $('#detailsContent ,.divv ,#contact').addClass('d-none')
                $('.meal').removeClass('d-none')
                const areaMeal = areaa.getAttribute("id")
                console.log(areaMeal)
                this.getAreas(areaMeal)
            })
    
})
}


async getIngre() {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const response = await api.json();
        console.log(response.meals);
        this.ui.displayIngre(response.meals)
        loader.classList.add("d-none");
        this.showIngre()   

}

navIngre(){
    $('#ingreNav').click(() => {
        $('.search , #contact').addClass('d-none')
        $('.food').removeClass('d-none')
        this.closeNav();
        this.getIngre()
    })
}

async getIngres(ingred) {

    const loader = document.getElementById("loading");
    loader.classList.remove("d-none");
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
        const response = await api.json();
        console.log(response.meals);
        this.ui.displayMeal(response.meals)
        loader.classList.add("d-none");
        this.showDetails()

}

showIngre(){

        document.querySelectorAll('.ingre').forEach((ing) => {
            ing.addEventListener('click', () => {
                console.log('hello')
                $('#detailsContent ,.ingre ,#contact').addClass('d-none')
                $('.meal').removeClass('d-none')
                const meaaal = ing.getAttribute("id")
                console.log(meaaal)
                this.getIngres(meaaal)
            })
    
})
}
    /* Open nav */
openNav(){
    $('#bar').click(function () {
        $('#navbar').animate({ 'left': '0px' }, 500)
        $('#bar').addClass('d-none')
        $('#close').removeClass('d-none')
        $('.navbar .inner ul').animate({ 'padding-top': '0px' }, 0)
        $('.navbar .inner ul li').each(function (index) {
            $(this).delay(index * 80).animate({ 'padding': '8px 0px' }, 500)
        })
    })
}

     /* Close nav */
closeNav(){
        $('#navbar').animate({ 'left': '-258px' }, 500)
        $('#bar').removeClass('d-none')
        $('#close').addClass('d-none')
        $('.navbar .inner ul').animate({ 'padding-top': '60px' }, 200)
        $('.navbar .inner ul li').animate({ 'padding': '60px 0px' }, 1200)
}
     /*meal details*/
showDetails() {
    document.querySelectorAll('.meal').forEach((meal) => {
        meal.addEventListener("click", () => {
            const loader = document.getElementById("loading");
            loader.classList.remove("d-none");
            this.closeNav();
            this.food.classList.add('d-none');
            this.details.classList.remove('d-none');
            $('.search , #contact').addClass('d-none');
            const mealId = meal.getAttribute("id");
            loader.classList.add("d-none");

            new Details(mealId);

        });
    });
}
    /* Search with name or first letter */
searchName(){
    $('#searchNav').click(() => {
        $('.food, .search').removeClass('d-none');
        $('#contact').addClass('d-none');
        this.closeNav();
        $('.meal, #detailsContent').addClass('d-none');

        $('.search-bar').on('input', () => {
            let name = $('.search-bar').val();
            if (name === "") {
                this.getMeals(name);
            }else{
                console.log(name);
                this.getMeals(name);
                $('.meal').removeClass('d-none');
            }
        });
        $('.searchFirst').on('input', () => {
            let first = $('.searchFirst').val();
            if (first === "") {
                this.getFirst('a');
            }else{
                console.log(first);
                this.getFirst(first);
                $('.meal').removeClass('d-none');
            }
        });
    });

}


navContact(){
    $('#contactNav').click(() => {
        $('.food , #details').addClass('d-none')
        $('#contact').removeClass('d-none')
        this.closeNav();
        this.inputsValidation()
    })
}

inputsValidation() {
    const userNameInput = $('#name');
    const userEmailInput = $('#email');
    const userPhoneInput = $('#phone');
    const userAgeInput = $('#age');
    const userPassInput = $('#pass');
    const userRepassInput = $('#repass');
    const button = document.querySelector("button");


    userEmailInput.on('input', () => {
        let regex2 = /^\w{3,10}(\d{3,12})?@\w{3,10}.(com)$/;

        if (regex2.test(userEmailInput.val())) {
            $('.email').addClass('d-none');
        } else {
            $('.email').removeClass('d-none');
        }
    });
    
    userPhoneInput.on('input', () => {
        let regex3 = /^01\d{9}$/;

        if (regex3.test(userPhoneInput.val())) {
            $('.phone').addClass('d-none');
        } else {
            $('.phone').removeClass('d-none');
        }
    });

    userAgeInput.on('input', () => {
        let regex4 = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

        if (regex4.test(userAgeInput.val())) {
            $('.age').addClass('d-none');
        } else {
            $('.age').removeClass('d-none');
        }
    });

    userPassInput.on('input', () => {
        let regex5 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*?])[(A-Za-z)\d!@#$%^&*?]{8,}$/;

        if (regex5.test(userPassInput.val())) {
            $('.pass').addClass('d-none');
        } else {
            $('.pass').removeClass('d-none');
        }
    });

    userRepassInput.on('input', () => {
        if(userPassInput.val()==userRepassInput.val()){
                $('.repass').addClass('d-none');
            } else {
                $('.repass').removeClass('d-none');
        }
    });

    // if (userNameInput.val()=="" && userEmailInput.val()=="" && userPhoneInput.val()=="" && userAgeInput.val()=="" && userPassInput.val()=="" && userRepassInput.val()=="") {
    //     button.setAttribute("disabled", true)
    // } else {
    //     button.setAttribute("disabled", false)
    // }
}
}

    