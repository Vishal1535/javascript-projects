let input=document.querySelector('input');
let SearchBtn=document.querySelector('#SearchBtn');
let ItemContainer=document.querySelector('.ItemContainer');
let InfoRecipe=document.querySelector('#InfoRecipe');
window.addEventListener("keydown",(e)=>{
    if(e.key==='Enter')
        SearchBtn.click();
})
SearchBtn.addEventListener('click',()=>{
    if(input.value.trim()==="")
        return;
    GetData(input.value);
    
})
let ImpleMent=(data)=>{
    ItemContainer.innerHTML='';
    if(data.meals===null)
    {
        InfoRecipe.innerHTML=`InValid Dish name`
        return;
    }
    InfoRecipe.innerHTML='Your Dish';
    data.meals.forEach((meal)=>{
        console.log(meal);
        
       let ele=document.createElement('div');
       ele.className='Item';
       ele.innerHTML=`
       <img src=${meal.strMealThumb} alt="Img">
                <p id="name">${meal.strMeal}</p>
                <p> ${meal.strArea}</p>
                <button id="View">View Recipe</button>
       `
       ItemContainer.append(ele)
       
        
    })
}
async function GetData(value) {
  try {
    InfoRecipe.innerHTML="Searching Your Data"
    let API = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );

    let data = await API.json();
    ImpleMent(data);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

