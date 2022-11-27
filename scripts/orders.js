document.addEventListener("DOMContentLoaded", async () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let query = params;
  // console.log("Query", { page: query.page, search: query.q });
  let page = query.page || 1;
  let search = query.q || "";
  let size = 20;
  const loader = getElementById("dashloader");
  const leftArrow = getElementById("orderPaginationLeft");
  const rightArrow = getElementById("orderPaginationRight");
  const clearSearch = getElementById("clearSearch");
  const searchQuery = getElementById("searchQuery");

  const req = await request({
    url: `orders?page=${page}&q=${search}`,
    method: "GET",
  });

  if (loader) {
    loader.style.display = "none";
  }

  if(search !== "") {
    clearSearch.style.display = "block"
    const searchInput = getElementById("orderSearch")
    if(searchInput){
      searchInput.value = search
    }
  }

  if (req.status) {
    const { orders, page, total } = req.data;
    const paginarionLabel = getElementById("paginarionLabel");
    let pages = Math.round(total/size) 
    pages = pages < 1 ? 1 : pages
    if (paginarionLabel) {
      if (page > 1) leftArrow.style.display = "block";
      if (page < pages) rightArrow.style.display = "block";
      paginarionLabel.innerHTML = `Page ${page} of ${pages}`;
    }
    displayBestSeller(orders);
  } else {
    const dashError = getElementById("dashError");
    if (dashError) dashError.innerHTML = `(${req.message})`;
  }

  leftArrow.addEventListener("click", () => {
    window.location.href = `orders?page=${page - 1}&q=${search}`;
  });

  rightArrow.addEventListener("click", () => {
    window.location.href = `orders?page=${page + 1}&q=${search}`;
  });

  searchQuery.addEventListener("submit", async (event) => {
    event.preventDefault();
    const search = event.target[0].value;
    window.location.href = `orders?page=${1}&q=${search}`;
  });

  clearSearch.addEventListener("click", () => {
    window.location.href = `orders?page=${1}&q=`;
  });
});

function dateFormat(date) {
  var str = date;
  var dt = new Date(str + "Z");
  return dt.toUTCString();
}

function displayBestSeller(orders) {
  const constainer = getElementById("orderTable");
  // console.log("Orders: ", orders.length);
  let rows = "";
  if (constainer)
    orders.map(
      (data, index) =>
        (rows += `
      <tr key=${index} style="background-color: ${
          index % 2 ? "rgba(0,0,0,0.1)" : "white"
        }">
              <td class="col1">
               ${data.product.name}
              </td>
              <td class="col2">
              ${dateFormat(data.created_at)}
              </td>
              <td class="col3">${data.currency + " " + data.total}</td>
              <td class="col4" style="color: ${
                data.status === "processing"
                  ? "red"
                  : data.status === "delivered"
                  ? "green"
                  : "black"
              }; text-transform: capitalize">${data.status}</td>
            </tr> `)
    );

  constainer.innerHTML += rows;
}
