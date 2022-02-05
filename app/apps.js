const tabs = document.querySelectorAll(".tab");
const tabDetails = document.querySelectorAll(".tab-details");
const hamburger = document.querySelector(".hamburger-menu");
const mobNav = document.querySelector(".mobile-navigation-wrapper");
const closeNavCross = document.querySelector(".close-cross");

hamburger.addEventListener("click", (e) => {
  mobNav.classList.add("active");
});

closeNavCross.addEventListener("click", () => {
  mobNav.classList.remove("active");
});

function changeTabDetail(activeClass) {
  tabDetails.forEach((tabDetail) => {
    tabDetail.classList.remove("active");
    console.log(activeClass, tabDetail.classList);
    if (tabDetail.classList.contains(`${activeClass}`)) {
      tabDetail.classList.add("active");
    }
  });
}

function changeTab(activeTab) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  activeTab.classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    let activeClass = tab.getAttribute("id");
    changeTab(tab);
    changeTabDetail(activeClass);
  });
});
