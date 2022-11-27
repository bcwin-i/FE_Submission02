//Global functions
function getElementById(name) {
  return document.getElementById(name);
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("ready")
  const dropShow = getElementById("showSideNav");
  const dropHide = getElementById("hideSideNav");
  const dropNav = getElementById("dropNav");
  console.log(dropShow, dropHide)

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
});
