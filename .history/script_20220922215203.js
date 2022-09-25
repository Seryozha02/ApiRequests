let promise = new Promise(function(resolve, reject) {
        resolve (fetch("https://api.covidtracking.com/v1/states/ca/daily.json"))
        
}).then