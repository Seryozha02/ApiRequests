let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json").then(function(result){
    let response = result.json()
    return
    console.log(result);
}).catch(function(error){
        console.log(error)
})

