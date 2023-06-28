//p5.js JS library

//we have to parse thru using .split() func

// trim method to clean data
async function getData() {
  const response = await fetch("ZonAnn.Ts+dSST.csv");
  const data = await response.text();

  const table = data.split(/\n/); //('\n')
  table.splice(0, 1); //u can also use .splice on line 9

  table.forEach((i) => {
    let row = i.split(",");
    const year = row[0];
    const temp = row[1];
    console.log("The year is", year, "and the temp was:", temp);
  });
}

getData();
