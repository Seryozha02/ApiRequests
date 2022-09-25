// let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
//   .then(function (result) {
//     return result.json();
//   })
//   .then((response) => {
//     let resp = response.slice(0, 20);
//     let table = document.createElement("table");
//     table.id = "table";
//     table.innerHTML = `
//     <thead>
//         <tr>
//             <td>Date</td>
//             <td>Total</td>
//             <td>Positive</td>
//             <td>Negative</td>
//             <td>Death</td>
//         </tr>
//     </thead>
// `;
//     let tBody = document.createElement("tbody");
//     resp.forEach((a) => {
//       tBody.innerHTML += `
//       <tr>
//             <td>${a.date ?? 0}</td>
//             <td>${a.total ?? 0}</td>
//             <td>${a.positive ?? 0}</td>
//             <td>${a.negative ?? 0}</td>
//             <td>${a.death ?? 0}</td>
//      </tr>
//       `;
//     });
//     table.append(tBody)
//     document.body.append(table);

//   })
//   .catch(function (error) {
//     console.log(error);
//   });


let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json");

api.then(function(result){
    return result.json();
}).then(function(response) {
    console.log(response.slice(0, 20))
}).catch(function(error))

















