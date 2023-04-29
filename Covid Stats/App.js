// Using json data from https://covidtracking.com/api/v1/states/current.json
// right click on the page and click on inspect
// Check in the console for the data
$.ajax({
    type:'GET',
    url:'https://api.covid19api.com/summary',
    success : function(responce)
    {
        console.log(responce.Countries)

        for(var i=0;i<responce.Countries.length;i++)
        {
            var TotalActive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalDeaths - responce.Countries[i].TotalRecovered
            var tablerow = "<tr><td>"+responce.Countries[i].Country+"</td><td>"+responce.Countries[i].TotalConfirmed+"</td><td>"+TotalActive+"</td><td>"+responce.Countries[i].TotalRecovered+"</td><td>"+responce.Countries[i].TotalDeaths +"</td></tr>"

            $('#tbody').append(tablerow)
        }

        $('#table').DataTable()
    },
    error : function(error)
    {
        console.log(error)
    }
})
        