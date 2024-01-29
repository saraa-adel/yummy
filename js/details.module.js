import { Ui } from "./ui.module.js";

export class Details {
     constructor(id){
               document.querySelector(".meals .meal").addEventListener("click", () => {
               document.querySelector(".food").classList.remove("d-none");
               document.querySelector(".details").classList.add("d-none");
            });
            this.ui = new Ui()
            this.getDetails(id)
     }

     async getDetails(id){
          const loader = document.getElementById("loading");
              loader.classList.remove("d-none");
              const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
              const response = await api.json();
          //     console.log(response.meals[0]);
              this.ui.displayDetails(response.meals[0])
              loader.classList.add("d-none");          

      }
}