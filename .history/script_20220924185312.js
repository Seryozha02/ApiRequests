let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
.then(function(result){
    return result.json()
}).
then(response => {
	let resp = response.slice(0, 20)
    resp.forEach(a=>{
        console.log(a.date)
    })
    
})
.catch(function(error){
        console.log(error)
})


let table = document.createElement("table")
table.id = "table"

document.body.append(ta)