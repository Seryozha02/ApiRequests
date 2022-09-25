let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json").then(function(result){
return result.slice()        
console.log(result.json())
}).catch(function(error){
        console.log(error)
})

