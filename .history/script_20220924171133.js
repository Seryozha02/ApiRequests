let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json").then(function(result){
    let response = result.json()
   
    console.log(response.Array);
}).catch(function(error){
        console.log(error)
})

