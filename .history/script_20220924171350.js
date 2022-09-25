let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
.then(function(result){
    return result.json()
}).
then(response => {
	let api = response.slice(0, 20)
    console.log(api.Date)
})
.catch(function(error){
        console.log(error)
})