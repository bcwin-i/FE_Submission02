document.addEventListener("DOMContentLoaded", async (event) => {
  const req = await request({ url: "dashboard", method: "GET" });
  const loader = getElementById("dashloader");
  let weekSales;
  let yearSales;
  let bestSellersData;

  if (loader) {
    loader.style.display = "none";
  }

  if (req.status) {
    const { bestsellers, sales_over_time_week, sales_over_time_year } =
      req.data.dashboard;

    weekSales = sales_over_time_week;
    yearSales = sales_over_time_year;
    bestSellersData = bestsellers;

    displayGraph(weekSales, true);
    cardsFill(weekSales, yearSales);
    displayBestSeller(bestSellersData);
  } else {
    const dashError = getElementById("dashError");
    if (dashError) dashError.innerHTML = `(${req.message})`;
  }

  const revSwitch = getElementById("revenueSwitch");
  const revTitle = getElementById("revSectionTitle");
  if (revSwitch && revTitle) {
    revSwitch.addEventListener("change", () => {
      if (revSwitch.checked) {
        week = false;
        revTitle.innerHTML = "Revenue (last 12 months)";
      } else {
        week = true;
        revTitle.innerHTML = "Revenue (last 7 days)";
      }
      displayGraph(
        !revSwitch.checked ? weekSales : yearSales,
        !revSwitch.checked
      );
    });
  }
});

function cardsFill(weekSales, yearSales) {
  const card1 = getElementById("cardCard1");
  const card2 = getElementById("cardCard2");
  const card3 = getElementById("cardCard3");

  let date = new Date()
  let day = date.getDay() + 1;

  if (card1) {
    card1.innerHTML = `$${formatoK(weekSales[day].total)} / ${
      weekSales[day].orders
    } orders`;
  }
  if (card2) {
    card2.innerHTML = `$${formatoK(weekSales[7].total)} / ${
      weekSales[7].orders
    } orders`;
  }
  if (card3) {
    card3.innerHTML = `$${formatoK(yearSales[12].total)} / ${
      yearSales[12].orders
    } orders`;
  }
}

function formatoK(amount) {
  let format = amount / 1000;
  format =
    Math.round(format).toString().length > 1
      ? `${Math.round(format)}K`
      : amount;

  return format;
}

function displayGraph(obj, week) {
  const revContainer = getElementById("revenueContainer");
  const revDaysContainer = getElementById("revenueDaysContainer");

  if (revContainer && revDaysContainer) {
    let total = 0;
    for (const [key, value] of Object.entries(obj)) {
      if (value.total > total) total = value.total;
    }

    let allRev = "";
    let allRevDays = "";
    for (const [key, value] of Object.entries(obj)) {
      allRev += `<span class="revenueGraph" style="height: ${
        (value.total / total) * 100
      }%; background-color: var(${
        week ? "--secondary" : "--primary"
      } )"></span>`;
      allRevDays += `<span class="textRotation">${
        key === "1" ? "today" : key === "2" ? "yesterday" : "day " + key
      }</span>`;
    }

    revContainer.innerHTML = allRev;
    revDaysContainer.innerHTML = allRevDays;
  }
}

function displayBestSeller(bestSellersData) {
  const constainer = getElementById("bestSellerTable");
  let rows = "";
  if (constainer)
    bestSellersData.map(
      (data, index) =>
        (rows += `
    <tr key=${index} style="background-color: ${
          index % 2 ? "rgba(0,0,0,0.1)" : "white"
        }">
            <td class="col1">
             ${data.product.name}
            </td>
            <td class="col2">
            </td>
            <td class="col3">${data.units}</td>
            <td class="col4">${data.revenue}</td>
          </tr> `)
    );

  constainer.innerHTML += rows;
}
