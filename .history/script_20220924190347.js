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
    let tBody = document.c
    resp.forEach((a) => {
      console.log(a.date);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

document.body.append(table);
