let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json").then(function(result){
    return result.json().slice(0, 20)
    log
}).catch(function(error){
        console.log(error)
})

