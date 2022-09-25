let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
.then(function(result){
    return result.json()
}).
then(response => {
	let resp = response.slice(0, 20)
    resp.forEach(a =>{
        console.log("date" a.date)
    })
    
})
.catch(function(error){
        console.log(error)
})