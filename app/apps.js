const tabs = document.querySelectorAll(".tab");
const tabDetails = document.querySelectorAll(".tab-details");
const hamburger = document.querySelector(".hamburger-menu");
const mobNav = document.querySelector(".mobile-navigation-wrapper");
const closeNavCross = document.querySelector(".close-cross");
const input = document.getElementById("email");
const inputWrapper = document.querySelector(".input-wrapper");

// email validation function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//validation function
function formValidation() {
  let x = document.forms["contactUsEmail"]["email"].value;

  if (validateEmail(x)) {
    if (inputWrapper.classList.contains("invalid-error")) {
      inputWrapper.classList.remove("invalid-error");
      input.value = "";
    }
    return true;
  } else {
    inputWrapper.classList.add("invalid-error");
    return false;
  }
}

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
