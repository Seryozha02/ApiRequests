let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json").then(function(result){
    result.json().slice(0, 20)
    console.log(result);
}).catch(function(error){
        console.log(error)
})

