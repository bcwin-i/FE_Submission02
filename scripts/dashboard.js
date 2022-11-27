const weekSales = {
  1: {
    orders: 96,
    total: 270240,
  },
  2: {
    orders: 31,
    total: 74121,
  },
  3: {
    orders: 52,
    total: 180284,
  },
  4: {
    orders: 34,
    total: 115600,
  },
  5: {
    orders: 67,
    total: 333325,
  },
  6: {
    orders: 57,
    total: 374262,
  },
  7: {
    orders: 26,
    total: 35672,
  },
};

const yearSales = {
  1: {
    orders: 330,
    total: 2952510,
  },
  10: {
    orders: 746,
    total: 2322298,
  },
  11: {
    orders: 5424,
    total: 16863216,
  },
  12: {
    orders: 680,
    total: 3198040,
  },
  2: {
    orders: 745,
    total: 7034290,
  },
  3: {
    orders: 687,
    total: 6486654,
  },
  4: {
    orders: 311,
    total: 1593253,
  },
  5: {
    orders: 44,
    total: 166452,
  },
  6: {
    orders: 403,
    total: 3514966,
  },
  7: {
    orders: 342,
    total: 1870398,
  },
  8: {
    orders: 696,
    total: 2628096,
  },
  9: {
    orders: 279,
    total: 1401138,
  },
};

