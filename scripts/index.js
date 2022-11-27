//Global functions
function getElementById(name) {
  return document.getElementById(name);
}

const baseURL = "https://freddy.codesubmit.io/";

async function request({
  url,
  obj = {},
  method = "POST",
  credentials = getCookie("getiToken"),
}) {
  try {
    const response = await fetch(baseURL + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials}`,
      },
      body: method !== "POST" ? null : JSON?.stringify(obj),
    });

    const data = await response.json();
    const status = response.status === 200 ? true : false;

    return {
      status,
      code: response.status,
      data,
      message: response?.data?.msg || "",
    };
  } catch (e) {
    console.error(e);
    return {
      status: false,
      message: e?.message || "An error occured, please try again later.",
    };
  }
}

async function checkLogin() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  const token = await getCookie("getiToken");
  const refresh = await getCookie("getiTokenRef");

  // console.log({ page});
  if (!token && !refresh) {
    if (page !== "" && page !== "index" && page !== "index.html") {
      // console.log("To index")
      window.location.href = "index";
      return;
    }
  } else {
    if (!token && refresh) refreshToken();
    if(token && refresh) {
      if (page === "" || page === "index" || page === "index.html") {
        window.location.href = "dashboard";
        return;
      }
    }
  }
}

async function refreshToken() {
  const req = await request({
    url: "refresh",
    credentials: getCookie("getiTokenRef"),
  });
  if (req.status) {
    setCookie("getiToken", req.data.access_token, 15);
  }
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
}

function setCookie(name, value, minutes) {
  var cookie = name + "=" + encodeURIComponent(value);

  if (typeof minutes === "number") {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
    cookie += "; max-age=" + expires;

    document.cookie = cookie;
  }
}

function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

document.addEventListener("DOMContentLoaded", function (event) {
  checkLogin();
  const dropShow = getElementById("showSideNav");
  const dropHide = getElementById("hideSideNav");
  const dropNav = getElementById("dropNav");
  const loginUser = getElementById("loginUser");
  const logoutUser = getElementById("logoutUser");

  if (dropShow && dropHide) {
    dropShow.addEventListener("click", (e) => {
      if (dropNav) {
        dropNav.style.width = "100%";
        dropNav.style.padding = "5px";
      }
    });

    dropHide.addEventListener("click", (e) => {
      if (dropNav) {
        dropNav.style.width = "0%";
        dropNav.style.padding = "0px";
      }
    });
  }

  if (loginUser) {
    loginUser.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = event.target[0].value;
      const password = event.target[1].value;
      const button = event.target[2];
      const error = getElementById("errorHandler");

      error.innerHTML = "";
      button.disabled = true;
      const req = await request({
        url: "login",
        obj: { username: name, password },
      });

      // console.log(req);
      if (!req.status) {
        error.innerHTML = req.data.msg;
        button.disabled = false;
      } else {
        setCookie("getiToken", req.data.access_token, 15);
        setCookie("getiTokenRef", req.data.refresh_token, 43200);

        window.location.href = "dashboard";
      }
    });
  }

  if (logoutUser) {
    logoutUser.addEventListener("click", () => {
      deleteCookie("getiToken");
      deleteCookie("getiTokenRef");
      window.location.replace("")
    });
  }
});
