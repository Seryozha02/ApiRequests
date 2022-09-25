let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
.then(function(result){
    return result.json()
}).
then(response => {
	console.log(response.slice(0, 20))
    c
})
.catch(function(error){
        console.log(error)
})