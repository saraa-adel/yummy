export class Ui{
    constructor(){}

displayMeal(data) {
     let mealBox = ``;
 
     for (let i = 0; i < data.length; i++) {
         mealBox += `
             <div id="${data[i].idMeal}" role="button" class="meal hov col-md-3">
                 <div class="position-relative rounded-2">
                     <img src="${data[i].strMealThumb}" class="w-100" alt="food">
                     <div class="img-hover fw-medium position-absolute w-100">
                         <h3 class="ps-2 w-100">${data[i].strMeal}</h3>
                     </div>
                 </div>
             </div>
         `;
     }
 
     document.getElementById('meals').innerHTML = mealBox
}

 displayDetails(data){
       const mealDetails = `
        <div class="col-md-4">
                <div>
                    <img src="${data.strMealThumb}" class="w-100 rounded-2" alt="food">
                </div>
                <h2>${data.strMeal}</h2>
                </div>
                <div class="col-md-8">
                <h2 class="text-white">Instructions</h2>
                <p>${data.strInstructions}</p>
                <h3><span class="fw-bold">Area : </span>${data.strArea}</h3>
                <h3><span class="fw-bold">Category : </span>${data.strCategory}</h3>
                <div class="pb-2">
                    <h3>Recipes : </h3>
                    <div class="recipes pt-2 d-flex flex-wrap">
                    </div>
                </div>
                <div class="pb-2">
                    <h3>Tags : </h3>
                    <div class="tags pt-2 d-flex flex-wrap">
                    </div>
                </div>
                <span>
                    <div class="pt-2 d-flex">
                        <button type="button" class="btn btn-success rounded-2 me-1"><a class="text-white text-decoration-none" href="${data.strSource}">Source</a></button>
                        <button type="button" class="btn btn-danger rounded-2"><a class="text-white text-decoration-none" href="${data.strYoutube}">Youtube</a></button>
                    </div>
                </span>
        </div>
        `
        document.getElementById('details').innerHTML = mealDetails
        let recipes = ``
        for (let i = 1; i <= 20; i++) {
            if (data[`strIngredient${i}`]) {
                recipes +=`<p id="${data[`strIngredient${i}`]}" class="p-1 rounded-2 mx-2">${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}</p>`
                document.querySelector('.recipes').innerHTML =recipes
            }
        }

        let tags = data.strTags?.split(",")
        if (!tags){
            tags = []
        }
        let tag =``
        for (let i = 0; i < tags.length; i++) {
                tag +=`<p class="p-1 rounded-2 mx-2 mb-1">${tags[i]}</p>`
        }
        document.querySelector('.tags').innerHTML =tag

}

displayCats(data) {
    let categoriesBox = ``;
    for (let i = 0; i < data.length; i++) {
        categoriesBox += `
        <div class="meal col-md-3">
            <div id="${data[i].strCategory}" class="hov categoryName position-relative rounded-2">
                <img src="${data[i].strCategoryThumb}" class="w-100" alt="food">
                <div class="img-hover fw-medium position-absolute w-100 d-flex flex-column text-center">
                    <h3 class="ps-2 pt-2 w-100">${data[i].strCategory}</h3>
                    <p class="fw-normal">${data[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById("meals").innerHTML = categoriesBox
}

displayArea(data) {
    let areaBox = ``;
    for (let i = 0; i < data.length; i++) {
        areaBox += `
        <div class="meal col-md-3">
            <div id="${data[i].strArea}" class="divv text-center">
                <i class="fa-solid fa-house-laptop"></i>
                <h3>${data[i].strArea}</h3>
            </div>
        </div>
        `;
    }
    document.getElementById('meals').innerHTML = areaBox
}

displayIngre(data){
    let ingreBox=``
    for(let i=0;i< 20;i++){
        ingreBox +=`
        <div class="meal col-md-3">
        <div id="${data[i].strIngredient}" class="ingre mb-5">
             <div class="text-center text-white">
                  <i class="fa-solid fa-drumstick-bite"></i>
                  <h3>${data[i].strIngredient}</h3>
                  <p>${data[i].strDescription}</p>
             </div>
        </div>
   </div>
        `
}
    document.getElementById('meals').innerHTML = ingreBox
}

}