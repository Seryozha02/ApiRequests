let api = fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
  .then(function (result) {
    return result.json();
  })
  .then((response) => {
    let resp = response.slice(0, 20);
    let table = document.createElement("table");
    table.id = "table";
    table.innerHTML = `
    <thead>
        <tr>
            <td>Date</td>
            <td>Total</td>
            <td>Positive</td>
            <td>Negative</td>
            <td>Death</td>
        </tr>
    </thead>
`;
    let tBody = document.createElement("tbody");
    resp.forEach((a) => {
      tBody.innerHTML += `
      <tr>
            <td>${a.date}</td>
            <td>${a.total}</td>
            <td>${a.positive}</td>
            <td>${a.negative}</td>
            <td>${a.death}</td>
     </tr>
      `;
    });
    table.append(tBody)
  })
  .catch(function (error) {
    console.log(error);
  });

document.body.append(table);
