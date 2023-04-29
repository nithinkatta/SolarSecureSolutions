$.ajax({
    type:'GET',
    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success : function(responce)
    {
        console.log(responce.meals)

        for(var i=0;i<responce.meals.length;i++)
        {
            
            $('#items').append(
                `<div class="col-md-3 m-3 shadow-lg p-3 mb-5 bg-white rounded">
                    <p class="text-center">${responce.meals[i].strMeal}</p>
                    <img src="${responce.meals[i].strMealThumb}" alt="Image of ${responce.meals[i].strMeal}" class="img-fluid">
                    <p>${responce.meals[i].idMeal}</p>
                </div>`
            )
        }
    }
})