const bestSellers = [
  {
    product: {
      id: "e2414f21-2647-c4aa-748a-81dc838db74a",
      image:
        "https://images.unsplash.com/photo-1463860914822-61dc3ee606f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Cartoon Network Studios Lime Flower Youngberry Gummies",
    },
    revenue: 2835702,
    units: 6178,
  },
  {
    product: {
      id: "99564712-9bb0-fc90-aae4-5d7dcc6dd35a",
      image:
        "https://images.unsplash.com/photo-1463860914822-61dc3ee606f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Magik Lamp Jasmine Flowers Cowberry Drops",
    },
    revenue: 1798368,
    units: 4323,
  },
  {
    product: {
      id: "54cde370-ebf7-2895-113d-0c327c11d97a",
      image:
        "https://images.unsplash.com/photo-1463860914822-61dc3ee606f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Profitpros Licorice, Liquorice Cocky Apple Snack",
    },
    revenue: 3665331,
    units: 3669,
  },
  {
    product: {
      id: "07f4f715-b8c5-a308-0cbf-49fe627a8d59",
      image:
        "https://images.unsplash.com/photo-1463860914822-61dc3ee606f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Vermeer Industries Peppermint Raspberry Candy",
    },
    revenue: 3809712,
    units: 6852,
  },
  {
    product: {
      id: "07d109f3-ef17-6e01-aaa6-9d0e30300ccb",
      image:
        "https://images.unsplash.com/photo-1463860914822-61dc3ee606f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Gap Safflower European Blueberry Drops",
    },
    revenue: 1280610,
    units: 4743,
  },
  {
    product: {
      id: "194b82ca-3947-d38e-1509-56f942c86004",
      image:
        "https://images.unsplash.com/photo-1472452049192-db15def0be25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Drs Technologies Aniseed Myrtle Huckleberry Snack",
    },
    revenue: 1688960,
    units: 5824,
  },
  {
    product: {
      id: "f3e61ceb-3b9f-8f06-6ff7-d65fe27a434f",
      image:
        "https://images.unsplash.com/photo-1472452049192-db15def0be25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Estée Lauder Companies Licorice, Liquorice Amelanchier Drops",
    },
    revenue: 4477278,
    units: 4758,
  },
  {
    product: {
      id: "9033b5e3-c991-16d9-50fa-7a3836032105",
      image:
        "https://images.unsplash.com/photo-1472452049192-db15def0be25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Chargepal Cudweed Myrciaria Floribunda Drops",
    },
    revenue: 5116287,
    units: 8657,
  },
  {
    product: {
      id: "d0fa8777-5066-4bd2-bd1c-6bc231922aad",
      image:
        "https://images.unsplash.com/photo-1472452049192-db15def0be25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Chrysler Pandan Flower Keule Cotton Candy",
    },
    revenue: 5119303,
    units: 8113,
  },
  {
    product: {
      id: "0ef473de-ad65-59e8-6689-a8971000c6bf",
      image:
        "https://images.unsplash.com/photo-1472452049192-db15def0be25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "S3 Graphics Jimbu Black Sapote Cotton Candy",
    },
    revenue: 5000610,
    units: 5377,
  },
  {
    product: {
      id: "0d259437-f35f-a15a-5c80-f9d065b4bf71",
      image:
        "https://images.unsplash.com/photo-1542310503-ff8da9c02372?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Iron Mountain Artemisia Lime Gummies",
    },
    revenue: 2858368,
    units: 4384,
  },
  {
    product: {
      id: "4a9a79a5-1a8c-3e0e-3f57-c503a38eb47c",
      image:
        "https://images.unsplash.com/photo-1542310503-ff8da9c02372?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Starbucks Avens Berberis Snack",
    },
    revenue: 4605202,
    units: 9266,
  },
  {
    product: {
      id: "00aae6d2-bfea-71ee-d51b-f0ef49c60a77",
      image:
        "https://images.unsplash.com/photo-1542310503-ff8da9c02372?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Starbucks Culantro Raisin Gum",
    },
    revenue: 1635270,
    units: 5990,
  },
  {
    product: {
      id: "2c3341fd-3841-9da1-58cb-6917845b5d7c",
      image:
        "https://images.unsplash.com/photo-1542310503-ff8da9c02372?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Greyvoid Artemisia Dodder Laurel Gum",
    },
    revenue: 4765940,
    units: 7687,
  },
  {
    product: {
      id: "aee9992f-d535-8f1f-3fb4-fc757a76bc45",
      image:
        "https://images.unsplash.com/photo-1542310503-ff8da9c02372?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Better Business Ideas And Services Dorrigo Jostaberry Bar",
    },
    revenue: 1493184,
    units: 3333,
  },
  {
    product: {
      id: "d4794480-b413-d908-59aa-ff94d49e4b44",
      image:
        "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Chargepal Alligator Pepper Youngberry Gummies",
    },
    revenue: 3741950,
    units: 5585,
  },
  {
    product: {
      id: "5bd30011-c890-6941-2f82-b14a6bd0f744",
      image:
        "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Asian Junction Salep Cocky Apple Pretzels",
    },
    revenue: 2156605,
    units: 3817,
  },
  {
    product: {
      id: "079a056e-4d9e-c79c-9f66-7833aa71aba7",
      image:
        "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Creative Wealth Management Catnip Calamansi Candy",
    },
    revenue: 6417408,
    units: 8356,
  },
  {
    product: {
      id: "7ab1ab4d-def0-3803-b960-a0258ef1472e",
      image:
        "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Enviro Architectural Designs Aniseed Myrtle Tomatillo Bar",
    },
    revenue: 4474974,
    units: 9114,
  },
  {
    product: {
      id: "1521aea2-9c1a-c2a7-2fe2-79a8f91c44dc",
      image:
        "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Lucasfilm Peruvian Pepper Date Snack",
    },
    revenue: 2052891,
    units: 3753,
  },
  {
    product: {
      id: "d900aa29-717e-cfbc-9632-ffba085a853e",
      image:
        "https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Walmart Avens Keule Snack",
    },
    revenue: 3093580,
    units: 5815,
  },
  {
    product: {
      id: "dda3a02d-6bdc-dbe6-7494-edbdb62d5ac0",
      image:
        "https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Cna Cicely, Sweet Cicely Desert Fig Cotton Candy",
    },
    revenue: 1409624,
    units: 3749,
  },
  {
    product: {
      id: "ec8a9747-352c-4a34-50ce-46d2b21bfb12",
      image:
        "https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Geico Curry Plant Calamansi Bar",
    },
    revenue: 6222306,
    units: 6906,
  },
  {
    product: {
      id: "33000023-80f0-48cb-cb86-a9df2bb3086d",
      image:
        "https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Washburn Guitars Saffron Myrciaria Floribunda Pretzels",
    },
    revenue: 3530100,
    units: 8610,
  },
  {
    product: {
      id: "1968e98c-22b5-ef0b-a3b9-c8de3526aa14",
      image:
        "https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Jetblue Airways Barberry Melon Pear Snack",
    },
    revenue: 5990733,
    units: 9837,
  },
  {
    product: {
      id: "357b9977-7599-990b-245b-e180125973ca",
      image:
        "https://images.unsplash.com/photo-1484328577761-18c07a30344a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Gamma Realty Peruvian Pepper Camu Camu Bar",
    },
    revenue: 947400,
    units: 4737,
  },
  {
    product: {
      id: "3cab48fe-90ab-7703-bef2-cb21accc0e76",
      image:
        "https://images.unsplash.com/photo-1484328577761-18c07a30344a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Magik Lamp Lesser Calamint Banana Gummies",
    },
    revenue: 2606800,
    units: 6860,
  },
  {
    product: {
      id: "ea98ba03-610b-5d12-daa0-b6d0ac5a8ed6",
      image:
        "https://images.unsplash.com/photo-1484328577761-18c07a30344a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Musco Lighting Cinnamon Myrtle Dwarf Dangleberry Gum",
    },
    revenue: 5629800,
    units: 9383,
  },
  {
    product: {
      id: "48c93523-c3f4-affd-eb05-d2f8c0f0ba73",
      image:
        "https://images.unsplash.com/photo-1484328577761-18c07a30344a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Brown-Forman Corporation Caper Blood Orange Cotton Candy",
    },
    revenue: 990600,
    units: 7620,
  },
  {
    product: {
      id: "ba9e072a-9457-345d-7ffa-1be961014ddb",
      image:
        "https://images.unsplash.com/photo-1484328577761-18c07a30344a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
      name: "Vaughan & Bushnell Manufacturing Licorice, Liquorice Citron Pretzels",
    },
    revenue: 8593176,
    units: 9677,
  },
];

document.addEventListener("DOMContentLoaded", function(event) {
  displayGraph(weekSales, true);
  cardsFill();
  displayBestSeller();

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

function cardsFill() {
  const card1 = getElementById("cardCard1");
  const card2 = getElementById("cardCard2");
  const card3 = getElementById("cardCard3");

  if (card1) {
    card1.innerHTML = `$${formatoK(weekSales[1].total)} / ${
      weekSales[1].orders
    } orders`;
  }
  if (card2) {
    card2.innerHTML = `$${formatoK(weekSales[2].total)} / ${
      weekSales[2].orders
    } orders`;
  }
  if (card3) {
    card3.innerHTML = `$${formatoK(yearSales[2].total)} / ${
      yearSales[2].orders
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

function displayBestSeller() {
  const constainer = getElementById("bestSellerTable");
  let rows = "";
  if (constainer)
    bestSellers.map(
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
